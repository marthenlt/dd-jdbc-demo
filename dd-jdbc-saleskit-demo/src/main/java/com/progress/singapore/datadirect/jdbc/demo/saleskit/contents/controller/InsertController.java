package com.progress.singapore.datadirect.jdbc.demo.saleskit.contents.controller;

import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.json.simple.JSONObject;
import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcOperations;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.progress.singapore.datadirect.jdbc.demo.saleskit.common.MessageSourceAccessor;
import com.progress.singapore.datadirect.jdbc.demo.saleskit.common.Record;
import com.progress.singapore.datadirect.jdbc.demo.saleskit.common.WebUtil;

@Controller
public class InsertController implements ApplicationContextAware {
	private Log log = LogFactory.getLog(InsertController.class);
	
	private ApplicationContext applicationContext;
	
	@RequestMapping("/type5/demo/insert.do")
	public ModelAndView main(HttpServletRequest request, HttpServletResponse response) throws Exception  {
		return new ModelAndView("demo_insert");
	}
	
	@RequestMapping("/type5/demo/insert_single.do")
	public ModelAndView singleMain(HttpServletRequest request, HttpServletResponse response) throws Exception  {
		return new ModelAndView("demo_insert_single");
	}
	
	@RequestMapping("/type5/demo/insert_batch.do")
	public ModelAndView batchMain(HttpServletRequest request, HttpServletResponse response) throws Exception  {
		return new ModelAndView("demo_insert_batch");
	}
	
	@RequestMapping("/type5/demo/data/insert_batch.do")
	public void doInsertBatch(HttpServletRequest request, HttpServletResponse response) throws Exception {
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
			
			int loop = params.getInt("loop", 100);
			List<Map<String, String>> param = new ArrayList<Map<String, String>>();
			for (int i = 0; i < loop; i++) {
				Map<String, String> p =new HashMap<String, String>();
				p.put("C01", "C01");
				param.add(p);
			}
			int batch = params.getInt("batch", 10);
			batch(dataSource, 
					params.getString("query", MessageSourceAccessor.getInstance().getMessage("QUERY.INSERT_02")),
					param.toArray(new Map[param.size()]), 
					batch);
			
			sb.append(sDate + " ~ " + sdf.format(new Date()));
			sb.append("\nrows : " + loop + ", batch : " + batch);
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
	
	@RequestMapping("/type5/demo/data/insert.do")
	public void doInsert(HttpServletRequest request, HttpServletResponse response) throws Exception {
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
			
			int loop = params.getInt("loop", 1000);
			insert(dataSource, 
					params.getString("query", MessageSourceAccessor.getInstance().getMessage("QUERY.INSERT_01")),
					new HashMap<String, String>(), 
					loop);
			
			sb.append(sDate + " ~ " + sdf.format(new Date()));
			sb.append("\nrows    : " + loop);
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

	private void insert(DataSource dataSource, String query, Map<String, ?> paramMap, int loop) {
		NamedParameterJdbcOperations operations = new NamedParameterJdbcTemplate(dataSource);
		for (int i = 0; i < loop; i++) {
			operations.update(query, paramMap);
		}
	}
	
	private void batch(DataSource dataSource, String query, Map<String, ?>[] paramMap, int loop) {
		NamedParameterJdbcOperations operations = new NamedParameterJdbcTemplate(dataSource);
		for (int i = 0; i < loop; i++) {
			operations.batchUpdate(query, paramMap);
		}
	}
	
	@Override
	public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
		this.applicationContext = applicationContext;
	}
	
}
