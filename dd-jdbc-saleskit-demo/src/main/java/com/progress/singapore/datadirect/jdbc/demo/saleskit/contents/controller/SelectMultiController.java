package com.progress.singapore.datadirect.jdbc.demo.saleskit.contents.controller;

import java.io.PrintWriter;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;

import org.apache.log4j.Logger;
import org.json.simple.JSONObject;
import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcOperations;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.progress.singapore.datadirect.jdbc.demo.saleskit.common.MessageSourceAccessor;
import com.progress.singapore.datadirect.jdbc.demo.saleskit.common.Record;
import com.progress.singapore.datadirect.jdbc.demo.saleskit.common.WebUtil;

@Controller
public class SelectMultiController implements ApplicationContextAware {
	private Logger log = Logger.getLogger(InsertController.class);
	
	private ApplicationContext applicationContext;
	
	@RequestMapping("/type5/demo/select_multi.do")
	public ModelAndView main(HttpServletRequest request, HttpServletResponse response) throws Exception  {
		return new ModelAndView("demo_select_multi");
	}
	
	@RequestMapping("/type5/demo/data/select_multi.do")
	public void doSelect(HttpServletRequest request, HttpServletResponse response) throws Exception {
		Record rtnData = new Record();
		JSONObject obj = new JSONObject();
		try {
			Record params = WebUtil.getParametersStartingWith(request);
			log.info("params : " + params.toString());
			final DataSource dataSource = this.applicationContext.getBean(params.getString("ds"), DataSource.class);
			
			final SimpleDateFormat sdf = new SimpleDateFormat("HH:mm:ss");
			sdf.format(new Date());
			
			final StringBuilder sb = new StringBuilder();
			final List<Long> runTime = new ArrayList<Long>();
			
			final String query = params.getString("query", MessageSourceAccessor.getInstance().getMessage("QUERY.SELECT_01"));
			
			List<Thread> thread = new ArrayList<Thread>();
			
			int threads = params.getInt("thread");
			sb.append("threads : " + threads);
			for (int i = 0; i < threads; i++) {
				Thread t = new Thread(new Runnable() {
					@Override
					public void run() {
						log.info("START THREAD");
						String sDate = sdf.format(new Date());
						long sTime = System.currentTimeMillis();
						
						int result = select(dataSource, 
								query,
								new HashMap<String, String>());
						//sb.append(sDate + " ~ " + sdf.format(new Date()));
						//sb.append("\nrows    : " + result);
						long rTime = (System.currentTimeMillis() - sTime);
						sb.append("\nrunning : " + rTime + " ms");
						runTime.add(rTime);
						log.info("END " + rTime + " ms");
					}
				});
				thread.add(t);
			}
			for (Thread t : thread) {
				t.start();
			}
			int endCnt = 0;
			while (threads > endCnt) {
				log.info("check thread");
				endCnt = 0;
				for (Thread t : thread) {
					if (!t.isAlive()) {
						endCnt++;
					}
				}
				log.info("endCnt : " + endCnt);
				Thread.sleep(2000);
			};
			
			long avgTime = 0L;
			for (long avg : runTime) {
				log.info("run : " + avg);
				avgTime += avg;
			}
			avgTime = avgTime/threads;
			sb.append("\navg     : " + avgTime + " ms");
			
			rtnData.put("RESULT_CONTENTS", sb.toString());
			
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
	
	private int select(DataSource dataSource, String query, Map<String, ?> paramMap) {
		NamedParameterJdbcOperations operations = new NamedParameterJdbcTemplate(dataSource);
		List<Map<String, Object>> result = operations.query(query, paramMap, new RowMapper<Map<String, Object>>() {
			@Override
			public Map<String, Object> mapRow(ResultSet paramResultSet, int paramInt) throws SQLException {
				return null;
			}
		});
		return result.size();
	}
	
	@Override
	public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
		this.applicationContext = applicationContext;
	}
}
