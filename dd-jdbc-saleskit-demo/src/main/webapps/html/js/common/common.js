//** ---------------------------------------------------------------------------
// 함 수 명 : moveViewPage
// 인    자 : path_id		    (경로 ID)
//			   file_nm			(파일명)
//			   target 				(submit할 대상, 없을경우 현재창)
// 결    과 : 메뉴 ID에 해당하는 화면으로 이동
// 목    적 : 정적 화면에 대한 이동
// 생 성 일 : 2012. 11. 27
// 수    정 :
// 사용예제 : moveViewPage(1000, "targetPage")
// 주의사항 : 정확한 MENU ID 지정
//** ---------------------------------------------------------------------------
function moveViewPage(path_id, file_nm, target){
	var frm = document.moveMenuForm;
	
	if(isObjectNull(frm) == true){
		$("body").append("<form id=\"moveMenuForm\" name=\"moveMenuForm\" method=\"post\" action=\"/common/moveViewPage.do\"><input type=\"hidden\" id=\"move_file_path_id\" name=\"move_file_path_id\" value=\"\"><input type=\"hidden\" id=\"move_file_nm\" name=\"move_file_nm\" value=\"\"></form>");
		frm = document.moveMenuForm;
	}
	
	if(isValueNull(target) == true){
		frm.target = "_self";
	}else{
		frm.target = target;
	}
	
	frm.move_file_path_id.value = path_id;
	frm.move_file_nm.value = file_nm;
	frm.submit();
}

//** ---------------------------------------------------------------------------
//함 수 명 : isObjectNull
//인    자 : obj			(대상 객체)
//결    과 : 메뉴 ID에 해당하는 화면으로 이동
//목    적 : 정적 화면에 대한 이동
//생 성 일 : 2012. 11. 27
//수    정 :
//사용예제 : if(isObjectNull(obj)) obj.value = "xxx";
//주의사항 : 정확한 MENU ID 지정
//** ---------------------------------------------------------------------------
function isObjectNull(obj){
	if(obj != null && obj != "null" && obj != "undefined" && obj != undefined){
		return false;
	}else{
		return true;
	}
}

function isValueNull(value){
	if(value != null && value != "null" && value != "undefined" && value != undefined && value != ""){
		return false;
	}else{
		return true;
	}
}

//** ---------------------------------------------------------------------------
//함 수 명 : getAjaxSingleData
//인    자 : is_async			(동기화, 비동기화 여부)
//            search_params			(조회에 사용될 parameter, query는 반드시 포함하여야 한다.)
//결    과 : 메뉴 ID에 해당하는 화면으로 이동
//목    적 : 정적 화면에 대한 이동
//생 성 일 : 2012. 11. 27
//수    정 :
//주의사항 : 정확한 MENU ID 지정
//** ---------------------------------------------------------------------------
function getAjaxSingleData(search_params, is_async){
	if(isValueNull(search_params.query) == true){
		alert("조회 ID가 지정되지 않았습니다.");
		return false;
	}
	
	if(isObjectNull(is_async) == true){
		is_async = false;
	}
	
	var return_result= new Object();
	
	$.ajax({
		type:"POST",
        url:getTimeStampUrl("/common/getAjaxSingleData.do"),
        data:search_params,
        dataType: "json",
        async:is_async,
        beforeSend:function(){
        	resetSessionManagerThisPage();
        },
        success: function(result, status, xmlhttprequest){
        	if(result.REQUEST_STATUS == "ERROR"){
        		alert("조회중 오류가 발생하였습니다.");
        	}
        	
        	return_result = result;
        },
        complete:function() {
            
        },
        error:function(xmlhttprequest, status, error){
            console.log("ajax 통신 오류 발생");
            console.log("error : "+ error);
            console.log("status : "+ status);
            console.log("xmlhttprequest.status : "+ xmlhttprequest.status);
        }
    });
	
	return return_result;
}

