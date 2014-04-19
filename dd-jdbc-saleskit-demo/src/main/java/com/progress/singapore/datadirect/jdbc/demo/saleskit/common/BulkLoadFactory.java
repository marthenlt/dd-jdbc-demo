package com.progress.singapore.datadirect.jdbc.demo.saleskit.common;

import java.sql.Connection;
import java.sql.SQLException;

import org.apache.commons.dbcp.DelegatingConnection;

import com.ddtek.jdbc.base.BaseConnectionInternal;
import com.ddtek.jdbc.extensions.DDBulkLoad;
import com.ddtek.jdbc.extensions.DDBulkLoadFactory;

public final class BulkLoadFactory {

	public static final DDBulkLoad getInstance(Connection conn) throws SQLException {
		while (conn instanceof DelegatingConnection) {
			conn = ((DelegatingConnection) conn).getDelegate();
		}
		if (conn instanceof BaseConnectionInternal) {
			return DDBulkLoadFactory.getInstance(conn);
		} else {
			throw new SQLException("Invalid Instance for " + conn.getClass().getName());
		}
	}
	
}
