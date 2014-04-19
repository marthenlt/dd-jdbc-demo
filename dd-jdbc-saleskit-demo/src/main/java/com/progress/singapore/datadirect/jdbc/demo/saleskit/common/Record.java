package com.progress.singapore.datadirect.jdbc.demo.saleskit.common;

import java.math.BigDecimal;

import org.springframework.util.LinkedCaseInsensitiveMap;

public class Record extends LinkedCaseInsensitiveMap<Object> {
	private static final long serialVersionUID = -2505282035598990444L;

	public Record() {
		super();
	}
	
	public Record(int initialCapacity) {
		super(initialCapacity);
	}
	
	public int getInt(String fieldName) {
		Object obj = super.get(fieldName);
		if (obj instanceof BigDecimal) {
			return ((BigDecimal) obj).intValue();
		}
		return Integer.parseInt(((String) obj).trim());
	}

	public int getInt(String fieldName, int defaultValue) {
		Object obj = super.get(fieldName);
		if (obj == null)
			return defaultValue;
		else if (obj instanceof BigDecimal) {
			return ((BigDecimal) obj).intValue();
		}
		return Integer.parseInt(((String) obj).trim());
	}

	public long getLong(String fieldName) {
		String strValue = (String) super.get(fieldName);
		return Long.parseLong(strValue.trim());
	}

	public long getLong(String fieldName, long defaultValue) {
		String strValue = (String) super.get(fieldName);
		if (strValue == null)
			return defaultValue;
		else
			return Long.parseLong(strValue.trim());
	}

	public String getString(String fieldName) {
		Object obj = super.get(fieldName);
		if (obj == null) {
			return "";
		}
		String strValue = null;
		if (obj instanceof String) {
			strValue = (String) obj;
		} else {
			strValue = obj.toString()+"";
		}
		return strValue.trim();
	}

	public String getString(String fieldName, String defaultValue) {
		String strValue = getString(fieldName);
		
		if (strValue == null || strValue.equals(""))
			strValue = defaultValue;
		else
			strValue = strValue.trim();

		return strValue;	
	}
}
