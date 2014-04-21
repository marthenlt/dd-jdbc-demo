/*
 * search_option_level : 현재 select element의 level
 * search_option_value : select element를 구성하기 위해 전달할 조회값
 * is_set_all : select element에 '전체' option의 포함 여부
 * all_option_value : select element의 '전체' option의 value
 * all_option_text : select element의 '전체' option의 text
 */
function setNextSelectValue(type, search_option_level, search_option_value, is_set_all, all_option_value, all_option_text){
	var url = "";
	var target_id = "";
	var empty_sub_id = "";
	var search_data = "";
	var org_erp_lev = "";
	var option_text = "";
	switch(type){
		case "item" :
			switch(search_option_level){
				case "MID" :
	                target_id = "#itemClass2";
	                empty_sub_id = "#itemClass2|#itemClass3";
	                break;
			    case "LEAF" :
			    	target_id = "#itemClass3";
			    	empty_sub_id = "#itemClass3";
			        break;
			}
			
			url = getTimeStampUrl("/common/selectOption/getItemOption.do");
			search_data = {"SEARCH_OPTION_LEVEL":search_option_level, "SEARCH_OPTION_VALUE":search_option_value, "IS_SET_ALL":is_set_all, "ALL_OPTION_VALUE":all_option_value, "ALL_OPTION_TEXT":all_option_text};
	    break;
		
		case "cust_ch" :
			switch(search_option_level){
				case "MID" :
	                target_id = "#custClass2";
	                empty_sub_id = "#custClass2|#custClass3";
	                option_text = "-- 중분류 --|-- 소분류 --";
	                break;
			    case "LEAF" :
			    	target_id = "#custClass3";
			    	empty_sub_id = "#custClass3";
			    	option_text = "-- 소분류 --";
			        break;
			}
			
			url = getTimeStampUrl("/common/selectOption/getCustChOption.do");
			search_data = {"SEARCH_OPTION_LEVEL":search_option_level, "CUST_TYPE1":$("#custClass1 option:selected").val(), "CUST_TYPE2":$("#custClass2 option:selected").val(), "IS_SET_ALL":is_set_all, "ALL_OPTION_VALUE":all_option_value, "ALL_OPTION_TEXT":all_option_text};
        break;
        
		case "org" :
			switch(search_option_level){
				case "AREAPART" :
					org_erp_lev = "3";
					break;
				case "DEPT_CD_ERP" :
	                target_id = "#dept_cd";
	                empty_sub_id = "#dept_cd|#branch_cd|#route_no";
	                option_text = "-- 지사전체 --|-- 지점전체 --|-- 루트전체 --";
	                org_erp_lev = "4";
		            break;
				case "DEPT_CD_SAP" :
	                target_id = "#dept_cd";
	                empty_sub_id = "#dept_cd|#branch_cd|#route_no";
	                option_text = "-- 지사전체 --|-- 지점전체 --|-- 루트전체 --";
	                org_erp_lev = "4";
		            break;
			    case "BRANCH_CD_ERP" :
			    	target_id = "#branch_cd";
			    	empty_sub_id = "#branch_cd|#route_no";
			    	option_text = "-- 지점전체 --|-- 루트전체 --";
			    	org_erp_lev = "5";
			        break;
			    case "BRANCH_CD_SAP" :
			    	target_id = "#branch_cd";
			    	empty_sub_id = "#branch_cd|#route_no";
			    	option_text = "-- 지점전체 --|-- 루트전체 --";
			    	org_erp_lev = "5";
			        break;
			    case "DEPT_CD_ERP_CHOOSE" :
	                target_id = "#dept_cd";
	                empty_sub_id = "#dept_cd|#branch_cd|#route_no";
	                option_text = "-- 지사선택 --|-- 지점선택 --|-- 루트선택 --";
	                org_erp_lev = "4";
		            break;
				case "DEPT_CD_SAP_CHOOSE" :
	                target_id = "#dept_cd";
	                empty_sub_id = "#dept_cd|#branch_cd|#route_no";
	                option_text = "-- 지사선택 --|-- 지점선택 --|-- 루트선택 --";
	                org_erp_lev = "4";
		            break;
			    case "BRANCH_CD_ERP_CHOOSE" :
			    	target_id = "#branch_cd";
			    	empty_sub_id = "#branch_cd|#route_no";
			    	option_text = "-- 지점선택 --|-- 루트선택 --";
			    	org_erp_lev = "5";
			        break;
			    case "BRANCH_CD_SAP_CHOOSE" :
			    	target_id = "#branch_cd";
			    	empty_sub_id = "#branch_cd|#route_no";
			    	option_text = "-- 지점선택 --|-- 루트선택 --";
			    	org_erp_lev = "5";
			        break;
			}
			
			url = getTimeStampUrl("/common/selectOption/getOrgOption.do");
			search_data = {"SEARCH_OPTION_LEVEL":search_option_level, "SEARCH_OPTION_VALUE":search_option_value, "IS_SET_ALL":is_set_all, "ALL_OPTION_VALUE":all_option_value, "ALL_OPTION_TEXT":all_option_text, "org_erp_lev":org_erp_lev};
        break;
        
		case "org2" :
			switch(search_option_level){
				case "AREAPART" :
					org_erp_lev = "3";
					break;
				case "DEPT_CD_ERP" :
	                target_id = "#dept_cd";
	                empty_sub_id = "#dept_cd|#branch_cd|#route_no|#cust_cd";
	                option_text = "-- 지사전체 --|-- 지점전체 --|-- 루트전체 --|-- 거래처전체 --";
	                org_erp_lev = "4";
		            break;
				case "DEPT_CD_SAP" :
	                target_id = "#dept_cd";
	                empty_sub_id = "#dept_cd|#branch_cd|#route_no|#cust_cd";
	                option_text = "-- 지사전체 --|-- 지점전체 --|-- 루트전체 --|-- 거래처전체 --";
	                org_erp_lev = "4";
		            break;
			    case "BRANCH_CD_ERP" :
			    	target_id = "#branch_cd";
			    	empty_sub_id = "#branch_cd|#route_no|#cust_cd";
			    	option_text = "-- 지점전체 --|-- 루트전체 --|-- 거래처전체 --";
			    	org_erp_lev = "5";
			        break;
			    case "BRANCH_CD_SAP" :
			    	target_id = "#branch_cd";
			    	empty_sub_id = "#branch_cd|#route_no|#cust_cd";
			    	option_text = "-- 지점전체 --|-- 루트전체 --|-- 거래처전체 --";
			    	org_erp_lev = "5";
			        break;
			    case "DEPT_CD_ERP_CHOOSE" :
	                target_id = "#dept_cd";
	                empty_sub_id = "#dept_cd|#branch_cd|#route_no|#cust_cd";
	                option_text = "-- 지사선택 --|-- 지점선택 --|-- 루트선택 --|-- 거래처선택 --";
	                org_erp_lev = "4";
		            break;
				case "DEPT_CD_SAP_CHOOSE" :
	                target_id = "#dept_cd";
	                empty_sub_id = "#dept_cd|#branch_cd|#route_no|#cust_cd";
	                option_text = "-- 지사선택 --|-- 지점선택 --|-- 루트선택 --|-- 거래처선택 --";
	                org_erp_lev = "4";
		            break;
			    case "BRANCH_CD_ERP_CHOOSE" :
			    	target_id = "#branch_cd";
			    	empty_sub_id = "#branch_cd|#route_no|#cust_cd";
			    	option_text = "-- 지점선택 --|-- 루트선택 --|-- 거래처선택 --";
			    	org_erp_lev = "5";
			        break;
			    case "BRANCH_CD_SAP_CHOOSE" :
			    	target_id = "#branch_cd";
			    	empty_sub_id = "#branch_cd|#route_no|#cust_cd";
			    	option_text = "-- 지점선택 --|-- 루트선택 --|-- 거래처선택 --";
			    	org_erp_lev = "5";
			        break;
			}
			
			url = getTimeStampUrl("/common/selectOption/getOrgOption.do");
			search_data = {"SEARCH_OPTION_LEVEL":search_option_level, "SEARCH_OPTION_VALUE":search_option_value, "IS_SET_ALL":is_set_all, "ALL_OPTION_VALUE":all_option_value, "ALL_OPTION_TEXT":all_option_text, "org_erp_lev":org_erp_lev};
        break;
        
		case "route" :
			target_id = "#route_no";
	    	empty_sub_id = "#route_no";
			url = getTimeStampUrl("/common/selectOption/getRouteOption.do");
			search_data = {"SEARCH_OPTION_LEVEL":search_option_level, "SEARCH_OPTION_VALUE":search_option_value, "IS_SET_ALL":is_set_all, "ALL_OPTION_VALUE":all_option_value, "ALL_OPTION_TEXT":all_option_text};
		break;
        
		case "route2" :
			target_id = "#route_no";
	    	empty_sub_id = "#route_no|#cust_cd";
	    	option_text = "-- 루트전체 --|-- 거래처전체 --";
			url = getTimeStampUrl("/common/selectOption/getRouteOption.do");
			search_data = {"SEARCH_OPTION_LEVEL":search_option_level, "SEARCH_OPTION_VALUE":search_option_value, "IS_SET_ALL":is_set_all, "ALL_OPTION_VALUE":all_option_value, "ALL_OPTION_TEXT":all_option_text};
		break;
        
		case "route_no" :
			target_id = "#route_no";
	    	empty_sub_id = "#route_no";
			url = getTimeStampUrl("/common/selectOption/getRouteNoOption.do");
			search_data = {"SEARCH_OPTION_LEVEL":search_option_level, "SEARCH_OPTION_VALUE":search_option_value, "IS_SET_ALL":is_set_all, "ALL_OPTION_VALUE":all_option_value, "ALL_OPTION_TEXT":all_option_text};
        break;
        
		case "route_no_ps_rt" :
			target_id = "#route_no";
	    	empty_sub_id = "#route_no";
			url = getTimeStampUrl("/common/selectOption/getRouteNoPsRtOption.do");
			search_data = {"SEARCH_OPTION_LEVEL":search_option_level, "SEARCH_OPTION_VALUE":search_option_value, "IS_SET_ALL":is_set_all, "ALL_OPTION_VALUE":all_option_value, "ALL_OPTION_TEXT":all_option_text};
        break;
        
		case "cust_cd" :
			target_id = "#cust_cd";
	    	empty_sub_id = "#cust_cd";
			url = getTimeStampUrl("/common/selectOption/getCustOption.do");
			search_data = {"SEARCH_OPTION_LEVEL":search_option_level, "SEARCH_OPTION_VALUE":search_option_value, "IS_SET_ALL":is_set_all, "ALL_OPTION_VALUE":all_option_value, "ALL_OPTION_TEXT":all_option_text};
        break;
	}
	
	if(empty_sub_id != ""){
		empty_sub_id = empty_sub_id.split("|");
		if(option_text != ""){
			option_text = option_text.split("|");
		}
		for(var i=0;i<empty_sub_id.length;i++){
			var option_string = "";
			option_string += "<option value=\"";
			if(all_option_value == null || all_option_value == undefined){
				option_string += "\">";
			}else{
				option_string += all_option_value +"\">";
			}
			
			if(option_text != ""){
				option_string += option_text[i] + "</option>";
			}else{
				if(all_option_text == null || all_option_text == undefined){
					option_string += "-- 전체 --</option>";
				}else{
					if(all_option_text != null && all_option_text != undefined){
						option_string += all_option_text + "</option>";	
					}
				}
			}
			
			$(empty_sub_id[i]).empty().append(option_string);			
		}
	}
	
	if(search_option_value != ""){
		getNextSelectOptions(url, search_data, target_id);	
	}
	
}

function getNextSelectOptions(target_url, search_data, target_id){
	$.ajax({
        type:"POST",
        url:target_url,
        data: search_data,
        dataType: "json",
        async:true,
        beforeSend:function(){
            resetSessionManagerIframe();
        },
        success: function(result, status, xmlhttprequest){
        	$(target_id).empty();	
        	if(result.ITEM_OPTION != "" && result.ITEM_OPTION != null && result.ITEM_OPTION != "null"){
        		$(target_id).append(result.ITEM_OPTION);
        	}
         },
         complete:function() {
         },
         error:function(xmlhttprequest, status, error){
         },
    });
}