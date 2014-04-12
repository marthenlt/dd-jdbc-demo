// 상위 콤보가 바뀌면 하위의 모든 콤보가 변하는 소스

// 세팅값을 설정하고,
// 초기화 해주면 콤보에 onchange함수가 붙고
// 콤보값을 바꾸면 해당 콤보 하위의 콤보들이 리프레쉬 됨.


// selfProcessor 함수 : 해당 콤보박스가 onChange 될때마다 커스텀 코드이 필요할때 등록해서 쓰는 함수
// processor 함수 : 해당 콤보박스가 바뀌었을때 하위 콤보박스가 리프레시 되는데, 이때 커스텀 코드가 필요할때 등록해서 쓰는 함수

//sample setting
/*
    var gCascadingComboSetting = {
	    formObjForPassComboData : '#inquiryForm',
	    commonUrlForGetComboData : '/statistics/getComboData.do',
	    stringForSelectAll : '전체',
	    flagForRefreshAllBelongedCombo : true,
	    comboList : [
					   { comboObj : 'select[name="vendorCode"]', query : 'statistics.market.getVendorCode', param : '', seq : 0, selfProcessor :function(){} }, // must be start 0
					   { comboObj : 'select[name="pocCode"]', query : 'statistics.market.getPocCode', param : '', seq : 1 },
	  	               { comboObj : 'select[name="productStdCode"]', query : 'statistics.market.getProductStdCode', param : '', seq : 2 },
	  	               { comboObj : 'select[name="productGroupCode"]', query : 'statistics.market.getProductGroupCode', param : '', seq : 3 },
	  	               { comboObj : 'select[name="productCode"]', query : 'statistics.market.getProductCode', param : '', seq : 4 },
	  	               { comboObj : 'select[name="serviceTypeCode"]', query : 'statistics.market.getServiceTypeCode', param : '', seq : 5 },
	  	               { comboObj : 'select[name="productType"]', query : 'statistics.market.getProductType', param : '', seq : 6 }
	  	               ]
  	  };
*/  	               
       
//사용법  initCascadingCombo();refreshCascadingCombo(-1);

	function initCascadingCombo(){
    	for ( var i = 0 ; i < gCascadingComboSetting.comboList.length ; i++ ){
    		$( gCascadingComboSetting.comboList[ i ].comboObj ).attr('onchange', 'javascript:refreshCascadingCombo("'+ gCascadingComboSetting.comboList[ i ].seq +'");');
    	}
    }
    
    function refreshCascadingCombo(seq, isFirstLoad){
    	// 자기 자신 콤보 onchange
    	for ( var i = 0 ; i < gCascadingComboSetting.comboList.length ; i++ ){
    		if( i == Number(seq) ){
    			if( gCascadingComboSetting.comboList[ i ].selfProcessor != null ){
    				gCascadingComboSetting.comboList[ i ].selfProcessor();
    		    }    			
    		}
    	}
    	
    	
    	//console.log(' refreshCascadingCombo  seq:'+(Number(seq)+1));
    	if( gCascadingComboSetting.flagForRefreshAllBelongedCombo ){
    		for ( var i = 0 ; i < gCascadingComboSetting.comboList.length ; i++ ){
        		if( i >= Number(seq)+1 ){
        			getComboData( i ,  gCascadingComboSetting.comboList[ i ].query, isFirstLoad );
        			if( gCascadingComboSetting.comboList[ i ].processor != null ){
            			gCascadingComboSetting.comboList[ i ].processor();
            		}
        		}
        	}
    	}else{
    		for ( var i = 0 ; i < gCascadingComboSetting.comboList.length ; i++ ){
        		if( i == Number(seq)+1 ){
        			getComboData( i ,  gCascadingComboSetting.comboList[ i ].query, isFirstLoad );
        			if( gCascadingComboSetting.comboList[ i ].processor != null ){
            			gCascadingComboSetting.comboList[ i ].processor();
            		}
        		}
        	}
    		for ( var i = 0 ; i < gCascadingComboSetting.comboList.length ; i++ ){
        		if( i > Number(seq)+1 ){
        			$(gCascadingComboSetting.comboList[ i ].comboObj).html(  '<option value="">'+gCascadingComboSetting.stringForSelectAll+'</option>' );
        		}
        	}
    	}
    	
    }
    
    function getComboData(target, query, isFirstLoad){
    	console.log(' getComboData target:'+target+',query:' +query);
    	$.ajax({
            type:"POST",
            dataType: "json",
            data: $( gCascadingComboSetting.formObjForPassComboData).serialize() + '&query='+query,
            url:getTimeStampUrl( gCascadingComboSetting.commonUrlForGetComboData),
            async:false,
            success: function(result, status, xmlhttprequest){
            	calback_getComboData(result, target, isFirstLoad);
            },
            error:function(xmlhttprequest, status, error){
            }
        });
    }
    
    function calback_getComboData(result, target, isFirstLoad){
    	var html = '';
    	var selected = '';
    	html += '<option value="">'+gCascadingComboSetting.stringForSelectAll+'</option>' ;
    	if( result.REQUEST_STATUS == 'SUCCESS' ){
    		
    		var jsonList = jQuery.parseJSON(result.list);
    		//console.log(  result.REQUEST_STATUS +","+result.list );
    		$.each(jsonList, function(){
    			if( isFirstLoad && gCascadingComboSetting.comboList[ target ].selectedValue == this.COMBOVALUE ){
    				selected = 'selected';
    			}else{
    				selected = '';
    			}
    			html += '<option value="'+ this.COMBOVALUE+'" '+selected+'>'+ this.COMBONAME+'</option>' ;
    			//console.log(html);
    		});
    	}else{
    	}
		$(gCascadingComboSetting.comboList[ target ].comboObj).html( '' );
		$(gCascadingComboSetting.comboList[ target ].comboObj).append( html );
    }