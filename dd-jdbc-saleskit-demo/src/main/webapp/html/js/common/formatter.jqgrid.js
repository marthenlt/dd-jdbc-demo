function formatBANK_CODE(cellvalue, options, rowObject) {
	//"002:산업은행;003:기업은행;004:국민은행;005:외환은행;007:수협중앙회;
	//011:농협중앙회;020:우리은행;023:SC제일은행;027:씨티은행;081:하나은행;088:신한은행"
	if ("002" == cellvalue) {return "산업은행";} 
	else if ("003" == cellvalue) {return "기업은행";	}
	else if ("004" == cellvalue) {return "국민은행";	} 
	else if ("005" == cellvalue) {return "외환은행";	} 
	else if ("007" == cellvalue) {return "수협중앙회";	} 
	else if ("011" == cellvalue) {return "농협중앙회";	} 
	else if ("020" == cellvalue) {return "우리은행";	} 
	else if ("023" == cellvalue) {return "SC제일은행";	} 
	else if ("027" == cellvalue) {return "씨티은행";	} 
	else if ("081" == cellvalue) {return "하나은행";	} 
	else if ("083" == cellvalue) {return "신한은행";	} 
	else {return cellvalue;	}
}

function formatCHARGE_GEN_YN(cellvalue, options, rowObject) {
	if ("Y" == cellvalue) {return "완료";} 
	else if ("N" == cellvalue) {return "예정";	} 
	else {return "";	}
}

function formatCOMPNY_TYPE(cellvalue, options, rowObject) {
	if ( cellvalue == "F" ){
		return "포워더";
	}else if ( cellvalue == "P" ){
		return "입력대행";
	}else if ( cellvalue == "C" ){
		return "관세사";
	}else if ( cellvalue == "A" ){
		return "항공사";
	}else if ( cellvalue == "W" ){
		return "보세장치장";
	}else if ( cellvalue == "T" ){
		return "보세운송사";
	}else if ( cellvalue == "S" ){
		return "선사(용선사)";
	}else if ( cellvalue == "V" ){
		return "검수회사";
	}else if ( cellvalue == "O" ){
		return "하역업체";
	}else return cellvalue;
}
function formatBIL_TARGET_YN(cellvalue, options, rowObject) {
	if ("Y" == cellvalue) {return "대상";} 
	else if ("N" == cellvalue) {return "제외";	} 
	else {return cellvalue;	}
}
function formatBIL_STATUS(cellvalue, options, rowObject) {
	if ("F" == cellvalue) {return "승인";} 
	else if ("D" == cellvalue) {return "가입 대기";	}
	else if ("E" == cellvalue) {return "중지";	}
	else if ("R" == cellvalue) {return "해지";	}
	else {return cellvalue;	}
}
function formatPAY_TYPE(cellvalue, options, rowObject) {
	if ("1" == cellvalue) {return "표준요금제";} 
	else if ("2" == cellvalue) {return "슬림요금제";	} 
	else {return cellvalue;	}
}
function formatENTRPS_SE(cellvalue, options, rowObject) {
	if ( cellvalue == "UT001" ){
		return "화주(O)";
	}else if ( cellvalue == "UT002" ){
		return "선사(S)";
	}else if ( cellvalue == "UT004" ){
		return "항공사(A)";
	}else if ( cellvalue == "UT005" ){
		return "포워드(F)";
	}else if ( cellvalue == "UT006" ){
		return "하청업체(L)";
	}else if ( cellvalue == "UT007" ){
		return "운송사(T)";
	}else if ( cellvalue == "UT008" ){
		return "검수(V)";
	}else return cellvalue;
}
function formatCHARGE_GEN(cellvalue, options, rowObject) {
	if ("Y" == cellvalue) {return "완료";} 
	else if ("N" == cellvalue) {return "미청구";	} 
	else {return cellvalue;	}
}
function formatSND_STAT(cellvalue, options, rowObject) {
	if ("Y" == cellvalue) {return "수신";} 
	else if ("N" == cellvalue) {return "미수신";	}
	else if ("02" == cellvalue) {return "전송실패";	}
	else if ("03" == cellvalue) {return "전송대기";	}
	else {return cellvalue;	}
}
function formatPAYMENT_FLAG(cellvalue, options, rowObject) {
	if ("N" == cellvalue) {return "출금대기";}
	else if ("A" == cellvalue) {return "출금불능";}
	else if ("W" == cellvalue) {return "출금요청";}
	else if ("0" == cellvalue) {return "부분출금";}
	else if ("1" == cellvalue) {return "전액출금";}
	else if ("2" == cellvalue) {return "재생성";}
	else {return cellvalue;	}
}
function formatPayType(cellvalue, options, rowObject) {
	if ("C" == cellvalue) {return "자동이체";} 
	else if ("V" == cellvalue) {return "가상계좌";	} 
	else {return "";	}
}
function formatReflect(cellvalue, options, rowObject) {
	if ("W" == cellvalue) {return "대기";} 
	else if ("N" == cellvalue) {return "확정";	}
	else if ("Y" == cellvalue) {return "반영";	} 
	else {return "";	}
}
function formatRESULT_FLAG(cellvalue, options, rowObject) {
	var name = cellvalue;
	if ("A" == cellvalue) {name =  "전액";} 
	else if ("D" == cellvalue) {name =  "선수금";}
	else if ("R" == cellvalue) {name =  "차액환불";}
	else if ("F" == cellvalue) {name =  "전액환불";}
	return "<a href=\"javascript:detailDo('"+options.rowId+"')\">"+name+"</a>";
}
function formatDepositStatus(cellvalue, options, rowObject) {
	if ("S" == cellvalue) {return "완납";} 
	else if ("O" == cellvalue) {return "초과";}
	else if ("P" == cellvalue) {return "부분납";}
	else if ("N" == cellvalue) {return "미납";}
	else if ("C" == cellvalue) {return "청구";}
	else {return "";	}
}
function formatSALES_DATE(cellvalue, options, rowObject) {
	if ("" == cellvalue) {return "N";} 
	else {return "Y";	}
}
function formatYMD(cellvalue, options, rowObject) {
	return cellvalue.substring(0,4) + '-' + cellvalue.substring(4,6) + '-' + cellvalue.substring(6,8);
}

function formatDATE(cellvalue, options, rowObject) {
	if ( cellvalue != null || cellvalue=='' ){
		if ( cellvalue.length >= 8 ){
			return cellvalue.substr(0,4) + "-" + cellvalue.substr(4,2) + "-" + cellvalue.substr(6,2);
		}else{
			return cellvalue;
		}
	}
}

function unformatDATE(cellvalue, options, rowObject) {
			return cellvalue;
}

