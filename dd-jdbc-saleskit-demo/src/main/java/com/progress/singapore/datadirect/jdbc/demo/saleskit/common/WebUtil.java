package com.progress.singapore.datadirect.jdbc.demo.saleskit.common;

import java.util.Enumeration;

import javax.servlet.ServletRequest;

import org.springframework.util.Assert;

public class WebUtil {
	
	public static Record getParametersStartingWith(ServletRequest request) {
		return getParametersStartingWith(request, null);
	}
	
	@SuppressWarnings("rawtypes")
	public static Record getParametersStartingWith(ServletRequest request, String prefix) {
		Assert.notNull(request, "Request must not be null");
		Enumeration paramNames = request.getParameterNames();
		Record params = new Record();
		if (prefix == null) {
			prefix = "";
		}
		while (paramNames != null && paramNames.hasMoreElements()) {
			String paramName = (String) paramNames.nextElement();
			if ("".equals(prefix) || paramName.startsWith(prefix)) {
				String unprefixed = paramName.substring(prefix.length());
				String[] values = request.getParameterValues(paramName);
				if (values == null || values.length == 0) {
					// Do nothing, no values found at all.
				}
				else if (values.length > 1) {
					params.put(unprefixed, values);
				}
				else {
					params.put(unprefixed, values[0]);
				}
			}
		}
		return params;
	}
}
