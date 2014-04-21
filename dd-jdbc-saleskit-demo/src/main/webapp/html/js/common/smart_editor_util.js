function pasteHTML(text, editor_id) {
		sHTML = "<span style='color:#FF0000;'>이미지도 같은 방식으로 삽입합니다.<\/span>";	
    
    oEditors.getById[editor_id].exec("PASTE_HTML", [sHTML]);
}

function pasteEditorHTML(text, editor_id) {
    var sHTML = text;
        
    oEditors.getById[editor_id].exec("PASTE_HTML", [sHTML]);
}

function addImgNameList(img_id) {
    var img_id_list_input = $("#img_id_list").val();
    if(img_id_list_input == undefined || img_id_list_input == null || img_id_list_input == "null"){
    	$("body").append("<input type='text' id='img_id_list' value='' />");
    }
    var img_id_value = $("#img_id_list").val();
    if(img_id_value != ""){
    	img_id_value += "|";
    }
    img_id_value += img_id;
    $("#img_id_list").val(img_id_value);
}

function showHTML(editor_id) {
    var sHTML = oEditors.getById[editor_id].getIR();
    
    alert(sHTML);
}

function getDeleteImgFileList(){
	var img_name_list = $("#img_id_list").val();
	var exist_img_list = "";
	var delete_img_list = "";
	
    if(img_name_list != undefined && img_name_list != null && img_name_list != "null"){
    	//이미지가 등록되지 않는 글은 체크할 필요가 없음.
    	//등록된 이미지 명을 나눈다.
    	img_name_list = img_name_list.split("|");
    	
    	$(".up_img").each(function(){
    		if(exist_img_list != ""){
    			exist_img_list += "|";
    		}
    		exist_img_list += $(this).val();
    	});
    	
    	for(var i=0;i<img_name_list.length;i++){
    		if(exist_img_list.indexOf(img_name_list[i]) == -1){
    			if(delete_img_list != ""){
    				delete_img_list += "|";
    			}
    			delete_img_list += img_name_list[i];
    		}
    	}
    }
    
    return delete_img_list;
}

function deleteImgFile(targetImgList){
	$.ajax({
        type:"POST",
        url:getTimeStampUrl("/smart_editor/deleteFile.do"),
        data:{"targetImgList":targetImgList},
        dataType: "json",
        async:true,
        beforeSend:function(){
            resetSessionManagerIframe();
        },
        success: function(result, status, xmlhttprequest){
        	if(result.status == "fail"){
        		alert("첨부파일 처리중 오류가 발생하였습니다.");
        		return false;
        	}
        },
        complete:function() {
        },
        error:function(xmlhttprequest, status, error){
        },
    });
}
    
function submitContents(elClickedObj, editor_id) {
    oEditors.getById[editor_id].exec("UPDATE_CONTENTS_FIELD", []);  // 에디터의 내용이 textarea에 적용됩니다.
    
    // 에디터의 내용에 대한 값 검증은 이곳에서 document.getElementById("ir1").value를 이용해서 처리하면 됩니다.
    $("#testDiv").empty().html(document.getElementById(editor_id).value);
    var deleteList = getDeleteImgFileList();
    if(deleteList != ""){
    	deleteImgFile(deleteList);
    }
    /*
    try {
        elClickedObj.form.submit();
    } catch(e) {}
    */
}

function setDefaultFont(editor_id) {
    var sDefaultFont = '궁서';
    var nFontSize = 24;
    oEditors.getById[editor_id].setDefaultFont(sDefaultFont, nFontSize);
}