function getAjaxDataList(search_params, is_async){
	if(isValueNull(search_params.query) == true){
		alert("조회 ID가 지정되지 않았습니다.");
		return false;
	}
	
	if(isObjectNull(is_async) == true){
		is_async = false;
	}
	
	var return_result= new Object();
	
	$.ajax({
		type:"POST",
        url:getTimeStampUrl("/common/getAjaxDataList.do"),
        data:search_params,
        dataType: "json",
        async:is_async,
        beforeSend:function(){
        	resetSessionManagerThisPage();
        },
        success: function(result, status, xmlhttprequest){
        	if(result.REQUEST_STATUS == "ERROR"){
        		alert("조회중 오류가 발생하였습니다.");
        	}
        	
        	return_result = result;
        },
        complete:function() {
            
        },
        error:function(xmlhttprequest, status, error){
            console.log("ajax 통신 오류 발생");
            console.log("error : "+ error);
            console.log("status : "+ status);
            console.log("xmlhttprequest.status : "+ xmlhttprequest.status);
        }
    });
	
	return return_result;
}

//** ---------------------------------------------------------------------------
//함 수 명 : addAjaxSingleData
//인    자 : is_async			(동기화, 비동기화 여부)
//            search_params			(등록에 사용될 parameter, query는 반드시 포함하여야 한다.)
//결    과 : 메뉴 ID에 해당하는 화면으로 이동
//목    적 : 정적 화면에 대한 이동
//생 성 일 : 2012. 11. 27
//수    정 :
//주의사항 : 정확한 MENU ID 지정
//** ---------------------------------------------------------------------------
function addAjaxSingleData(search_params, is_async){
	if(isValueNull(search_params.query) == true){
		alert("등록 ID가 지정되지 않았습니다.");
		return false;
	}
	
	if(isObjectNull(is_async) == true){
		is_async = false;
	}
	
	var return_result= new Object();
	
	$.ajax({
		type:"POST",
		url:getTimeStampUrl("/common/addAjaxSingleData.do"),
		data:search_params,
		dataType: "json",
		async:is_async,
		beforeSend:function(){
			resetSessionManagerThisPage();
		},
		success: function(result, status, xmlhttprequest){
			if(result.REQUEST_STATUS == "ERROR"){
				alert("등록중 오류가 발생하였습니다.");
			}
      	
			return_result = result;
		},
		complete:function() {
			
		},
		error:function(xmlhttprequest, status, error){
			console.log("ajax 통신 오류 발생");
			console.log("error : "+ error);
			console.log("status : "+ status);
			console.log("xmlhttprequest.status : "+ xmlhttprequest.status);
		}
	});
	
	return return_result;
}

//** ---------------------------------------------------------------------------
//함 수 명 : updateAjaxSingleData
//인    자 : is_async			(동기화, 비동기화 여부)
//          search_params			(수정에 사용될 parameter, query는 반드시 포함하여야 한다.)
//결    과 : 메뉴 ID에 해당하는 화면으로 이동
//목    적 : 정적 화면에 대한 이동
//생 성 일 : 2012. 11. 27
//수    정 :
//주의사항 : 정확한 MENU ID 지정
//** ---------------------------------------------------------------------------
function updateAjaxSingleData(search_params, is_async){
	if(isValueNull(search_params.query) == true){
		alert("수정 ID가 지정되지 않았습니다.");
		return false;
	}
	
	if(isObjectNull(is_async) == true){
		is_async = false;
	}
	
	var return_result= new Object();
	
	$.ajax({
		type:"POST",
		url:getTimeStampUrl("/common/updateAjaxSingleData.do"),
		data:search_params,
		dataType: "json",
		async:is_async,
		beforeSend:function(){
			resetSessionManagerThisPage();
		},
		success: function(result, status, xmlhttprequest){
			if(result.REQUEST_STATUS == "ERROR"){
				alert("수정중 오류가 발생하였습니다.");
			}
      	
			return_result = result;
		},
		complete:function() {
			
		},
		error:function(xmlhttprequest, status, error){
			console.log("ajax 통신 오류 발생");
			console.log("error : "+ error);
			console.log("status : "+ status);
			console.log("xmlhttprequest.status : "+ xmlhttprequest.status);
		}
	});
	
	return return_result;
}

