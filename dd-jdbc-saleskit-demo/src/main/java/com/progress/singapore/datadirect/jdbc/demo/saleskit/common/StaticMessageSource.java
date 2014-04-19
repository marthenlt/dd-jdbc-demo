/*
 * Copyright 2002-2010 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.progress.singapore.datadirect.jdbc.demo.saleskit.common;

import java.text.MessageFormat;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Properties;

import org.springframework.beans.factory.InitializingBean;
import org.springframework.context.support.AbstractMessageSource;
import org.springframework.core.io.Resource;
import org.springframework.util.Assert;

/**
 * Simple implementation of {@link org.springframework.context.MessageSource}
 * which allows messages to be registered programmatically.
 * This MessageSource supports basic internationalization.
 *
 * <p>Intended for testing rather than for use in production systems.
 *
 * @author Rod Johnson
 * @author Juergen Hoeller
 */
public class StaticMessageSource extends AbstractMessageSource implements InitializingBean {
	
	private Resource[] locations;
	
	/** Map from 'code + locale' keys to message Strings */
	private final Properties messages = new Properties();

	private final Map<String, MessageFormat> cachedMessageFormats = new HashMap<String, MessageFormat>();
	
	@Override
	public void afterPropertiesSet() throws Exception {
		for (Resource resource : locations) {
			addMessages(PropertiesLoader.loadProperties(resource),null);
		}
	}
	
	public void setLocation(Resource location) {
		this.locations = new Resource[] {location};
	}
	
	public void setLocations(Resource[] locations) {
		this.locations = locations;
	}
	
	public void addLocation(String location) throws Exception {
		addMessages(PropertiesLoader.loadProperties(location),null);
	}
	
	@Override
	protected String resolveCodeWithoutArguments(String code, Locale locale) {
		return (String) this.messages.get(code + "_" + locale.toString());
	}

	@Override
	protected MessageFormat resolveCode(String code, Locale locale) {
		String key = code + "_" + locale.toString();
		String msg = (String) this.messages.get(key);
		if (msg == null) {
			return null;
		}
		synchronized (this.cachedMessageFormats) {
			MessageFormat messageFormat = this.cachedMessageFormats.get(key);
			if (messageFormat == null) {
				messageFormat = createMessageFormat(msg, locale);
				this.cachedMessageFormats.put(key, messageFormat);
			}
			return messageFormat;
		}
	}

	/**
	 * Associate the given message with the given code.
	 * @param code the lookup code
	 * @param locale the locale that the message should be found within
	 * @param msg the message associated with this lookup code
	 */
	public void addMessage(String code, Locale locale, String msg) {
		Assert.notNull(code, "Code must not be null");
		Assert.notNull(msg, "Message must not be null");
		if (locale == null) {
			locale = Locale.getDefault();
		}
		String key = code + "_" + locale.toString();
		this.messages.put(key, msg);
		this.cachedMessageFormats.remove(key);
		if (logger.isDebugEnabled()) {
			logger.debug("Added message for code [" + code + "] and Locale [" + locale + "]");
		}
	}

	/**
	 * Associate the given message values with the given keys as codes.
	 * @param messages the messages to register, with messages codes
	 * as keys and message texts as values
	 * @param locale the locale that the messages should be found within
	 */
	public void addMessages(Map<String, String> messages, Locale locale) {
		Assert.notNull(messages, "Messages Map must not be null");
		for (Map.Entry<String, String> entry : messages.entrySet()) {
			addMessage(entry.getKey(), locale, entry.getValue());
		}
	}
	
	public void addMessages(Properties messages, Locale locale) {
		Assert.notNull(messages, "Messages Map must not be null");
		for (Entry<Object, Object> entry : messages.entrySet()) {
			addMessage((String)entry.getKey(), locale, (String)entry.getValue());
		}
	}

	@Override
	public String toString() {
		return getClass().getName() + ": " + this.messages;
	}
}
