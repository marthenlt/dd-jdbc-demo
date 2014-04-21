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
<script type="text/javascript">
$(function(){
    $( "#POPUP_LODDING" ).dialog({
        autoOpen: false, height: 120, width: 225,modal: true,
        buttons: {
        }, close: function() { }
    });
});
function doInsert1(){
	if(confirm("Extracting data through TYPE4 JDBC!")){
		$.ajax({
	        type:"POST",
	        url:"${pageContext.request.contextPath}/type5/demo/data/select_multi.do",
	        data:{"ds":"ds_type4", "query" : $("#P_QUERY").val(), "thread" : $("#V_THREAD").val()},
	        dataType: "json",
	        async:true,
	        beforeSend:function(){
	        	$( "#POPUP_LODDING").dialog( "open" );
	        },
	        success: function(result, status, xmlhttprequest){
	        	$( "#POPUP_LODDING").dialog( "close" );
	        	if(result.RESULT_STATUS == "ERROR"){
	        		alert(result.ERROR_CONTENTS);
	        	} else {
	        		$("#P_DETAIL_1").html(result.RESULT_CONTENTS 
	        				+ "\n=========================\n" 
	        				+ $("#P_DETAIL_1").val());
	        	}
	        },
	        complete:function() {
	        },
	        error:function(xmlhttprequest, status, error){
	        }
	    }); 
	}
}
function doInsert2(){
	if(confirm("Extracting data through DataDirect JDBC!")){
		$.ajax({
	        type:"POST",
	        url:"${pageContext.request.contextPath}/type5/demo/data/select_multi.do",
	        data:{"ds":"ds_type5", "query" : $("#P_QUERY").val(), "thread" : $("#V_THREAD").val()},
	        dataType: "json",
	        async:true,
	        beforeSend:function(){
	        	$( "#POPUP_LODDING").dialog( "open" );
	        },
	        success: function(result, status, xmlhttprequest){
	        	$( "#POPUP_LODDING").dialog( "close" );
	        	if(result.RESULT_STATUS == "ERROR"){
	        		alert(result.ERROR_CONTENTS);
	        	} else {
	        		$("#P_DETAIL_2").text(result.RESULT_CONTENTS 
	        				+ "\n=========================\n" 
	        				+ $("#P_DETAIL_2").val());
	        	}
	        },
	        complete:function() {
	        },
	        error:function(xmlhttprequest, status, error){
	        }
	    }); 
	}
}
</script>
</head>
<body>
<div class="contents">
	<div align="center">
		<table >
			<tr>
				<td width="200" align="left"><a href="${pageContext.request.contextPath}/index.jsp"><img src="${pageContext.request.contextPath}/html/css/Datec.png"></a></td>
				<td width="600">&nbsp;</td>
				<td width="200" align="right"><img src="${pageContext.request.contextPath}/html/css/progress2.png"></td>
			</tr>
		</table>
	</div> 
<h3># DEMO JDBC &gt; SELECT (MULTI USER) </h3>
<div class="section section1">
	<ul>
		<li class="section_title">query</li> 
		<table border="0" cellspacing="0" cellpadding="0">
		  <tr>
			<td>
				<textarea rows="8" cols="110"  id="P_QUERY" name="P_QUERY">SELECT * FROM TMP_DEMO WHERE ROWNUM <= 10000</textarea>
			</td>
		  </tr>
		</table>
		</li>
	</ul>
</div>
<div class="section section2">
	<ul >
		<li class="section_title">THREAD : <input name="V_THREAD" id="V_THREAD"  type="text" class="inputtextbox" style="width:60px;" value="10" /></li>
	</ul>
</div>
<div class="section section3">
    <ul >
		<li class="section3_1"><a href="javascript:doInsert1();">TYPE4</a> 
		<table border="0" cellspacing="0" cellpadding="0">
		  <tr>
			<td>
				<textarea rows="25" cols="45"  id="P_DETAIL_1" name="P_DETAIL_1"></textarea>
			</td>
		  </tr>
		</table>
		</li>
		<li class="section3_2"><a href="javascript:doInsert2();">Data Direct</a> 
		<table border="0" cellspacing="0" cellpadding="0">
		  <tr>
			<td>
				<textarea rows="25" cols="45"  id="P_DETAIL_2" name="P_DETAIL_2"></textarea>
			</td>
		  </tr>
		</table>
		</li>
	</ul>
</div>
<div align="center">
	<table >
		<tr>
			<td width="20">&nbsp;</td>
		</tr>
		<tr>
			<td><img src="${pageContext.request.contextPath}/html/css/pwdpg2.png"></td>
		</tr>
	</table>
</div> 
</div>
<div id="POPUP_LODDING" class="loading" title="Processing..">
	<ul>
		<li>
		<table border="0" cellspacing="0" cellpadding="0">
		  <tr>
			<td><img src="${pageContext.request.contextPath}/html/image/loading.gif"/></td>
			<td>
				<label>Processing. <br/>Please Wait.</label>
			</td>
		  </tr>
		</table>
		</li>
	</ul>
</div>
</body>
</html>