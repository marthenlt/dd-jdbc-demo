package com.progress.singapore.datadirect.jdbc.demo.saleskit.contents.controller;

import java.sql.Connection;
import java.sql.Driver;
import java.sql.DriverManager;
import java.util.Properties;

import org.apache.commons.dbcp.BasicDataSource;

import com.progress.singapore.datadirect.jdbc.demo.saleskit.common.BulkLoadFactory;
import com.ddtek.jdbc.extensions.DDBulkLoad;

public class TestBulkLoad {

	public static void main(String[] args) throws Exception {
		BasicDataSource ds = new BasicDataSource();
		ds.setDriverClassName("com.ddtek.jdbc.oracle.OracleDriver");
		ds.setUrl("jdbc:datadirect:oracle://192.168.198.128:1521;SID=immine;BatchPerformanceWorkaround=true");
		ds.setUsername("bis");
		ds.setPassword("bis");
		ds.setAccessToUnderlyingConnectionAllowed(true);
		
		Connection conn = ds.getConnection();
		System.out.println(conn);
//		Connection conn = getConnection2();
		DDBulkLoad loader = BulkLoadFactory.getInstance(conn);
		System.out.println(loader);
	}
	
	public static Connection getConnection() throws Exception {
		Connection conn = null;
		Class.forName("com.ddtek.jdbc.oracle.OracleDriver");
		conn = DriverManager.getConnection("jdbc:datadirect:oracle://192.168.198.128:1521;SID=immine;BatchPerformanceWorkaround=true"
				, "bis","bis");
		conn.setAutoCommit(false);
		return conn;
	}
	
	public static Connection getConnection2() throws Exception {
		Connection conn = null;
		Class.forName("com.ddtek.jdbc.oracle.OracleDriver");
		Driver driver = DriverManager.getDriver("jdbc:datadirect:oracle://192.168.198.128:1521;SID=immine;BatchPerformanceWorkaround=true");
		Properties props = new Properties();
		props.put("user", "bis");
		props.put("password", "bis");
		conn = driver.connect("jdbc:datadirect:oracle://192.168.198.128:1521;SID=immine;BatchPerformanceWorkaround=true", props);
		return conn;
	}
}