//** ---------------------------------------------------------------------------
//함 수 명 : deleteAjaxSingleData
//인    자 : is_async			(동기화, 비동기화 여부)
//        search_params			(삭제에 사용될 parameter, query는 반드시 포함하여야 한다.)
//결    과 : 메뉴 ID에 해당하는 화면으로 이동
//목    적 : 정적 화면에 대한 이동
//생 성 일 : 2012. 11. 27
//수    정 :
//주의사항 : 정확한 MENU ID 지정
//** ---------------------------------------------------------------------------
function deleteAjaxSingleData(search_params, is_async){
	if(isValueNull(search_params.query) == true){
		alert("삭제 ID가 지정되지 않았습니다.");
		return false;
	}
	
	if(isObjectNull(is_async) == true){
		is_async = false;
	}
	
	var return_result= new Object();
	
	$.ajax({
		type:"POST",
		url:getTimeStampUrl("/common/deleteAjaxSingleData.do"),
		data:search_params,
		dataType: "json",
		async:is_async,
		beforeSend:function(){
			resetSessionManagerThisPage();
		},
		success: function(result, status, xmlhttprequest){
			if(result.REQUEST_STATUS == "ERROR"){
				alert("삭제중 오류가 발생하였습니다.");
			}
      	
			return_result = result;
		},
		complete:function() {
			
		},
		error:function(xmlhttprequest, status, error){
			console.log("ajax 통신 오류 발생");
			console.log("error : "+ error);
			console.log("status : "+ status);
			console.log("xmlhttprequest.status : "+ xmlhttprequest.status);
		}
	});
	
	return return_result;
}

function arrayToExcelDown(arr, list) {
	var rows = arr.rows;
	var html = "";
	var group_cnt = 0;
	var n_cnt = 0;
	html += "{\"file\" : \"" + arr.file + "\", \"query\":\"" + arr.query + "\",";
	html += "\"column\" : [";
	for(var i=0;i<rows.length;i++) {
		if(i > 0) html += ",";
		html += "{\"colid\":\"" +rows[i].id+"\", \"colname\": \""+ rows[i].name  + "\",\"coltype\":\"" + rows[i].type + "\",\"colunit\":\"" + rows[i].unit + "\",\"colpoint\":\"" + rows[i].point + "\", \"show\": \"" + rows[i].show + "\"}";
		if(rows[i].id == arr.groupfield) group_cnt = n_cnt;
		n_cnt++;
	}
	html += "], \"groupfield\":\"" + group_cnt + "\"}";  // end of line at the end*/
	return html;
}

function commonExcelDownLoad(dataArray, searchParams){
	var json = arrayToExcelDown(dataArray, null);
	var action = "/common/excelDownLoad.do";
	
	var frm = document.excelDownForm;

	if(isObjectNull(frm) == false){
		$("#excelDownForm").remove();
	}
	
	var formText = "<form id=\"excelDownForm\" name=\"excelDownForm\" method=\"post\" action=\"" + action +"\">";
	formText += "<input type=\"hidden\" name=\"exceldata\" value=\"\" />";
	
	if(searchParams != null){
		$.each(searchParams, function (index, entry) {
			formText += "<input type=\"hidden\" name=\"" + index +"\" value=\"" + entry +"\" />";
		});
	}
	formText += "</form>";
	
	$("body").append(formText);
	//alert(formText);
	frm = document.excelDownForm;
	//exceldown할 양식을 준다.
	frm.exceldata.value = json;
	frm.submit();
	
}

function getAllDays(startdate, enddate) {
	var _s = startdate.substring(4,6)+'/'+startdate.substring(6,8)+'/'+startdate.substring(0,4);
	var _e = enddate.substring(4,6)+'/'+enddate.substring(6,8)+'/'+enddate.substring(0,4);
	//console.log("_s : "+_s);
	//console.log("_e : "+_e);
    var s = new Date(_s);
    //s = new Date(s.setDate(s.getDate()-1));
    var e = new Date(_e);
    //e = new Date(e.setDate(e.getDate()-1));
    var a = [];
    while(s <= e) {
        a.push(new Date(s).format("yyyyMMdd"));
        s = new Date(s.setDate(s.getDate()+1));
        //console.log("s : "+s);
    }
    return a;
};

