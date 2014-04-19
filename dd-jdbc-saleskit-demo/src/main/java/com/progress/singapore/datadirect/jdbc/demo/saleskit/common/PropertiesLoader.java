package com.progress.singapore.datadirect.jdbc.demo.saleskit.common;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Properties;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.core.io.Resource;
import org.springframework.util.DefaultPropertiesPersister;
import org.springframework.util.PropertiesPersister;


public class PropertiesLoader {
	public static final String XML_FILE_EXTENSION = ".xml";
	
	private static Log log = LogFactory.getLog(PropertiesLoader.class);
	
	public static PropertiesPersister propertiesPersister = new DefaultPropertiesPersister();
	
	public static Properties loadProperties(String location) throws IOException {
		return loadProperties(ResourceUtil.getResource(location));
	}
	
	public static Properties loadProperties(Resource location) throws IOException {
		Properties props = new Properties();
		loadProperties(props, location);
		return props;
	}
	
	public static void loadProperties(Properties props, String location) throws IOException {
		loadProperties(props, ResourceUtil.getResource(location));
	}
	
	public static void loadProperties(Properties props, Resource locations) throws IOException {
		loadProperties(props, new Resource[] {locations}, null, false);
	}
	
	public static void loadProperties(Properties props, Resource locations, String fileEncoding) throws IOException {
		loadProperties(props, new Resource[] {locations}, fileEncoding, false);
	}
	
	public static void loadProperties(
			Properties props, Resource[] locations, String fileEncoding, boolean ignoreResourceNotFound) throws IOException {
		for (int i = 0; i < locations.length; i++) {
			Resource location = locations[i];
			log.info("Loading properties file from " + location);
			InputStream is = null;
			try {
				is = location.getInputStream();
				if (location.getFilename().endsWith(XML_FILE_EXTENSION)) {
					propertiesPersister.loadFromXml(props, is);
				}
				else {
					if (fileEncoding != null) {
						propertiesPersister.load(props, new InputStreamReader(is, fileEncoding));
					}
					else {
						propertiesPersister.load(props, is);
					}
				}
			}
			catch (IOException ex) {
				if (ignoreResourceNotFound) {
					log.warn("Could not load properties from " + location + ": " + ex.getMessage());
				} else {
					throw ex;
				}
			} finally {
				if (is != null) {
					is.close();
				}
			}
		}
	}
}
