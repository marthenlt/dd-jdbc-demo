package com.progress.singapore.datadirect.jdbc.demo.saleskit.contents.controller;

import java.io.File;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;

import org.apache.log4j.Logger;
import org.json.simple.JSONObject;
import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.jdbc.datasource.DataSourceUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.progress.singapore.datadirect.jdbc.demo.saleskit.common.BulkLoadFactory;
import com.progress.singapore.datadirect.jdbc.demo.saleskit.common.Record;
import com.progress.singapore.datadirect.jdbc.demo.saleskit.common.WebUtil;
import com.ddtek.jdbc.extensions.DDBulkLoad;

@Controller
public class F2TController implements ApplicationContextAware {
	private Logger log = Logger.getLogger(InsertController.class);
	
	private ApplicationContext applicationContext;
	
	@RequestMapping("/type5/demo/f2t.do")
	public ModelAndView main(HttpServletRequest request, HttpServletResponse response) throws Exception  {
		return new ModelAndView("demo_f2t");
	}
	
	@RequestMapping("/type5/demo/data/f2t_type4.do")
	public void doT2TWithType4(HttpServletRequest request, HttpServletResponse response) throws Exception {
		
	}
	
	@RequestMapping("/type5/demo/data/f2t.do")
	public void doT2TWithType5(HttpServletRequest request, HttpServletResponse response) throws Exception {
		Record rtnData = new Record();
		JSONObject obj = new JSONObject();
		try {
			Record params = WebUtil.getParametersStartingWith(request);
			log.info("params : " + params.toString());
			DataSource dataSource = this.applicationContext.getBean(params.getString("ds"), DataSource.class);
			
			SimpleDateFormat sdf = new SimpleDateFormat("HH:mm:ss");
			sdf.format(new Date());

			StringBuilder sb = new StringBuilder();
			
			String sDate = sdf.format(new Date());
			long sTime = System.currentTimeMillis();
			
			DDBulkLoad bulkLoader = BulkLoadFactory.getInstance(DataSourceUtils.getConnection(dataSource));
			bulkLoader.setTableName(params.getString("table"));
			bulkLoader.load(new File(params.getString("file")));
			
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
