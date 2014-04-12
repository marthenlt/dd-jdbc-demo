package com.datec.type5.contents.controller;

import java.io.File;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;

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
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.datec.type5.common.BulkLoadFactory;
import com.datec.type5.common.Record;
import com.datec.type5.common.WebUtil;
import com.ddtek.jdbc.extensions.DDBulkLoad;
import com.ddtek.jdbc.extensions.DDBulkLoadFactory;

@Controller
public class T2FController implements ApplicationContextAware {
	private Log log = LogFactory.getLog(InsertController.class);
	
	private ApplicationContext applicationContext;
	
	@RequestMapping("/type5/demo/t2f.do")
	public ModelAndView main(HttpServletRequest request, HttpServletResponse response) throws Exception  {
		return new ModelAndView("demo_t2f");
	}
	
	@RequestMapping("/type5/demo/data/t2f_type4.do")
	public void doT2FWithType4(HttpServletRequest request, HttpServletResponse response) throws Exception {
		Record rtnData = new Record();
		JSONObject obj = new JSONObject();
		try {
			Record params = WebUtil.getParametersStartingWith(request);
			log.debug("params : " + params.toString());
			
			final DataSource dataSource = this.applicationContext.getBean(params.getString("ds"), DataSource.class);
			
			final String query = params.getString("query");
			final String target = params.getString("target");
			
			SimpleDateFormat sdf = new SimpleDateFormat("HH:mm:ss");
			sdf.format(new Date());
			
			StringBuilder sb = new StringBuilder();
			
			String sDate = sdf.format(new Date());
			long sTime = System.currentTimeMillis();
			
			NamedParameterJdbcOperations operations = new NamedParameterJdbcTemplate(dataSource);
			operations.query(
					query, 
					new HashMap<String, String>(), 
					new ResultSetExtractor<Object>() {
				@Override
				public Object extractData(ResultSet rs) throws SQLException, DataAccessException {
					DDBulkLoad bulkLoader = BulkLoadFactory.getInstance(DataSourceUtils.getConnection(dataSource));
					bulkLoader.export(rs, new File(target));
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
	
	@RequestMapping("/type5/demo/data/t2f.do")
	public void doSelect(HttpServletRequest request, HttpServletResponse response) throws Exception {
		Record rtnData = new Record();
		JSONObject obj = new JSONObject();
		try {
			Record params = WebUtil.getParametersStartingWith(request);
			log.debug("params : " + params.toString());
			
			final DataSource dataSource = this.applicationContext.getBean(params.getString("ds"), DataSource.class);
			
			final String query = params.getString("query");
			final String target = params.getString("target");
			
			SimpleDateFormat sdf = new SimpleDateFormat("HH:mm:ss");
			sdf.format(new Date());
			
			StringBuilder sb = new StringBuilder();
			
			String sDate = sdf.format(new Date());
			long sTime = System.currentTimeMillis();
			
			NamedParameterJdbcOperations operations = new NamedParameterJdbcTemplate(dataSource);
			operations.query(
					query, 
					new HashMap<String, String>(), 
					new ResultSetExtractor<Object>() {
				@Override
				public Object extractData(ResultSet rs) throws SQLException, DataAccessException {
					DDBulkLoad bulkLoader = BulkLoadFactory.getInstance(DataSourceUtils.getConnection(dataSource));
					bulkLoader.export(rs, new File(target));
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
	
	@Override
	public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
		this.applicationContext = applicationContext;
	}
}
