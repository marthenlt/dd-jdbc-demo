<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
<head>
<link rel="stylesheet" type="text/css" media="screen" href="/html/js/lib/jquery-ui-1.9.2.custom/css/ui-lightness/jquery-ui-1.9.2.custom.css"/><!-- jQuery UI CSS -->
<link rel="stylesheet" type="text/css" media="screen" href="/html/css/style.css" />

<script src="/html/js/lib/jquery/jquery-1.8.3.js" type="text/javascript"></script><!-- jQuery JS -->
<script src="/html/js/lib/jquery-ui-1.9.2.custom/js/jquery-ui-1.9.2.custom.js" type="text/javascript"></script><!-- jQuery UI JS -->
<script src="/html/js/common/common.js" type="text/javascript"></script><!-- common js Library -->
<script src="/html/js/common/util.js" type="text/javascript"></script><!-- js util -->
<script src="/html/js/common/logging.js" type="text/javascript"></script><!-- js logging -->
<script src="/html/js/common/paging.js" type="text/javascript"></script><!-- js paging -->
<script src="/html/js/common/session_manager.js" type="text/javascript"></script><!-- session timeout setting -->
<script src="/html/js/lib/jquery/jquery.cookie.js" type="text/javascript"></script><!-- jQuery Cookie JS -->
<script type="text/javascript" src="/html/chart/FusionCharts.js"></script>
<script type="text/javascript">
var RESULT_STATUS="";
var inter;
function doInsert1(){
	if(confirm("Extracting data through TYPE4 JDBC!")){
		$.ajax({
	        type:"POST",
	        url:"/type5/demo/data/scroll/select.do",
	        data:{"ds":"ds_type4", "query" : $("#P_QUERY").val()},
	        dataType: "json",
	        async:true,
	        beforeSend:function(){
	        },
	        success: function(result, status, xmlhttprequest){
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
		inter = self.setInterval(function(){
			doMsg("P_DETAIL_1");
		},100);
	}
}
function doInsert2(){
	if(confirm("Extracting data through DataDirect JDBC!")){
		$.ajax({
	        type:"POST",
	        url:"/type5/demo/data/scroll/select.do",
	        data:{"ds":"ds_type5", "query" : $("#P_QUERY").val()},
	        dataType: "json",
	        async:false,
	        beforeSend:function(){
	        },
	        success: function(result, status, xmlhttprequest){
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
		inter = self.setInterval(function(){
			doMsg("P_DETAIL_2");
		},100);
		
	}
}
function doMsg(target){
	$.ajax({
        type:"POST",
        url:"/type5/demo/data/msg/select.do",
        data:{},
        dataType: "json",
        async:false,
        beforeSend:function(){
        },
        success: function(result, status, xmlhttprequest){
        	if(result.RESULT_STATUS == "ERROR"){
        		alert(result.ERROR_CONTENTS);
        	} else if(result.RESULT_STATUS == "END" || result.RESULT_STATUS != "PROC"){
        		RESULT_STATUS="END";
        		$("#"+target).text(result.RESULT_CONTENTS 
        				+ "\n" 
        				+ $("#"+target).val());
        		
        		window.clearInterval(inter);
        		
        		viewChart(result.CHART_XML);
        	} else {
        		$("#"+target).text(result.RESULT_CONTENTS 
        				+ "\n" 
        				+ $("#"+target).val());
        	}
        },
        complete:function() {
        },
        error:function(xmlhttprequest, status, error){
        }
    }); 
}
function viewChart(CHART_XML) {
	var chart1 = new FusionCharts("/html/chart/FCF_MSLine.swf", "chart1", 960, 300);
	chart1.setDataXML(CHART_XML);
	chart1.render("chart2div");
}
</script>
</head>
<body>
<div class="contents">
	<div align="center">
		<table >
			<tr>
				<td width="200" align="left"><a href="/index.jsp"><img src="/html/css/Datec.png"></a></td>
				<td width="600">&nbsp;</td>
				<td width="200" align="right"><img src="/html/css/progress2.png"></td>
			</tr>
		</table>
	</div> 
<h3># DEMO JDBC &gt; SELECT (SINGLE USER) </h3>
<div class="section section1">
	<ul>
		<li class="section_title">query</li> 
		<table border="0" cellspacing="0" cellpadding="0">
		  <tr>
			<td>
				<textarea rows="5" cols="110"  id="P_QUERY" name="P_QUERY">SELECT * FROM TMP_DEMO WHERE ROWNUM <= 10000</textarea>
			</td>
		  </tr>
		</table>
		</li>
	</ul>
</div>
<div class="section section3">
    <ul >
		<li class="section3_1"><a href="javascript:doInsert1();">TYPE4</a> 
		<table border="0" cellspacing="0" cellpadding="0">
		  <tr>
			<td>
				<textarea rows="15" cols="45"  id="P_DETAIL_1" name="P_DETAIL_1"></textarea>
			</td>
		  </tr>
		</table>
		</li>
		<li class="section3_2"><a href="javascript:doInsert2();">Data Direct</a> 
		<table border="0" cellspacing="0" cellpadding="0">
		  <tr>
			<td>
				<textarea rows="15" cols="45"  id="P_DETAIL_2" name="P_DETAIL_2"></textarea>
			</td>
		  </tr>
		</table>
		</li>
	</ul>
</div>
<div  id="chart2div"></div>
<div align="center">
	<table >
		<tr>
			<td width="20">&nbsp;</td>
		</tr>
		<tr>
			<td><img src="/html/css/pwdpg2.png"></td>
		</tr>
	</table>
</div> 
</div>
</body>
</html>