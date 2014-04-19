package com.progress.singapore.datadirect.jdbc.demo.saleskit.contents.controller;

import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

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
import org.springframework.jdbc.datasource.DataSourceUtils;
import org.springframework.jdbc.support.JdbcUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.progress.singapore.datadirect.jdbc.demo.saleskit.common.BulkLoadFactory;
import com.progress.singapore.datadirect.jdbc.demo.saleskit.common.MessageSourceAccessor;
import com.progress.singapore.datadirect.jdbc.demo.saleskit.common.Record;
import com.progress.singapore.datadirect.jdbc.demo.saleskit.common.WebUtil;
import com.ddtek.jdbc.extensions.DDBulkLoad;

@Controller
public class T2TController implements ApplicationContextAware {
	private Log log = LogFactory.getLog(InsertController.class);
	
	private ApplicationContext applicationContext;
	
	@RequestMapping("/type5/demo/t2t.do")
	public ModelAndView main(HttpServletRequest request, HttpServletResponse response) throws Exception  {
		return new ModelAndView("demo_t2t");
	}
	
	@RequestMapping("/type5/demo/data/t2t_type4.do")
	public void doT2TWithType4(HttpServletRequest request, HttpServletResponse response) throws Exception {
		Record rtnData = new Record();
		JSONObject obj = new JSONObject();
		try {
			Record params = WebUtil.getParametersStartingWith(request);
			log.debug("params : " + params.toString());
			DataSource dataSource = this.applicationContext.getBean(params.getString("ds"), DataSource.class);
			
			SimpleDateFormat sdf = new SimpleDateFormat("HH:mm:ss");
			sdf.format(new Date());
			
			StringBuilder sb = new StringBuilder();
			
			String sDate = sdf.format(new Date());
			long sTime = System.currentTimeMillis();
			
			NamedParameterJdbcOperations operations = new NamedParameterJdbcTemplate(dataSource);
			
			final NamedParameterJdbcOperations operations2 = new NamedParameterJdbcTemplate(dataSource);
			final String batchQuery = MessageSourceAccessor.getInstance().getMessage("QUERY.T2T");
			
			operations.query(params.getString("query"), new HashMap<String, String>(), new ResultSetExtractor<Object>() {
				@Override
				public Object extractData(ResultSet rs) throws SQLException, DataAccessException {
					List<Record> recordList = new ArrayList<Record>();
					ResultSetMetaData rsmd = null;
					int columnCount = 0;
					while (rs.next()) {
						if (rsmd == null) {
							rsmd = rs.getMetaData();
							columnCount = rsmd.getColumnCount();
						}
						Record record = new Record(columnCount);
						for (int i = 1; i <= columnCount; i++) {
							String columnName = JdbcUtils.lookupColumnName(rsmd, i);
							String columnValue = rs.getString(columnName);
							record.put(columnName.toUpperCase(), columnValue == null ? "" : columnValue);
						}
						recordList.add(record);
						
						if (recordList.size() > 100) {
							operations2.batchUpdate(batchQuery, recordList.toArray(new Record[recordList.size()]));
							recordList = new ArrayList<Record>();
						}
					}
					if (recordList.size() > 0) {
						operations2.batchUpdate(batchQuery, recordList.toArray(new Record[recordList.size()]));
					}
					return null;
				}
			});
			
			sb.append(sDate + " ~ " + sdf.format(new Date()));
			sb.append("\nrunning : " + (System.currentTimeMillis() - sTime) + " ms");
			
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
	
	@RequestMapping("/type5/demo/data/t2t.do")
	public void doSelect(HttpServletRequest request, HttpServletResponse response) throws Exception {
		Record rtnData = new Record();
		JSONObject obj = new JSONObject();
		try {
			Record params = WebUtil.getParametersStartingWith(request);
			log.debug("params : " + params.toString());
			DataSource dataSource = this.applicationContext.getBean(params.getString("ds"), DataSource.class);
			
			SimpleDateFormat sdf = new SimpleDateFormat("HH:mm:ss");
			sdf.format(new Date());
			
			StringBuilder sb = new StringBuilder();
			
			String sDate = sdf.format(new Date());
			long sTime = System.currentTimeMillis();
			
			Connection conn1 = dataSource.getConnection();
			
			Statement stmt = conn1.createStatement();
			ResultSet rs = stmt.executeQuery(params.getString("query")); 
			
			rs.setFetchSize(10000);
			
			Connection conn2 = DataSourceUtils.getConnection(dataSource);
			DDBulkLoad bulkLoader = BulkLoadFactory.getInstance(conn2);
			bulkLoader.setTableName(params.getString("target"));
			
			bulkLoader.load(rs);
			
			sb.append(sDate + " ~ " + sdf.format(new Date()));
			sb.append("\nrunning : " + (System.currentTimeMillis() - sTime) + " ms");
			
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
	
	@Override
	public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
		this.applicationContext = applicationContext;
	}

}