function getAllWeeks(startdate, enddate) {
	var _s = startdate.substring(4,6)+'/'+startdate.substring(6,8)+'/'+startdate.substring(0,4);
	var _e = enddate.substring(4,6)+'/'+enddate.substring(6,8)+'/'+enddate.substring(0,4);
	//console.log("_s : "+_s);
	//console.log("_e : "+_e);
    var s = new Date(_s);
    //s = new Date(s.setDate(s.getDate()-1));
    var e = new Date(_e);
    //e = new Date(e.setDate(e.getDate()-1));
    var a = [];
    while(s <= e) {
    	if(new Date(s).format("E") == "mon"){
    		a.push(new Date(s).format("yyyyMMdd"));
    	}
        s = new Date(s.setDate(s.getDate()+1));
    }
    return a;
};

function getAllMonths(startdate, enddate) {
	var _s = startdate.substring(4,6)+'/01/'+startdate.substring(0,4);
	var _e = enddate.substring(4,6)+'/01/'+enddate.substring(0,4);
	//console.log("_s : "+_s);
	//console.log("_e : "+_e);
    var s = new Date(_s);
    //s = new Date(s.setDate(s.getDate()-1));
    var e = new Date(_e);
    //e = new Date(e.setDate(e.getDate()-1));
    var a = [];
    //var a = new Array(); 
    while(s <= e) {
    	if(new Date(s).format("dd") == "01"){
    		a.push(new Date(s).format("yyyyMM"));
    	}
        s = new Date(s.setDate(s.getDate()+1));
    }
    return a;
};

Date.prototype.format = function(f) {
    if (!this.valueOf()) return " ";
 
    var weekName = ["sum", "mon", "tue", "wed", "thu", "fri", "sat"];
    var d = this;
     
    return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function($1) {
        switch ($1) {
            case "yyyy": return d.getFullYear();
            case "yy": return (d.getFullYear() % 1000).zf(2);
            case "MM": return (d.getMonth() + 1).zf(2);
            case "dd": return d.getDate().zf(2);
            case "E": return weekName[d.getDay()];
            case "HH": return d.getHours().zf(2);
            case "hh": return ((h = d.getHours() % 12) ? h : 12).zf(2);
            case "mm": return d.getMinutes().zf(2);
            case "ss": return d.getSeconds().zf(2);
            case "a/p": return d.getHours() < 12 ? "오전" : "오후";
            default: return $1;
        }
    });
};
 
String.prototype.string = function(len){var s = '', i = 0; while (i++ < len) { s += this; } return s;};
String.prototype.zf = function(len){return "0".string(len - this.length) + this;};
Number.prototype.zf = function(len){return this.toString().zf(len);};
var setMergeData = function(idx, rows){
	this.idx = idx;
	this.rows = rows;
}

$.fn.tuiTableRowSpan = function() {
	return this.each(function() {
		var rowCount = $('tbody tr', this).length-1;
		var celCount = $("tbody > tr:eq(0) > td", this).length-1;
		
		var mergeArray = new Array();
		var mergenum = [];
		for (var i = 0; i < celCount; i++) {
            var colIdx = i;
            var that;
            var tempnum = [];
            $('tbody tr', this).each(function(row) {
                $('td:eq(' + colIdx + ')', this).each(function(col) {
                	if($(this).attr('class') != 'merge'){
                		that = this;
                		return false;
                	}
                    if ((that != null && $(this).html() == $(that).html())) {
                        if(rowCount == row){
                        	that = this;
                        }
                    } else {
                        that = this;
                        if(mergenum.indexOf(row) == -1){
                        	mergenum.push(row);
                        }
                    }
                });
            });
            if(mergenum.length > 0){
            	tempnum = mergenum.slice(); 
            	//tempnum.sort(function(a,b){return a-b});
            	mergeArray.push(new setMergeData(colIdx, tempnum));
            }
        }
		
       	for (var i = celCount; i >= 0; i--) {
            var colIdx = i;
            var that;
            var rowspan = 1;
            //console.log("colIdx : "+colIdx);
            $('tbody tr', this).each(function(row) {
                $('td:eq(' + colIdx + ')', this).each(function(col) {
                	if($(this).attr('class') != 'merge'){
                		that = this;
                        rowspan = 1;
                		return false;
                	}
                	var tempArray = mergeArray[colIdx].rows;
                    if (that != null && tempArray.indexOf(row) > -1) {
                    	$(that).attr("rowSpan", rowspan);
                        that = this;
                        rowspan = 1;
                    } else {
                        rowspan += 1;
                        $(this).remove();
                        if(rowCount == row){
                        	$(that).attr("rowSpan", rowspan);
                        	that = this;
	                        rowspan = 1;
                        }
                    }
                });
            });
        }
    });
};

