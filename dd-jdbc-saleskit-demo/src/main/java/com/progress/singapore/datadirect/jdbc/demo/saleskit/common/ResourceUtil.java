package com.progress.singapore.datadirect.jdbc.demo.saleskit.common;

import java.io.File;
import java.io.IOException;
import java.util.Map;

import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.FileSystemResourceLoader;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;

public class ResourceUtil {
	public static ResourceLoader resourceLoader = new FileSystemResourceLoader();
	
	public static Resource getResource(String location) {
		return getResource(location, null);
	}
	
	public static Resource getResource(String location, Map<String, String> context) {
		return resourceLoader.getResource(SystemPropertyUtil.resolvePlaceholders(location, context));
	}
	
	public static Resource getResource(File file) {
		return new FileSystemResource(file);
	}
	
	public static void main(String[] args) throws IOException {
		System.out.println(getResource("classpath:log.properties").getFile().getAbsolutePath());
		
	}
}
