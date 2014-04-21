<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
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
<script type="text/javascript">
$(function(){
    $( "#POPUP_LODDING" ).dialog({
        autoOpen: false, height: 120, width: 225,modal: true,
        buttons: {
        }, close: function() { }
    });
});
function doInsert1(){
	if(confirm("TYPE4 실행합니다.")){
		$.ajax({
	        type:"POST",
	        url:"/type5/demo/data/t2f_type4.do",
	        data:{"ds":"ds_type4", "query" : $("#P_QUERY").val(), "target" : $("#V_TARGET").val()},
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
	if(confirm("TYPE5 실행합니다")){
		$.ajax({
	        type:"POST",
	        url:"/type5/demo/data/t2f.do",
	        data:{"ds":"ds_type5", "query" : $("#P_QUERY").val(), "target" : $("#V_TARGET").val()},
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
<h3># DEMO JDBC &gt; TABLE TO FILE</h3>
<div class="section section1">
	<ul>
		<li class="section_title">query</li> 
		<table border="0" cellspacing="0" cellpadding="0">
		  <tr>
			<td>
				<textarea rows="8" cols="110"  id="P_QUERY" name="P_QUERY">SELECT * FROM TMP_DEMO</textarea>
			</td>
		  </tr>
		</table>
		</li>
	</ul>
</div>
<div class="section section2">
	<ul >
		<li class="section_title"> TARGET FILE : <input name="V_TARGET" id="V_TARGET"  type="text" class="inputtextbox" style="width:150px;" value="EXPORT.CSV" /></li>
	</ul>
</div>
<div class="section section3">
    <ul >
		<li class="section3_1"><a href="javascript:doInsert1();">TYPE4</a> 
		<table border="0" cellspacing="0" cellpadding="0">
		  <tr>
			<td>
				<textarea rows="28" cols="45"  id="P_DETAIL_1" name="P_DETAIL_1"></textarea>
			</td>
		  </tr>
		</table>
		</li>
		<li class="section3_2"><a href="javascript:doInsert2();">Data Direct</a> 
		<table border="0" cellspacing="0" cellpadding="0">
		  <tr>
			<td>
				<textarea rows="28" cols="45"  id="P_DETAIL_2" name="P_DETAIL_2"></textarea>
			</td>
		  </tr>
		</table>
		</li>
	</ul>
</div>
</div>
<div id="POPUP_LODDING" class="loading" title="처리중..">
	<ul>
		<li>
		<table border="0" cellspacing="0" cellpadding="0">
		  <tr>
			<td><img src="/html/image/loading.gif"/></td>
			<td>
				<label>처리중입니다. <br/>잠시만 기다려 주세요.</label>
			</td>
		  </tr>
		</table>
		</li>
	</ul>
</div>
</body>
</html>