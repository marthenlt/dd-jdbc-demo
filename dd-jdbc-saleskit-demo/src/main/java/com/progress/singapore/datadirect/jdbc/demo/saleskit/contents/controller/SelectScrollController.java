package com.progress.singapore.datadirect.jdbc.demo.saleskit.contents.controller;

import java.io.PrintWriter;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.DecimalFormat;
import java.text.DecimalFormatSymbols;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.TimeUnit;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.json.simple.JSONObject;
import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcOperations;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.RequestMapping;

import com.progress.singapore.datadirect.jdbc.demo.saleskit.common.Record;
import com.progress.singapore.datadirect.jdbc.demo.saleskit.common.WebUtil;

@Controller
public class SelectScrollController implements ApplicationContextAware {
	private Log log = LogFactory.getLog(SelectScrollController.class);
	
	private ApplicationContext applicationContext;
	
	private BlockingQueue<Record> queue;
	
	private Thread thread = null;
	
	private Map<String, Map<String,String>> mvm = new LinkedHashMap<String, Map<String,String>>();
	
	private static DecimalFormat df = new DecimalFormat("#,##0"); 
	
	static {
		DecimalFormatSymbols dfs = new DecimalFormatSymbols(); 
		dfs.setGroupingSeparator(',');
		df.setGroupingSize(3);
		df.setDecimalFormatSymbols(dfs); 
	}
	
	private class SelectExecutor implements Runnable {
		private String ds;
		private NamedParameterJdbcOperations operations;
		private String query;
		private Map<String, ?> paramMap;
		private long totCnt;
		private long msgCnt;
		private long cnt;
		private int orderCnt;
		
		public SelectExecutor(String ds, DataSource dataSource, String query, Map<String, ?> paramMap, long msgCnt) {
			this.ds = ds;
			this.operations = new NamedParameterJdbcTemplate(dataSource);
			this.query = query;
			this.paramMap = paramMap;
			this.msgCnt = msgCnt;
		}
		
		@Override
		public void run() {
			try {
				final long sTime = System.currentTimeMillis();
				String msg = "starting : " + new SimpleDateFormat("HH:mm:ss").format(new Date(sTime));
				log.debug(msg);
				Record rtnData = new Record();
				rtnData.put("RESULT_CONTENTS", msg);
				queue.put(rtnData);
				
				if (mvm.containsKey(ds)) {
					mvm = new LinkedHashMap<String, Map<String,String>>();
				}
				
				orderCnt = 0;
				operations.query(query, paramMap, new ResultSetExtractor<Object>() {
					@Override
					public Object extractData(ResultSet rs) throws SQLException, DataAccessException {
						try {
							Map<String,String> m = new LinkedHashMap<String,String>();
							long st = 0L;
							while (rs.next()) {
								if (cnt == 0) {
									st = System.currentTimeMillis();
								}
								cnt++;
								totCnt++;
								if (cnt >= msgCnt) {
									orderCnt++;
									Record r = new Record();
									r.put("RESULT_CONTENTS", "get rows : " +df.format(totCnt) + " ("+(System.currentTimeMillis() - st)+")");
									r.put("RESULT_STATUS", "PROC");
									log.debug("queue.put : " + r);
									m.put(totCnt/100000+"", (double)(System.currentTimeMillis() - sTime)/1000+"");
									queue.put(r);
									cnt = 0L;
								}
							}
							orderCnt++;
							Record r = new Record();
							String msg = "running  : " + (System.currentTimeMillis() - sTime) + " ms";
							if (cnt > 0 ) {
								msg += "\nget rows : " + df.format(totCnt) + " ("+(System.currentTimeMillis() - st)+")";
								m.put(totCnt/100000+"", (double)(System.currentTimeMillis() - sTime)/1000+"");
							}
							log.debug(msg);
							mvm.put(ds, m);
							r.put("RESULT_CONTENTS", msg);
							r.put("RESULT_STATUS", "END");
							queue.put(r);
						} catch (Exception e) {
						} 
						return null;
					}
				});
			} catch (Exception e) {
			} 
		}
	}
	
	@RequestMapping("/type5/demo/data/msg/select.do")
	public void getMsg(HttpServletRequest request, HttpServletResponse response) throws Exception {
		Record rtnData = new Record();
		JSONObject obj = new JSONObject();
		try {
			log.debug("getMsg");
			rtnData = queue.poll(1000000, TimeUnit.MILLISECONDS);
			
			if ("END".equals(rtnData.getString("RESULT_STATUS"))) {
				String chart = "";
				chart += "<graph showvalues=\"0\" animation=\"0\" formatNumberScale=\"0\" numdivlines=\"5\" ><categories>";
				
				for (String key: mvm.keySet()) {
					Map<String,String> mv = mvm.get(key);
					for (String c : mv.keySet()) {
						chart += "<category name=\""+c+"\"/>"; 
					}
					break;
				}
				chart += "</categories>";
				int i = 0;
				for (String key: mvm.keySet()) {
					if (i == 0) {
						chart += "<dataset seriesName=\""+key+"\" color=\"FF8000\" >";
					} else {
						chart += "<dataset seriesName=\""+key+"\" color=\"DBDC25\" >";
					}
					Map<String,String> mv = mvm.get(key);
					for (String c : mv.keySet()) {
						chart += "<set value=\""+mv.get(c)+"\" />";
					}
					chart += "</dataset>";
					i++;
				}
				chart += "</graph>";
				
				rtnData.put("CHART_XML", chart);
			}
			log.debug("rtnData : " + rtnData);
		} catch (Exception e) {
			log.error(e.getMessage(), e);
			rtnData.put("RESULT_STATUS", "ERROR");
			rtnData.put("ERROR_CONTENTS", e.getMessage());
		} finally {
			obj.putAll(rtnData);
			response.setContentType("application/json; charset=UTF-8");
			PrintWriter out = response.getWriter();
			out.println(obj.toJSONString());
			out.flush();
		}
	}
	
	@RequestMapping("/type5/demo/data/scroll/select.do")
	public void doSelect(HttpServletRequest request, HttpServletResponse response) throws Exception {
		Record rtnData = new Record();
		JSONObject obj = new JSONObject();
		try {
			if (this.thread != null && this.thread.isAlive()) {
				log.debug("executor is alive.");
				rtnData.put("RESULT_CONTENTS", "executor is alive.");
			} else {
				this.queue = new LinkedBlockingQueue<Record>(50);
				
				Record params = WebUtil.getParametersStartingWith(request);
				log.debug("params : " + params.toString());
				DataSource dataSource = this.applicationContext.getBean(params.getString("ds"), DataSource.class);
				
				this.thread = new Thread(new SelectExecutor(params.getString("ds"), dataSource, params.getString("query"), new HashMap<String, String>(), 20000L));
				this.thread.start();
				
				rtnData = queue.poll(10000, TimeUnit.MILLISECONDS);
			}
		} catch (Exception e) {
			log.error(e.getMessage(), e);
			rtnData.put("RESULT_STATUS", "ERROR");
			rtnData.put("ERROR_CONTENTS", e.getMessage());
		} finally {
			obj.putAll(rtnData);
			response.setContentType("application/json; charset=UTF-8");
			PrintWriter out = response.getWriter();
			out.println(obj.toJSONString());
			out.flush();
		}
	}
	
	@Override
	public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
		this.applicationContext = applicationContext;
	}
}