String.prototype.trim = function(){
	this.replace(/(^\s*)|(\s*$)/gi, ""); 
};

var clareCalendar = {
    monthNamesShort:['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
    dayNamesMin:['일','월','화','수','목','금','토'],
    weekHeader:'Wk',
    dateFormat:'yy.mm.dd',
    autoSize:false,
    changeMonth:true,    //월변경가능
    changeYear:true,       //년변경가능
    showMonthAfterYear:true,
    buttonImageOnly:true,
    buttonText:'달력선택',
    buttonImage:getContextPath()+'/html/image/btn_calendar.png',
    showOn:'both'
    //yearRange:'2002:'+new Date().format("yyyy")
};

var yearMonthCalendar = {
    monthNamesShort:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
    dateFormat:"yy.mm",
    autoSize:false,
    changeMonth:true,    //월변경가능
    changeYear:true,       //년변경가능
    showMonthAfterYear:true,
    buttonImageOnly:true,
    buttonText:'달력선택',
    buttonImage:getContextPath()+'/html/image/btn_calendar.png',
    showOn:'both',
    showButtonPanel: true,
    //yearRange:"2000:2100",
    onClose: function (dateText, inst) {
        var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
        var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
        $(this).datepicker("setDate", new Date(year, month, 1));
    },
    beforeShow : function(input, inst) {
        if ((datestr = $(this).val()).length > 0) {
            year = datestr.substring(0, 4);
            month = jQuery.inArray(parseInt(datestr.substring(5, 7), 10)+'월', $(this).datepicker('option', 'monthNamesShort'));
            
            $(this).datepicker('option', 'defaultDate', new Date(year, month, 1));
            $(this).datepicker('setDate', new Date(year, month, 1));
        }
        $("img.ui-datepicker-trigger").attr("style","margin-left:6px; vertical-align:top; cursor:pointer;");
        $("#ui-datepicker-div").hide();
    }
};

function ObjectCopy(obj)
{
	return JSON.parse(JSON.stringify(obj));
}

//validator ments
var ments =	{
		excelName : "excel 파일명을 입력해 주세요.",
		excelreserve: "엑셀 파일 생성을 예약합니다.",
		excelerror: "엑셀 파일 생성 중 에러가 발생하였습니다.",
		gridnodata: "그리드 항목이 없습니다.",
		gridnoselect: "그리드 항목을 선택해 주세요.",
		onemonthabove: "조회기간을 1개월 이상으로 선택해 주세요.",
		startmonthgreater: "검색기간 시작월이 종료월보다 큽니다."
	};	

// Excel Download 팝업 호출     
function fnSetExcelName(excel_param, isTypeAll){
    var get_param = '?move_file_path_id=1100&move_file_nm=excel_down_p&excel_param='+excel_param; 
    
    if( isTypeAll != null ){
    	get_param += '&isTypeAll='+isTypeAll;
    }
    
    var open_url = getContextPath()+'/common/moveViewPage.do'+get_param;
    var popup = window.open(open_url, 'setExcelPopup','width=350,height=150;scrollbars=no,resizable=yes');
    popup.focus();
    
    return false;
}

//Excel Upload 팝업 호출     
function fnSetExcelFindName(excel_param){
    var get_param = '?move_file_path_id=1100&move_file_nm=excel_find_p&excel_param='+excel_param; 
    var open_url = getContextPath()+'/common/moveViewPage.do'+get_param;
    var popup = window.open(open_url, 'setExcelPopup','width=350,height=150;scrollbars=no,resizable=yes');
    popup.focus();
    
    return false;
}

// GET contextPath 
function getContextPath(){
	var ctxPath = "${pageContext.request.contextPath}";
    var offset=location.href.indexOf(location.host)+location.host.length;
    var ctxPath=location.href.substring(offset,location.href.indexOf('/',offset+1));
    //return ctxPath;    
    // context path를 사용하지 않으므로 '' 리턴
    return '';
}

if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (elt /*, from*/) {
        var len = this.length >>> 0;
        var from = Number(arguments[1]) || 0;
        from = (from < 0) ? Math.ceil(from) : Math.floor(from);
        if (from < 0) from += len;

        for (; from < len; from++) {
            if (from in this && this[from] === elt) return from;
        }
        return -1;
    };
}

