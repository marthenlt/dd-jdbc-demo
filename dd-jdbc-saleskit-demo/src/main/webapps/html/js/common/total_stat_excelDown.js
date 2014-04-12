// 01 세팅
var all_search_params_excel = {};
var all_page_list = '02,03,04,05,06,07,08,09';

	function setAllSearchParamsExcel(){
		
		var pageList = all_page_list.split(',');
		
		for ( var i = 0 ; i < pageList.length ; i++ ){
			dataGridOptionsForMany = {};
			monthListForMany = {};
			
			fnSetGridDataForMany( pageList[ i ] );
			fnSetParamsForMany( pageList[ i ] );
		}
		
		return   JSON.stringify( all_search_params_excel );
	}

	function makeAllExcel(jsonAllParams){
		console.log(jsonAllParams);
        $.ajax({
            type:"POST",
            dataType: "json",
            data: {
            	jsonData : jsonAllParams,
            	all_page_list : all_page_list,
            	excelName: $('input[name="excelDownName"]').val(),
            	startDate: $('#startDate').val().replace(/\./g, ''),
                toDate: $('#toDate').val().replace(/\./g, '')
            },
            url:getTimeStampUrl('/statistics/ajaxCreateExcelFileForMany.do'),
            async:true,
            beforeSend:function(){
                alert(ments['excelreserve']);
                console.log('before makeAllExcel');
            },
            success: function(result, status, xmlhttprequest){
            },
            error:function(xmlhttprequest, status, error){
            },
            complete:function() {
            }
        });
	}


	function fnSetGridDataForMany(page){
        var perFormat = {decimalSeparator:".", thousandsSeparator: ",", decimalPlaces: 2, prefix: "", suffix:"%", defaulValue: 0};
        var valFormat = {decimalSeparator:".", thousandsSeparator: ",", decimalPlaces: 0, prefix: "", suffix:"", defaulValue: 0};
        var startDateVal = $("#startDate").val().replace(/\./g, '');
        var toDateVal = $("#toDate").val().replace(/\./g, '');

        // 동적 COLUMN 셋팅
        monthListForMany = getAllMonths(startDateVal, toDateVal);
        var monthListMod = ObjectCopy(monthListForMany);
        monthListMod.push("SUMTOTAL");
        monthListMod.push("AVGTOTAL");
        
        switch( Number( page ) )
        {
        case Number('02'):	//01 jsp
        	console.log('02');
            dataGridOptionsForMany = {
                colNames:['구분'],
                colModel:[
                    {name:'LIST_GUBUN_NAME',   index:'LIST_GUBUN_NAME',    align:'left',       sortable:false,  width:'150px'
                    }                      // classes:'merge' => Row Cell Merge
                ],groupHeaders:[
                ]
            };
          break;
        case Number( '03' ):	//03 jsp
        	console.log('03'); 
        	dataGridOptionsForMany = {
                colNames:['채널'],
                colModel:[
                    {name:'LIST_GUBUN_NAME',   index:'LIST_GUBUN_NAME',   align:'left', sortable:false,  width:'150px', classes:'merge'
                        , cellattr: function(rowId, tv, rawObject, cm, rdata) {
                            if (rowId == parseInt($("#dataGrid").jqGrid('getGridParam','records'), 10)) { return ' style="text-align:center;"'; }
                        }
                    }  // classes:'merge' => Row Cell Merge
                ],groupHeaders:[
                ]
            };
          break;
        case Number( '04' ):	//04 jsp
        case Number( '05' ):
        case Number( '07' ):
        	console.log('04,05'); 
        	dataGridOptionsForMany = {
	                colNames:['구분','POC명'],
	                colModel:[
	                    {name:'PRODUCT_CHANNEL_NAME', index:'PRODUCT_CHANNEL_NAME',   align:'left', sortable:false, classes:'merge'
	                        , cellattr: function(rowId, tv, rawObject, cm, rdata) {
	                            if (rowId == parseInt($("#dataGrid").jqGrid('getGridParam','records'), 10)) { return ' colspan=2 style="text-align:center;"'; }
	                        }
	                    },  // classes:'merge' => Row Cell Merge
	                    {name:'POC_NAME',             index:'POC_NAME',               align:'left', sortable:false, classes:'merge'
	                        , cellattr: function(rowId, tv, rawObject, cm, rdata) {
	                            if (rowId == parseInt($("#dataGrid").jqGrid('getGridParam','records'), 10)) { return  ' style="display:none;"'; }
	                        }
	                    }  // classes:'merge' => Row Cell Merge
	                ],groupHeaders:[
	                ]
	            };
          break;          
        case Number( '06' ):
        	console.log('06'); 
	    	dataGridOptionsForMany = {
	                colNames:['POC','상품기준'],
	                colModel:[
	                    {name:'POC_NAME',           index:'POC_NAME',           align:'left', sortable:false, classes:'merge'
	                        , cellattr: function(rowId, tv, rawObject, cm, rdata) {
	                            if (rowId == parseInt($("#dataGrid").jqGrid('getGridParam','records'), 10)) { return ' colspan=2 style="text-align:center;"'; }
	                        }
	                    },  // classes:'merge' => Row Cell Merge
	                    {name:'PRODUCT_STD_NAME',   index:'PRODUCT_STD_NAME',   align:'left', sortable:false, classes:'merge'
	                        , cellattr: function(rowId, tv, rawObject, cm, rdata) {
	                            if (rowId == parseInt($("#dataGrid").jqGrid('getGridParam','records'), 10)) { return  ' style="display:none;"'; }
	                        }
	                    }  // classes:'merge' => Row Cell Merge
	                ],groupHeaders:[
	                ]	    			
	            };
          break;
        case Number( '08' ):
        	console.log('08'); 
	    	dataGridOptionsForMany = {
	                colNames:['채널','상품유형','상품기준'],
	                colModel:[
	                    {name:'PRODUCT_CHANNEL_NAME',   index:'PRODUCT_CHANNEL_NAME',   align:'left', sortable:false, classes:'merge'
	                        , cellattr: function(rowId, tv, rawObject, cm, rdata) {
	                            if (rowId == parseInt($("#dataGrid").jqGrid('getGridParam','records'), 10)) { return ' colspan=3 style="text-align:center;"'; }
	                        }
	                    },  // classes:'merge' => Row Cell Merge
	                    {name:'PRODUCT_GROUP_NAME',     index:'PRODUCT_GROUP_NAME',   align:'left', sortable:false, classes:'merge'
	                        , cellattr: function(rowId, tv, rawObject, cm, rdata) {
	                            if (rowId == parseInt($("#dataGrid").jqGrid('getGridParam','records'), 10)) { return  ' style="display:none;"'; }
	                        }
	                    },  // classes:'merge' => Row Cell Merge
	                    {name:'PRODUCT_STD_NAME',       index:'PRODUCT_STD_NAME',   align:'left', sortable:false, classes:'merge'
	                        , cellattr: function(rowId, tv, rawObject, cm, rdata) {
	                            if (rowId == parseInt($("#dataGrid").jqGrid('getGridParam','records'), 10)) { return  ' style="display:none;"'; }
	                        }
	                    }  // classes:'merge' => Row Cell Merge
	                ],groupHeaders:[
	                ]	    			
	            };        	
            break;
        case Number( '09' ):
        	console.log('09'); 
	    	dataGridOptionsForMany = {
	                colNames:['POC','상품기준'],
	                colModel:[
	                    {name:'POC_NAME',           index:'POC_NAME',           align:'left',   sortable:false, classes:'merge'
	                        , cellattr: function(rowId, tv, rawObject, cm, rdata) {
	                            if (rowId == parseInt($("#dataGrid").jqGrid('getGridParam','records'), 10)) { return ' colspan=2 style="text-align:center;"'; }
	                        }
	                    },  // classes:'merge' => Row Cell Merge
	                    {name:'PRODUCT_STD_NAME',   index:'PRODUCT_STD_NAME',   align:'left',   sortable:false, classes:'merge'
	                        , cellattr: function(rowId, tv, rawObject, cm, rdata) {
	                            if (rowId == parseInt($("#dataGrid").jqGrid('getGridParam','records'), 10)) { return  ' style="display:none;"'; }
	                        }
	                    }  // classes:'merge' => Row Cell Merge
	                ],groupHeaders:[
	                ]	    			
	            };        	
            break;
        default:
        }
        


        for (var i=0; i<monthListMod.length; i++){
            dataGridOptionsForMany.colNames.push(monthListMod[i]=='AVGTOTAL'?'평균':monthListMod[i]=='SUMTOTAL'?'합계':monthListMod[i]);
            dataGridOptionsForMany.colModel.push({name:monthListMod[i], index:monthListMod[i], align:'right', sortable:false,  width:'100px'});
        }
    }

	function fnSetParamsForMany(page){
        
		var sameParams = {
				excelName: '',
                excelOptions: JSON.stringify(dataGridOptionsForMany),
                title : $('select[name="inquiryType"] option[value='+page+']').text().replace(/\?/g, ''),
            	inquiryType : page,
                menuId:'1110',
                startDate: $('#startDate').val().replace(/\./g, ''),
                toDate: $('#toDate').val().replace(/\./g, ''),
                accountGubun: $('input[name=accountGubun]:checked').val(),
                monthList:JSON.stringify(monthListForMany),
                gridCnt:10,
                queryType:'E',
                chartType:'',
                imgFullName:''
		};
		
        switch( Number( page ) )
        {
        case Number('02'):	//01 jsp
        	console.log('02');
        	sameParams.query = 'statistics.market.getTotalStat01List',
        	all_search_params_excel[ page ] =  sameParams;
			
          break;
        case Number( '03' ):	//03 jsp
        	console.log('03'); 
	        sameParams.query = 'statistics.market.getTotalStat03List',
	    	all_search_params_excel[ page ] =  sameParams;
          break;
        case Number( '04' ):	//04 jsp
        case Number( '05' ):
        case Number( '07' ):
        	console.log('04,05,07'); 
	        sameParams.query = 'statistics.market.getTotalStat04List',
	    	all_search_params_excel[ page ] =  sameParams;
          break;   
        case Number( '06' ):
        	console.log('06'); 
	        sameParams.query = 'statistics.market.getTotalStat06List',
	    	all_search_params_excel[ page ] =  sameParams;
          break;
        case Number( '08' ):
        	console.log('08'); 
	        sameParams.query = 'statistics.market.getTotalStat08List',
	    	all_search_params_excel[ page ] =  sameParams;  	
          break;
        case Number( '09' ):
        	console.log('09'); 
	        sameParams.query = 'statistics.market.getTotalStat09List',
	    	all_search_params_excel[ page ] =  sameParams;
          break;          
        default:
        }
        

    }