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
	if(confirm("TYPE4 Run.")){
		$.ajax({
	        type:"POST",
	        url:"${pageContext.request.contextPath}/type5/demo/data/insert.do",
	        data:{"ds":"ds_type4", "loop" : $("#V_LOOP_S").val(), "query" : $("#P_QUERY").val()},
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
	        				+ "\n=========================\n" + $("#P_DETAIL_1").val());
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
	if(confirm("TYPE5 Run")){
		$.ajax({
	        type:"POST",
	        url:"${pageContext.request.contextPath}/type5/demo/data/insert.do",
	        data:{"ds":"ds_type5", "loop" : $("#V_LOOP_S").val(), "query" : $("#P_QUERY").val()},
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
<h3># DEMO JDBC &gt; INSERT (SINGLE)</h3>
<div class="section section1">
	<ul>
		<li class="section_title">query</li> 
		<table border="0" cellspacing="0" cellpadding="0">
		  <tr>
			<td>
				<textarea rows="8" cols="110"  id="P_QUERY" name="P_QUERY">INSERT INTO TMP_DEMO(C01, C02, C03, C04, C05, C06, C07, C08, C09, C10, C11, C12, C13, C14, C15, 
C16, C17, C18, C19, C20, C21, C22, C23, C24, C25, C26, C27, C28, C29, C30, C31, C32, C33, C34, 
C35, C36, C37, C38, C39, C40, C41, C42, C43, C44, C45, C46, C47, C48, C49, C50)
VALUES ('C01', 
'152-790','Seoul Guro-dong','314 Tower 2nd Ryung Post','6259-1500','152-790','Guro-dong, Seoul','314 Tower 2nd Ryung Post','6259-1500',
'152-790','Seoul Guro-dong','314 Tower 2nd Ryung Post','6259-1500','152-790','Guro-dong, Seoul','314 Tower 2nd Ryung Post','6259-1500',
'152-790','Seoul Guro-dong','314 Tower 2nd Ryung Post','6259-1500','152-790','Guro-dong, Seoul','314 Tower 2nd Ryung Post','6259-1500',
'152-790','Seoul Guro-dong','314 Tower 2nd Ryung Post','6259-1500','152-790','Guro-dong, Seoul','314 Tower 2nd Ryung Post','6259-1500',
'152-790','Seoul Guro-dong','314 Tower 2nd Ryung Post','6259-1500','152-790','Guro-dong, Seoul','314 Tower 2nd Ryung Post','6259-1500',
'152-790','Seoul Guro-dong','314 Tower 2nd Ryung Post','6259-1500','152-790','Guro-dong, Seoul','314 Tower 2nd Ryung Post','6259-1500',
'C50')</textarea>
			</td>
		  </tr>
		</table>
		</li>
	</ul>
</div>
<div class="section section2">
	<ul >
		<li class="section_title">루프수 : <input name="V_LOOP_S" id="V_LOOP_S"  type="text" class="inputtextbox" style="width:60px;" value="1000" /></li>
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