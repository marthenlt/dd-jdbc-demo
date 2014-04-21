<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<link rel="stylesheet" type="text/css" media="screen" href="${pageContext.request.contextPath}/html/js/lib/jquery-ui-1.9.2.custom/css/ui-lightness/jquery-ui-1.9.2.custom.css"/><!-- jQuery UI CSS -->

<link rel="stylesheet" type="text/css" media="screen" href="${pageContext.request.contextPath}/html/css/common.css" />
<link rel="stylesheet" type="text/css" media="screen" href="${pageContext.request.contextPath}/html/css/header.css" />
<link rel="stylesheet" type="text/css" media="screen" href="${pageContext.request.contextPath}/html/css/contract.css" />
<link rel="stylesheet" type="text/css" media="screen" href="${pageContext.request.contextPath}/html/css/administration.css" />

<link rel="stylesheet" type="text/css" media="screen" href="${pageContext.request.contextPath}/html/css/popup.css" />

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
	        data:{"ds":"ds_type4", "loop" : $("#V_LOOP_S").val()},
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
	        		$("#P_DETAIL_1").html(result.RESULT_CONTENTS + "\n====================\n" + $("#P_DETAIL_1").val());
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
	        data:{"ds":"ds_type5", "loop" : $("#V_LOOP_S").val()},
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
	        		$("#P_DETAIL_2").text(result.RESULT_CONTENTS + "\n====================\n" + $("#P_DETAIL_2").val());
	        	}
	        },
	        complete:function() {
	        },
	        error:function(xmlhttprequest, status, error){
	        }
	    }); 
	}
}
function doInsert3(){
	if(confirm("TYPE4 Run.")){
		$.ajax({
	        type:"POST",
	        url:"${pageContext.request.contextPath}/type5/demo/data/insert_batch.do",
	        data:{"ds":"ds_type4", "loop" : $("#V_LOOP_B").val(), "batch" : $("#V_BATCH_B").val()},
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
	        		$("#P_DETAIL_3").html(result.RESULT_CONTENTS + "\n====================\n" + $("#P_DETAIL_3").val());
	        	}
	        },
	        complete:function() {
	        },
	        error:function(xmlhttprequest, status, error){
	        }
	    }); 
	}
}
function doInsert4(){
	if(confirm("TYPE5 Run")){
		$.ajax({
	        type:"POST",
	        url:"${pageContext.request.contextPath}/type5/demo/data/insert_batch.do",
	        data:{"ds":"ds_type5", "loop" : $("#V_LOOP_B").val(), "batch" : $("#V_BATCH_B").val()},
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
	        		$("#P_DETAIL_4").text(result.RESULT_CONTENTS + "\n====================\n" + $("#P_DETAIL_4").val());
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
<body id="page3">
<div class="middle">
<div class="page-title"># DEMO JDBC &gt; INSERT (SINGLE) </div>
<div class="tab-box1">
	<ul class="select lmargin30">
		<li class="dot1"></li>
		<li class="selecttitle">Number of rows : <input name="V_LOOP_S" id="V_LOOP_S"  type="text" class="inputtextbox" style="width:60px;" value="1000" /></li>
	</ul>
</div>
<div class="tab-box1">
    <ul >
		<li><a href="javascript:doInsert1();">TYPE4</a> : 
		<table border="0" cellspacing="0" cellpadding="0">
		  <tr>
			<td>
				<textarea rows="12" cols="30"  id="P_DETAIL_1" name="P_DETAIL_1"></textarea>
			</td>
		  </tr>
		</table>
		</li>
		<li>
		<table border="0" cellspacing="0" cellpadding="0" width="50">
		  <tr>
			<td>&nbsp;</td>
		  </tr>
		</table>
		</li>
		<li><a href="javascript:doInsert2();">TYPE5</a> : 
		<table border="0" cellspacing="0" cellpadding="0">
		  <tr>
			<td>
				<textarea rows="12" cols="30"  id="P_DETAIL_2" name="P_DETAIL_2"></textarea>
			</td>
		  </tr>
		</table>
		</li>
	</ul>
</div>
<div class="tab-box1" >
	<ul class="select lmargin30">
		<li class="dot1">&nbsp;</li>
	</ul>
	<ul class="select lmargin30">
		<li class="dot1">&nbsp;</li>
	</ul>
</div>
<div class="page-title"># DEMO JDBC &gt; INSERT (BATCH) </div>
<div class="tab-box1">
	<ul class="select lmargin30">
		<li class="dot1"></li>
		<li class="selecttitle">Number of rows : <input name="V_LOOP_B" id="V_LOOP_B"  type="text" class="inputtextbox" style="width:60px;" value="1000" /></li>
        <li class="selecttitle">Can be placed : <input name="V_BATCH_B" id="V_BATCH_B"  type="text" class="inputtextbox" style="width:60px;" value="100" /></li>
	</ul>
</div>
<div class="tab-box1">
    <ul >
		<li><a href="javascript:doInsert3();">TYPE4</a> : 
		<table border="0" cellspacing="0" cellpadding="0">
		  <tr>
			<td>
				<textarea rows="12" cols="30"  id="P_DETAIL_3" name="P_DETAIL_3"></textarea>
			</td>
		  </tr>
		</table>
		</li>
		<li>
		<table border="0" cellspacing="0" cellpadding="0" width="50">
		  <tr>
			<td>&nbsp;</td>
		  </tr>
		</table>
		</li>
		<li><a href="javascript:doInsert4();">TYPE5</a> : 
		<table border="0" cellspacing="0" cellpadding="0">
		  <tr>
			<td>
				<textarea rows="12" cols="30"  id="P_DETAIL_4" name="P_DETAIL_4"></textarea>
			</td>
		  </tr>
		</table>
		</li>
	</ul>
</div>
</div><!--e:middle-->
<div id="POPUP_LODDING" title="Processing..">
	<ul class="select">
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