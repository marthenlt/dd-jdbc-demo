<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<link rel="stylesheet" type="text/css" media="screen" href="${pageContext.request.contextPath}/html/js/lib/jquery-ui-1.9.2.custom/css/ui-lightness/jquery-ui-1.9.2.custom.css"/><!-- jQuery UI CSS -->
<link rel="stylesheet" type="text/css" media="screen" href="${pageContext.request.contextPath}/html/css/style.css" />

<script src="${pageContext.request.contextPath}/html/js/lib/jquery/jquery-1.8.3.js" type="text/javascript"></script><!-- jQuery JS -->
<script src="${pageContext.request.contextPath}/html/js/lib/jquery-ui-1.9.2.custom/js/jquery-ui-1.9.2.custom.js" type="text/javascript"></script><!-- jQuery UI JS -->
<script src="${pageContext.request.contextPath}/html/js/common/common.js" type="text/javascript"></script><!-- common js Library -->
<script src="${pageContext.request.contextPath}/html/js/common/util.js" type="text/javascript"></script><!-- js util -->
<script src="${pageContext.request.contextPath}/html/js/common/logging.js" type="text/javascript"></script><!-- js logging -->
<script src="${pageContext.request.contextPath}/html/js/common/paging.js" type="text/javascript"></script><!-- js paging -->
<script src="${pageContext.request.contextPath}/html/js/common/session_manager.js" type="text/javascript"></script><!-- session timeout setting -->
<script src="${pageContext.request.contextPath}/html/js/lib/jquery/jquery.cookie.js" type="text/javascript"></script><!-- jQuery Cookie JS -->
</head>
<body>
<div class="contents center">
	<div align="center">
		<table >
			<tr>
				<td width="200" align="left"><img src="${pageContext.request.contextPath}/html/css/Datec.png"></td>
				<td width="600">&nbsp;</td>
				<td width="200" align="right"><img src="${pageContext.request.contextPath}/html/css/progress2.png"></td>
			</tr>
		</table>
	</div> 
	<h2>· DEMO JDBC ·</h2>
	<div  class="btn_group">
		<ul >
			<li><a href="${pageContext.request.contextPath}/type5/demo/select.do">&gt;&nbsp;&nbsp;DEMO : SELECT (SINGLE)</a></li>
			<li><a href="${pageContext.request.contextPath}/type5/demo/select_multi.do">&gt;&nbsp;&nbsp;DEMO : SELECT (MULTI)</a></li>
			<!-- 
			<li><a href="/type5/demo/insert_single.do">&gt;&nbsp;&nbsp;DEMO : INSERT (SINGLE)</a></li>
			<li><a href="/type5/demo/insert_batch.do">&gt;&nbsp;&nbsp;DEMO : INSERT (BATCH)</a></li>
		</ul>
	</div>
	<div  class="btn_group">
		<ul >
			<li><a href="/type5/demo/f2t.do">&gt;&nbsp;&nbsp;DEMO : FILE TO TABLE (NEW)</a></li>
			<li><a href="/type5/demo/t2f.do">&gt;&nbsp;&nbsp;DEMO : TABLE TO FILE (NEW)</a></li>
			<li><a href="/type5/demo/t2t.do">&gt;&nbsp;&nbsp;DEMO : TABLE TO TABLE (NEW)</a></li>
			 -->
		</ul>
	</div>
<div align="center">
	<table >
		<tr>
			<td height="200">&nbsp;</td>
		</tr>
		<tr>
			<td><img src="${pageContext.request.contextPath}html/css/pwdpg2.png"></td>
		</tr>
	</table>
</div> 
</div>
</body>
</html>