/* jqgrid header colspan。
Index starts from 0, contains hidden columns, note that the automatic jqgrid is a serial number column
   
Use：
$("#jqGridId").tuiJqgridColSpan({ 
    cols: [
        { indexes: "3, 4", title: "The combined title" },
        { indexes: "6, 7", title: "The combined title" },
        { indexes: "11, 12, 13", title: "The combined title" }
    ]
});

Notes： 
1.Have not been merged rowSpan equal 2, ie two lines. Dragging out a BUG, can not display layer position synchronization jqgrid;
2.jqgrid the table header must have the aria-labelledby = 'gbox_tableid' such property;
3.only for jqgrid;
*/
var tuiJqgridColSpanInit_kkccddqq = false;
jQuery.fn.tuiJqgridColSpan = function(options) {
    options = $.extend({}, { UnbindDragEvent: true, cols: null }, options);

    if (tuiJqgridColSpanInit_kkccddqq) {
        return;
    }

    // validate parameters
    if (options.cols == null || options.cols.length == 0) {
        alert("cols parameters must be set");
        return;
    }

    // Line parameters must be passed in the order of columns, from small to large order, such as 3,4,5
    var error = false;
    for (var i = 0; i < options.cols.length; i++) {
        var colIndexs = eval("([" + options.cols[i].indexes + "])");

        for (var j = 0; j < colIndexs.length; j++) {
            if (j == colIndexs.length - 1) break;

            if (colIndexs[j] != colIndexs[j + 1] - 1) {
                error = true;
                break;
            }
        }

        if (error) break;
    }

    if (error) {
        alert("Line parameters must be passed in the order of columns, such as: 3,4,5");
        return;
    }

    // Below is a table header to transform jqgrid
    var resizing = false,
    currentMoveObj, startX = 0;

    var tableId = $(this).attr("id");
    // thead
    var jqHead = $("table[aria-labelledby='gbox_" + tableId + "']");
    var jqDiv = $("div#gbox_" + tableId);

    var oldTr = $("thead tr", jqHead);
    var oldThs = $("thead tr:first th", jqHead);

    // Th in the original line up and down respectively, the following line clone, an increase above this line, and height equal 0
    var ftr = $("<tr/>").css("height", "auto").addClass("ui-jqgrid-labels").attr("role", "rowheader").insertBefore(oldTr);
    var ntr = $("<tr/>").addClass("ui-jqgrid-labels").attr("role", "rowheader").insertAfter(oldTr);
    oldThs.each(function(index) {
        var cth = $(this);
        var cH = cth.css("height"), cW = cth.css("width"),
        nth = $("<th/>").css("height", cH),
        fth = $("<th/>").css("height", 0);
        // IE8 or firefox in the following, there will be more than an edge, so to get rid of.
        if (($.browser.msie && $.browser.version == "8.0") || $.browser.mozilla) {
            fth.css({ "border-top": "solid 0px #fff", "border-bottom": "solid 0px #fff" });
        }

        if (cth.css("display") == "none") {
            nth.css({ "display": "none", "white-space": "nowrap", "width": 0 });
            fth.css({ "display": "none", "white-space": "nowrap", "width": 0 });
        }
        else {
            nth.css("width", cW);
            fth.css("width", cW);

            // Add an event here, drag the column to resolve
            var res = cth.children("span.ui-jqgrid-resize");
            res && res.bind("mousedown", function(e) {
                currentMoveObj = $(this);
                startX = getEventPos(e).x;

                resizing = true;
                document.onselectstart = new Function("return false");
            });
        }
        // Increase in the first line
        fth.addClass(cth.attr("class")).attr("role", "columnheader").appendTo(ftr);

        // Increase in the third line
        cth.children().clone().appendTo(nth);
        nth.addClass(cth.attr("class")).attr("role", "columnheader").appendTo(ntr);
    });

    // colspan. 
    // Note: This is not on top of the loop processing, because each traverse must perform the following operation.
    for (var i = 0; i < options.cols.length; i++) {
        var colIndexs = eval("([" + options.cols[i].indexes + "])");
        var colTitle = options.cols[i].title;

        var isrowSpan = false;
        for (var j = 0; j < colIndexs.length; j++) {
            oldThs.eq(colIndexs[j]).attr({ "colSpan": colIndexs.length, "rowSpan": "1" });

            // Hide the columns are combined, can not remove, so the sort function jqgrid dislocation.
            if (j != 0) {
                oldThs.eq(colIndexs[j]).attr("colSpan", "1").hide();
            }

            // Remove the extra tag after th clone
            $("thead tr:last th", jqHead).eq(colIndexs[j]).attr("tuidel", "false");

            // add column title
            if (j == 0) {
                var div = oldThs.eq(colIndexs[j]).find("div.ui-jqgrid-sortable");
                var divCld = div.children();

                div.text(colTitle);
                div.append(divCld);
            }
        }
    }
    // remove the extra column
    $("thead tr:last th[tuidel!='false']", jqHead).remove();
    // No increase in the combined list of attributes rowSpan
    oldThs.each(function() {
        if ($(this).attr("colSpan") == 1) {
            $(this).attr("rowSpan", 2);
        }
    });

    var jqBody = $(this);
    // Binding drag events
    $(document).bind("mouseup", function(e) {
        var ret = true;
        if (resizing) {
            var parentTh = currentMoveObj.parent();
            var currentIndex = parentTh.parents("tr").find("th").index(parentTh);

            var width, diff;
            var tbodyTd = $("tbody tr td", jqBody);
            var currentTh = $("thead tr:first th", jqHead).eq(currentIndex);

            // Td width of first use, if td is not present, use the width of the incident
            if (tbodyTd.length > 0) {
                diff = 0;
                width = parseInt(tbodyTd.eq(currentIndex).css("width"));
            }
            else {
                diff = getEventPos(e).x - startX;
                width = parseInt(currentTh.css("width"));
            }

            var lastWidth = diff + width;
            currentTh.css("width", lastWidth + "px");

            resizing = false;
            ret = false;
        }
        document.onselectstart = new Function("return true");
        return ret;
    });

    // Set is initialized
    tuiJqgridColSpanInit_kkccddqq = true;

    // Adapt to different browsers to get mouse coordinates
    getEvent = function(evt) {
        evt = window.event || evt;

        if (!evt) {
            var fun = getEvent.caller;
            while (fun != null) {
                evt = fun.arguments[0];
                if (evt && evt.constructor == Event)
                    break;
                fun = fun.caller;
            }
        }

        return evt;
    };

    getAbsPos = function(pTarget) {
        var x_ = y_ = 0;

        if (pTarget.style.position != "absolute") {
            while (pTarget.offsetParent) {
                x_ += pTarget.offsetLeft;
                y_ += pTarget.offsetTop;
                pTarget = pTarget.offsetParent;
            }
        }
        x_ += pTarget.offsetLeft;
        y_ += pTarget.offsetTop;
        return { x: x_, y: y_ };
    };

    getEventPos = function(evt) {
        var _x, _y;
        evt = getEvent(evt);
        if (evt.pageX || evt.pageY) {
            _x = evt.pageX;
            _y = evt.pageY;
        } else if (evt.clientX || evt.clientY) {
            _x = evt.clientX + (document.body.scrollLeft || document.documentElement.scrollLeft) - (document.body.clientLeft || document.documentElement.clientLeft);
            _y = evt.clientY + (document.body.scrollTop || document.documentElement.scrollTop) - (document.body.clientTop || document.documentElement.clientTop);
        } else {
            return getAbsPos(evt.target);
        }
        return { x: _x, y: _y };
    };
}; 

