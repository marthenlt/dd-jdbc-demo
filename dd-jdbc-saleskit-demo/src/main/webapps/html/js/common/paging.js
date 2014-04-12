//jquery 하단에 붙이는 페이징 생성 function
//2012. 05. 14 KT Shim
function jqueryPager(obj, target, gridname){
	
	var pageTotal = parseInt(obj.jqGrid("getGridParam", "records")*1, 10);			//전체 조회 목록개수
	var currentPage = parseInt(obj.jqGrid("getGridParam", "page")*1, 10);			//현재 페이지번호
	var pageSize = parseInt(obj.jqGrid("getGridParam", "rowNum")*1, 10);			//한번에 보여질 페이지 개수
	var maxPagingNum = parseInt(10, 10);												//페이지 최대 넘버 범위 
	
	var pageTotalCnt = Math.ceil(pageTotal/pageSize);
    //var pageBlockCnt = Math.ceil(currentPage/pageSize);
	var pageBlockCnt = (Math.floor((currentPage-1)/maxPagingNum) + 1);
    var sPage, ePage;
    var html = "";
    html = "<div class=\"table-num\">";
    html += "<ul>";
    
	if(pageTotal == 0){
		html += "<li class=\"first\"><a href=\"#\">첫페이지</a></li>";
		html += "<li class=\"prev\"><a href=\"#\">이전페이지</a></li>";
		html += "<li class=\"num\">";
		html += "<a href=\"#\" style=\"font-weight:bold; color:#cf3544;\">1</a>";
		html += "</li>";
		html += "<li class=\"next\"><a href=\"#\">다음페이지</a></li>";
		html += "<li class=\"last\"><a href=\"#\">마지막페이지</a></li>";
	}else{
		sPage = ((pageBlockCnt-1)*maxPagingNum)+1;
		
//		if (pageBlockCnt > 1) {
//			sPage = (pageBlockCnt-1)*pageSize+1;
//		} else {
//			sPage = 1;
//		}
		
		if ((pageBlockCnt*10) >= pageTotalCnt) {
			ePage = pageTotalCnt;
		} else {
			ePage = pageBlockCnt*10;
		}
		
		sPage = parseInt(sPage*1, 10);	
		ePage = parseInt(ePage*1, 10);	
		
		  if(currentPage == 1){
		    	//현재페이지가 1번이면 처음으로 이동할 필요 없음.
		    	html += "<li class=\"first\"><a href=\"#\" onclick=\"goPage(0," + pageSize +", '" + gridname + "')\">첫페이지</a></li>";
		    }else{
		    	html += "<li class=\"first\"><a href=\"#\" onclick=\"goPage(1," + pageSize +", '" + gridname + "')\">첫페이지</a></li>";
		    }
	    
		  //maxPagingNum 단위로 이동시 적용
			html += "<li class=\"prev\"><a href=\"#\" onclick=\"goPage(" + (sPage - maxPagingNum) + "," + pageSize +", '" + gridname + "')\">이전페이지</a></li>";
			//이전 및 다음이 1페이지 단위로 움직일 경우 적용
			//html += "<a style=\"CURSOR:POINTER\" class=\"prev\"><img src=\"/html/image/btn/prev02_ico.gif\" alt=\"이전페이지\" onClick=\"goPage(" + (currentPage - 1) + "," + pageSize +", '" + gridname + "')\"/></a>";
			html += "<li class=\"num\">";
			for (var i=sPage; i<=ePage; i++) {
				if (currentPage == i) {
					html += "<a href=\"#\" style=\"font-weight:bold; color:#cf3544;\">"+i+"</a>";
				} else {
					html += "<a href=\"#\" style=\"font-weight:normal; color:#8b8d86;\" onClick=\"goPage(" + i + "," + pageSize +", '" + gridname + "')\">"+i+"</a>";
				}
			}
		
			html += "</li>";	
		
			if (ePage < pageTotalCnt) {
				//마지막 페이지가 전체 페이지 수 보다 작은경우 페이지 세팅
				
				//maxPagingNum 단위로 이동시 적용
				html += "<li class=\"next\"><a href=\"#\" onclick=\"goPage(" + ((sPage + maxPagingNum)) + "," + pageSize +", '" + gridname + "')\">다음페이지</a></li>";
				//이전 및 다음이 1페이지 단위로 움직일 경우 적용
				html += "<li class=\"last\"><a href=\"#\" onclick=\"goPage(" + pageTotalCnt + "," + pageSize +", '" + gridname + "')\">마지막페이지</a></li>";
			}else if(ePage == pageTotalCnt){
				if(currentPage == pageTotalCnt){
					//현재 페이지가 마지막 페이지인 경우 이후는 없으므로 이동하지 않는다.
					html += "<li class=\"next\"><a href=\"#\" onclick=\"goPage(0," + pageSize +", '" + gridname + "')\">다음페이지</a></li>";
					html += "<li class=\"last\"><a href=\"#\" onclick=\"goPage(0," + pageSize +", '" + gridname + "')\">마지막페이지</a></li>";
				}else{
					//마지막 페이지가 전체 페이지 수 보다 작은경우 페이지 세팅
					
					//maxPagingNum 단위로 이동시 적용
					html += "<li class=\"next\"><a href=\"#\" onclick=\"goPage(" + pageTotalCnt + "," + pageSize +", '" + gridname + "')\">다음페이지</a></li>";
					//이전 및 다음이 1페이지 단위로 움직일 경우 적용
					html += "<li class=\"last\"><a href=\"#\" onclick=\"goPage(" + pageTotalCnt + "," + pageSize +", '" + gridname + "')\">마지막페이지</a></li>";
				}		
			}
		}
	html += "</ul></div>";
    
	target.empty().append(html);	
}

