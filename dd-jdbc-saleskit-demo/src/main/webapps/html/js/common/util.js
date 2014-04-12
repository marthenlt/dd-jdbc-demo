function getColModel(gridOptions) {
	var colModel = gridOptions.colModel;
	var json="[";
	for(var i=0;i<colModel.length;i++) {
		if (i != 0) {json += ",";}
		json += "{";
		var j = 0;
		$.each(colModel[i], function (index, entry) {
			if (isValidColName(index)) {
				if (j != 0) {json += ",";}
				json += "\"" + index + "\":" + "\"" + entry + "\"";
				j++;
			}
		});
		json += "}";
	}
	json += "]";
	return json;
}

function isValidColName(name) {
	if ("name" == name || "key" == name || "userdata" == name) return true;
	else return false;
}
function initCHARGE_MONTH() {
	var today = new Date();
    for(var i=today.getFullYear()-1; i < today.getFullYear()+2 ; i++) {
    	$("#S_CHARGEMONTH_Y").append("<option value='"+i+"'>"+i+"년</option>");
    	if(today.getFullYear() == i) {
        	$("#S_CHARGEMONTH_Y").val(i);
        }
    }
    for(var i=1; i<=12; i++) {
    	var str;
    	if(i<10)
    		str = "0" + i;
    	else
    		str = i;
    	
    	$("#S_CHARGEMONTH_M").append("<option value='"+str+"'>"+i+"월</option>");
        if(today.getMonth() + 1 == i) {
        	$("#S_CHARGEMONTH_M").val(str);
        } 
     }
}
function getCHARGE_MONTH() {
	var CHARGE_MONTH = $('#S_CHARGEMONTH_Y').val() + $('#S_CHARGEMONTH_M').val();
	return CHARGE_MONTH;
}
function initBILMONTH() {
	var today = new Date();
    for(var i=today.getFullYear()-1; i < today.getFullYear()+2 ; i++) {
    	$("#S_BILLMONTH_Y").append("<option value='"+i+"'>"+i+"년</option>");
    	if(today.getFullYear() == i) {
        	$("#S_BILLMONTH_Y").val(i);
        }
    }
    for(var i=1; i<=12; i++) {
    	var str;
    	if(i<10)
    		str = "0" + i;
    	else
    		str = i;
    	
    	$("#S_BILLMONTH_M").append("<option value='"+str+"'>"+i+"월</option>");
        if(today.getMonth() + 1 == i) {
        	$("#S_BILLMONTH_M").val(str);
        } 
     }
}
function getBILMONTH() {
	var CHARGE_MONTH = $('#S_BILLMONTH_Y').val() + $('#S_BILLMONTH_M').val();
	return CHARGE_MONTH;
}

function getFlash(URL,wid,hei,mode) 
{
	document.write("<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0' width='"+wid+"' height='"+hei+"'>");
	document.write("<param name='movie' value='"+URL+"'>");
	document.write("<param name='quality' value='high'>");
	document.write("<param name='allowScriptAccess' value='sameDomain'>");
	document.write("<param name='WMODE' value='"+mode+"'>");
	document.write("<embed src='"+URL+"' wmode='"+mode+"' quality='high' pluginspage='https://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' width='"+wid+"' height='"+hei+"'></embed>");
	document.write("</object>");
}

function getMediaPlayer(src,width,height,autostart,showControls,loop){
	document.write("<OBJECT ID=\"Player\" CLASSID=\"CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6\" width=\""+width+"\" height=\""+height+"\" >");
	document.write("<PARAM name=\"autoStart\" value=\""+autostart+"\">");
	document.write("<PARAM name=\"showControls\" value=\""+showControls+"\">");
	document.write("<PARAM name=\"loop\" value=\""+loop+"\">");
	document.write("<PARAM name=\"URL\" value=\""+ src +"\">");
	document.write("</OBJECT>");
}
//원하는 자릿수만큼 왼쪽에 특정문자열로 채워넣어줍니다.
function leftPad(source, targetLength, padChar) {
	if (!padChar) {
		padChar = " ";
	}
	if (source.length < targetLength)
	{
		var padding = "";

		while (padding.length + source.length < targetLength)
			padding += padChar;

		return padding + source;
	}
	return source;
}
//원하는 자릿수만큼 오른쪽에 특정문자열로 채워넣어줍니다.
function rightPad(source, targetLength, padChar) {
	while (source.length < targetLength)
		source += padChar;

	return source;
}

/*
 * integer check
 */
function isInteger(str)
{
	var len = str.length;
	var integer_flag = true;

    for(i=0; i<len; i++)
    {
        if(isNaN(str.substring(i,i+1))) //문자일경우
        {
			integer_flag = false;
        }
    }

    return integer_flag;
}

/*
 * 인자로 받은 값에 특정문자가 있는지 체크
 */
function isIndexof(v1,v2)
{
	if(v1.indexOf(v2) < 0)
	{
		return false;
	}
	else
	{
		return true;
	}
}

function cutStr(str,limit)
{
    var tmpStr = str;
    var byte_count = 0;
    var len = str.length;
    var dot = "";

    for(i=0; i<len; i++)
    {
        byte_count += chr_byte(str.charAt(i));
        if ( byte_count > limit )
            return false;
    }

    //document.writeln(tmpStr+dot);
    return true;
}

function chrByte(chr)
{
  if(escape(chr).length > 4)
    return 2;
  else
    return 1;
}

/**
 * 입력값이 NULL인지 체크
 */
function isNull(input) {
    if (input.value == null || input.value == "") {
        return true;
    }
    return false;
}

/**
 * 입력값에 스페이스 이외의 의미있는 값이 있는지 체크
 */
function isEmpty(input) {

	var checkType = false;
	var result = false;

	if(input.length) {
		if(input.length > 0) {
			if(input[0].type=="checkbox" || input[0].type=="radio") {
				checkType = true;
			}
		}
	}

	if(checkType) {
		for(var i=0; i < input.length; i++) {
			if(!input[i].checked) {
				result = true;
			} else {
				result = false;
				break;
			}
		}
	} else {
	    if (input.value == null || input.value.replace(/ /gi,"") == "") {
	    	result = true;
	    }
	}

    return result;
}

/**
 * 입력값에 특정 문자(chars)가 있는지 체크
 * 특정 문자를 허용하지 않으려 할 때 사용
 * ex) if (containsChars(form.name,"!,*&^%$#@~;")) {
 *         alert("이름 필드에는 특수 문자를 사용할 수 없습니다.");
 *     }
 */
function containsChars(input,chars) {
    for (var inx = 0; inx < input.value.length; inx++) {
       if (chars.indexOf(input.value.charAt(inx)) != -1)
           return true;
    }
    return false;
}

/**
 * 입력값이 특정 문자(chars)만으로 되어있는지 체크
 * 특정 문자만 허용하려 할 때 사용
 * ex) if (!containsCharsOnly(form.blood,"ABO")) {
 *         alert("혈액형 필드에는 A,B,O 문자만 사용할 수 있습니다.");
 *     }
 */
function containsCharsOnly(input,chars) {
	var temp = input;
    for (var inx = 0; inx < temp.length; inx++) {
       if (chars.indexOf(temp.charAt(inx)) == -1)
           return false;
    }
    return true;
}
function startChars(input,chars) {
	var temp = input.toLowerCase();
	temp = temp.substring(0,1);
	if(chars.indexOf(temp) == -1)
		return false;
}

/**
 * 입력값이 알파벳인지 체크
 * 아래 isAlphabet() 부터 isNumComma()까지의 메소드가
 * 자주 쓰이는 경우에는 var chars 변수를
 * global 변수로 선언하고 사용하도록 한다.
 * ex) var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 *     var lowercase = "abcdefghijklmnopqrstuvwxyz";
 *     var number    = "0123456789";
 *     function isAlphaNum(input) {
 *         var chars = uppercase + lowercase + number;
 *         return containsCharsOnly(input,chars);
 *     }
 */
function isAlphabet(input) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    return containsCharsOnly(input,chars);
}

/**
 * 입력값이 알파벳 대문자인지 체크
 */
function isUpperCase(input) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return containsCharsOnly(input,chars);
}

/**
 * 입력값이 알파벳 소문자인지 체크
 */
function isLowerCase(input) {
    var chars = "abcdefghijklmnopqrstuvwxyz";
    return containsCharsOnly(input,chars);
}
/**
 * 첫번째 입력 글자가 영문자인지 체크
 */
function isStartCase(input) {
    var chars = "abcdefghijklmnopqrstuvwxyz";
    return startChars(input,chars);
}

/**
 * 입력값에 숫자만 있는지 체크
 */
function isNumber(v) {
	var reg = /^\d+$/;
	return reg.test(v);
}
function isDouble(v) {
	var reg = /^[-|+]?\d+\.?\d*$/;
	return reg.test(v);
}

/*
 * 소수점 포함 숫자 체크
 */
function isNumberDot(s) {
	s += ''; // 문자열로 변환
	s = s.replace(/^\s*|\s*$/g, ''); // 좌우 공백 제거
	if (s == '' || isNaN(s)) return false;
	return true;
}

/**
 * 입력값이 알파벳,숫자로 되어있는지 체크
 */
function isAlphaNum(input) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return containsCharsOnly(input,chars);
}

/**
 * 입력값이 숫자,대시(-)로 되어있는지 체크
 */
function isNumDash(input) {
    var chars = "-0123456789";
    return containsCharsOnly(input,chars);
}

/**
 * 입력값이 숫자,콤마(,)로 되어있는지 체크
 */
function isNumComma(input) {
    var chars = ",0123456789";
    return containsCharsOnly(input,chars);
}

/**
 * 입력값에서 콤마를 없앤다.
 */
function removeComma(input) {
    return input.value.replace(/,/gi,"");
}

/**
 * 입력값이 사용자가 정의한 포맷 형식인지 체크
 * 자세한 format 형식은 자바스크립트의 'regular expression'을 참조
 */
function isValidFormat(input,format) {
    if (input.value.search(format) != -1) {
        return true; //올바른 포맷 형식
    }
    return false;
}

/**
 * 입력값이 이메일 형식인지 체크
 */
function isValidEmail(input) {
//    var format = /^(\S+)@(\S+)\.([A-Za-z]+)$/;
    var format = /^((\w|[\-\.])+)@((\w|[\-\.])+)\.([A-Za-z]+)$/;
    return isValidFormat(input,format);
}

//날짜입력
function isValidDate(data)
{
    var format = /^(\d+)-(\d+)-(\d+)$/;
    if (data.search(format) != -1) {
        return true; //올바른 포맷 형식
    }
    //return isValidFormat(data,format);
}

/**
 * 입력값이 전화번호 형식(숫자-숫자-숫자)인지 체크
 */
function isValidPhone(input) {
    var format = /^(\d+)-(\d+)-(\d+)$/;
    return isValidFormat(input,format);
}

var domainPattern=/^(kr|com|net|org|tel|asia|cn|me|biz|in|eu|info|cc|tv|jp|ac|name|tw)$/;
function isValidDomain(input,boolNoW3,boolCheckTld) {
	domainName=input.value.toLowerCase();
	if (boolCheckTld==null) {boolCheckTld=true}
	var specialChars="/\\(\\)><@,;:\\\\\\\"\\.\\[\\]";
	var validChars="\[^\\s" + specialChars + "\]";
	var atom=validChars + '+';
	var atomPat=new RegExp("^" + atom + "$");
	var domArr=domainName.split(".");
	var len=domArr.length;
	if (len==1) { return false }
	for (i=0;i<len;i++) {if (domArr[i].search(atomPat)==-1) {return false}}
	if ((boolCheckTld) && (domArr[domArr.length-1].length!=2) && (domArr[domArr.length-1].search(domainPattern)==-1)) {return false}
	if ((boolNoW3) && (domainName.substring(0,4).toLowerCase()=="www.")) {return false}
	return true;
}

/**
 * 입력값의 바이트 길이를 리턴
 * Author : Wonyoung Lee
 */
function getByteLength(input) {
    var byteLength = 0;
    for (var inx = 0; inx < input.value.length; inx++) {
        var oneChar = escape(input.value.charAt(inx));
        if ( oneChar.length == 1 ) {
            byteLength ++;
        } else if (oneChar.indexOf("%u") != -1) {
            byteLength += 2;
        } else if (oneChar.indexOf("%") != -1) {
            byteLength += oneChar.length/3;
        }
    }
    return byteLength;
}

function checkLicense(user_license_1,user_license_2)
{
    if (user_license_1.value.length != 6)
    {
//        alert("올바른 주민등록번호를 입력해주세요.");
        user_license_1.focus();
        return false;
    } else if (user_license_2.value.length != 7){
//        alert("올바른 주민등록번호를 입력해주세요.");
        user_license_2.focus();
        return false;
    } else {
        var str_sn1 = user_license_1.value;
        var str_sn2 = user_license_2.value;

        var digit=0
        for (var i=0;i<str_sn1.length;i++)
        {
            var str_dig=str_sn1.substring(i,i+1);
            if (str_dig<'0' || str_dig>'9')
            {
                digit=digit+1
            }
        }

        if ((str_sn1 == '') || ( digit != 0 ))
        {
//            alert('잘못된 주민등록번호입니다.\n\n다시 확인하시고 입력해 주세요.');
            user_license_1.focus();
            return false;
        }

        var digit1=0
        for (var i=0;i<str_sn2.length;i++)
        {
            var str_dig1=str_sn2.substring(i,i+1);
            if (str_dig1<'0' || str_dig1>'9')
            {
                digit1=digit1+1
            }
        }

        if ((str_sn2 == '') || ( digit1 != 0 ))
        {
//            alert('잘못된 주민등록번호입니다.\n\n다시 확인하시고 입력해 주세요.');
            user_license_2.focus();
            return false;
         }

        if (str_sn1.substring(2,3) > 1)
        {
//            alert('잘못된 주민등록번호입니다.\n\n다시 확인하시고 입력해 주세요.');
            user_license_1.focus();
            return false;
        }

        if (str_sn1.substring(4,5) > 3)
        {
//            alert('잘못된 주민등록번호입니다.\n\n다시 확인하시고 입력해 주세요.');
            user_license_1.focus();
            return false;
        }

        if (str_sn2.substring(0,1) > 4 || str_sn2.substring(0,1) == 0)
        {
//            alert('잘못된 주민등록번호입니다.\n\n다시 확인하시고 입력해 주세요.');
            user_license_2.focus();
            return false;
        }

        var a1=str_sn1.substring(0,1)
        var a2=str_sn1.substring(1,2)
        var a3=str_sn1.substring(2,3)
        var a4=str_sn1.substring(3,4)
        var a5=str_sn1.substring(4,5)
        var a6=str_sn1.substring(5,6)

        var check_digit=a1*2+a2*3+a3*4+a4*5+a5*6+a6*7

        var b1=str_sn2.substring(0,1)
        var b2=str_sn2.substring(1,2)
        var b3=str_sn2.substring(2,3)
        var b4=str_sn2.substring(3,4)
        var b5=str_sn2.substring(4,5)
        var b6=str_sn2.substring(5,6)
        var b7=str_sn2.substring(6,7)

        var check_digit=check_digit+b1*8+b2*9+b3*2+b4*3+b5*4+b6*5

        check_digit = check_digit%11
        check_digit = 11 - check_digit
        check_digit = check_digit%10

        if (check_digit != b7)
        {
//            alert('잘못된 주민등록번호입니다.\n\n다시 확인하시고 입력해 주세요.');
            user_license_2.focus();
            return false;
        } else{
            return true;
        }
    }
}

/**
 * 입력시 세자리 콤마넣기
 * onKeyUp(this)
 */
function comma(me){
	var myStr=numOffMask(me.value);
	me.value=numOnMask(myStr);
}
function numOffMask(me){
	var tmp=me.split(",");
	tmp=tmp.join("");
	return tmp;
}
function numOnMask(me){
	var tmpH
	if(me.charAt(0)=="-"){
		tmpH=me.substring(0,1);
		me=me.substring(1,me.length);
		}me.indexOf('-')
		if(me.length > 3){
			var c=0;
			var myArray=new Array();
			for(var i=me.length;i>0;i=i-3){
				myArray[c++]=me.substring(i-3,i);
		}
		myArray.reverse();
		me=myArray.join(",");
	}
	if(tmpH){
		me=tmpH+me;
	}
	return me
}

/**
 * 금액 세자리 컴머넣기
 */
function formatCurrency(num)
{
	num = num.toString().replace(/\$|\,/g,'');
	if(isNaN(num)) num = "0";
	cents = Math.floor((num*100+0.5)%100);
	num = Math.floor((num*100+0.5)/100).toString();
	if(cents < 10) cents = "0" + cents;
	for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
		num = num.substring(0,num.length-(4*i+3))+','+num.substring(num.length-(4*i+3));
	return (num);
}

/**
 * 전화번호잘라넣기(xxx-1111-xxxx)
 * 0123456789 => 012-345-6789
 */
function getPhone(value)
{
	if ( value.indexOf("-") == -1 )
	{
		return (value.substring(0,3)+'-'+value.substring(3,value.length-4)+'-'+value.substring(value.length-4, value.length));
	}
	else return value;
}

/**
* 문자열 변경
*/
function changeChar(o_src,t_src)
{
    var newstr = o_src.replace(t_src,",");
    return newstr;
}

function openWin1(u, w, h, r, s)
{
	OPENING_WINDOW = window.open(u, '', 'width='+w+',height='+h+', resizable='+r+', scrollbars='+s);
	OPENING_WINDOW.focus();
}

function openWin2(url, winname, width, height, tbar, mbar, sbar, loc, status, resizable, fscreen, left, top, cflag)
{
	if(cflag == 'yes' || cflag == 'y' || cflag == '1')
	{
		left = (window.screen.width - width ) / 2;
		top  = (window.screen.height- height) / 2;
	}

	opening_window = window.open(url, winname, 'width=' + width + ', height=' + height + ', toolbar=' + tbar + ', menubar=' + mbar + ', scrollbars=' + sbar + ', location=' + loc + ', status=' + status + ', resizable=' + resizable + ', fullscreen=' + fscreen + ', left=' + left + ', top=' + top);
	opening_window.focus();
}

// 이미지 리사이즈
function imgResize(imgObj,limitSize) {
	var imgx, imgy;
	if (imgObj.width > limitSize) {
		imgx = limitSize;
		imgy = (imgObj.height * limitSize) / imgObj.width;

		imgObj.width = imgx;
		imgObj.height = imgy;
	}
}

function resizeImage(limitSize) {
	try {
		for (var i=0; i<document.images.length; i++) {
			if (document.images[i].className=="resizeImage") {
				imgResize(document.images[i], limitSize);
			}
		}
	} catch(e) {
	}
}

function doBlink() {
	var blink = document.all.tags("BLINK");
	for (var i=0; i < blink.length; i++) {
		blink[i].style.visibility = blink[i].style.visibility == "" ? "hidden" : ""
	}
}

function startBlink() {
	setInterval("doBlink()",400);
}

  //add comma
function displayComma(value) {
	var src;
	var i;
	var factor;
	var su;
	var Spacesize = 0;
	var String_val = value.toString();
	factor = String_val.length % 3;
	su = (String_val.length - factor) /3;
	src = String_val.substring(0,factor);

	for(i=0; i<su ; i++) {
		if ((factor==0)&&(i==0)) {
			src += String_val.substring(factor+(3*i), factor+3+(3*i));
		} else {
			if ( String_val.substring(factor+(3*i) - 1, factor+(3*i)) != "-" ) {
				src +=",";
				src += String_val.substring(factor+(3*i), factor+3+(3*i));
			}
		}
	}
	return src;
}

//delete comma
function deleteComma(value) {
	var x, ch;
	var i=0;
	var newVal="";
	for (x=0; x <value.length ; x++) {
		ch = value.substring(x,x+1);
		if (ch != ",")  {
			newVal += ch;
		}
	}
	return newVal;
}


function autoResizePopup() {
     var winW, winH, sizeToW, sizeToH;

     if ( parseInt(navigator.appVersion) > 3 ) {

          if ( navigator.appName=="Netscape" ) {
               winW = window.innerWidth;
               winH = window.innerHeight;
          }

          if ( navigator.appName.indexOf("Microsoft") != -1 ) {
               winW = document.body.scrollWidth;
               winH = document.body.scrollHeight;
          }
     }

     sizeToW = 0;
     sizeToH = 0;

     if ( winW > 1024 ) { //1024은 제한하고자 하는 가로크기
          sizeToW = 1024 - document.body.clientWidth;
     } else if ( Math.abs(document.body.clientWidth - winW ) > 3 ) {
          sizeToW = winW - document.body.clientWidth;
     }

     if ( winH > 1024 ) {  //768은 제한하고자 하는 세로크기
          szeToH = 1024 - document.body.clientHeight;
     } else if ( Math.abs(document.body.clientHeight - winH) > 4 ) {
          sizeToH = winH - document.body.clientHeight;
     }

     if ( sizeToW != 0 || sizeToH != 0 ) {
          window.resizeBy(sizeToW, sizeToH);
     }
}



/////////////////////////////////////////////////////////////////////////////////// rowspan 생성 스크립트
//tableId :  table id를 넣자 
//rowIndex : table의 시작 row index(0부터 시작)
//cellIndex : 해당 row의 cell index(0부터 시작)
// created by singi(20030611)
///////////////////////////////////////////////////////////////////////////////////
	function cellMergeChk(tableObj, rowIndex, cellIndex)
	{
		var rowsCn = tableObj.rows.length;
		
		if(rowsCn-1 > rowIndex)
			cellMergeProcess(tableObj, rowIndex, cellIndex);
	}
	
	function cellMergeProcess(tableObj, rowIndex, cellIndex)
	{
		var rowsCn = tableObj.rows.length;
		var compareCellsLen = tableObj.rows(rowIndex).cells.length;		//시작 row에 cell 개수
		
		//초기화	
		var compareObj = tableObj.rows(rowIndex).cells(cellIndex);
		var compareValue = compareObj.innerHTML;
		var cn = 1;
		var delCells = new Array();
		var arrCellIndex = new Array();
		for(i=rowIndex+1; i < rowsCn; i++)
		{
			var cellsLen = tableObj.rows(i).cells.length;
			var bufCellIndex = cellIndex

			//실질적인 row에 cellIndex를 구하자.			
			if(compareCellsLen != cellsLen) 
			{
				bufCellIndex = bufCellIndex - (compareCellsLen - cellsLen);
			}
			cellObj = tableObj.rows(i).cells(bufCellIndex);
			
			if(compareValue == cellObj.innerHTML)
			{
				delCells[cn-1] = tableObj.rows(i);		//삭제할 cell의 row를 저장한다.
				arrCellIndex[cn - 1] = bufCellIndex;	//해당 row cell index를 저장한다.
				cn++;
			}
			else
			{
				//병합
				compareObj.rowSpan = cn;
				
				//삭제
				for(j=0; j < delCells.length; j++)
				{
					delCells[j].deleteCell(arrCellIndex[j]);
				}
				
				//초기화	
				compareObj = cellObj;
				compareValue = cellObj.innerHTML;
				cn = 1;
				delCells = new Array();
				arrCellIndex = new Array();
			}
		}

		//병합		
		compareObj.rowSpan = cn;
		//삭제
		for(j=0; j < delCells.length; j++)
		{
			delCells[j].deleteCell(arrCellIndex[j]);
		}
	}


function tdFillColor(tr, color) {
	if (tr.cells) {
		for (var i=0; i<tr.cells.length; i++) {
			var td = tr.cells[i];
			td.style.backgroundColor=color;
		}
	}
}


function resizeAutoTextArea(obj) {
	var text = obj.value;
	var pcount = 0;
	
	if (text.length > 0) {
		pcount = text.split('\n').length;
	}
	
	/*	
	for (i=0; i<text.length; i++) {
		if (text.charAt(i) == '\n') pcount++;
	}
	*/
			
	if (pcount <= 2) {
		obj.style.height = 65;
		return;
	}
	
	var oH = 14.1;
	if (!document.all) oH = 14.9;
			
	var mpx = 70 + (Math.ceil((pcount - 2) * oH));
	obj.style.height = mpx;
	
}

function escapeHTMLText(str){
	str = str.replace(/&/g, '&amp;');
	str = str.replace(/"/g, '&quot;');
	str = str.replace(/</g, '&lt;');
	str = str.replace(/>/g, '&gt;');
	str = str.replace(/ /g, '&nbsp;');
	return str;
}

function replaceAll(str, s1, s2) {
	return str.split(s1).join(s2);
}


function num2won(szNumber){
 szNumber = new String(szNumber);
 if(szNumber == "")
  return "";
 if(szNumber == "0")
  return "0";
  
 var returnValue = 0;
 var temp1 = szNumber.replace(/,/g,"");   // 입력 데이터를 숫자 형태로 변환
 var temp = temp1.split('.');
 
 // 정수자리 원단위로 만들기
 var num1 = "";
 var comma = 1;
 for(var i = temp[0].length -1; i >= 0; i--){
  num1 += temp[0].charAt(i);

  if(comma % 3 == 0 && comma != 0){
   num1 += ",";
  } // end if
  comma++;
 } // end for
 

 var num2 = "";
 for(var i = num1.length -1; i >= 0; i--){
  num2 += num1.charAt(i);
 } // end for
 
 // 소수점이 있다면...
 if(temp.length > 1){

  // 소수점 자리 원 단위로 만들어서 리턴..!!
  var num3 = "";
  for(var i=1; i <= temp[1].length; i++){
   num3 += temp[1].charAt(i-1);
   
   if((i%3 == 0) && (i != 0)){
    num3 += ",";
   }
  } // end for
  
  var num4 = num2 + "." + num3;
  returnValue = num4.replace(/(^,)|(,$)/g,"");
 } // end if
 else
  returnValue = num2.replace(/(^,)|(,$)/g,"");; // 앞,뒤 콤마 제거
  
 if(returnValue == "" || returnValue == ".")
  return ""
 else
  return returnValue;
} // end function num2won()



/*
 * jqgrid에 있는 데이타 출력하기 위한 json 만들기
 * 파라미터
 *  arr : 컬럼 정보 ( id:이름, type:글자타입 )
 *  gridobj : 그리드 object
 */
function gridToExcel(arr, gridObj)
{
	var ids=new Array();
	ids=gridObj.getDataIDs();

	var rows = arr.rows;
	var grouping_cnt = 0;
	var html="";
	  //title
	  html += "{\"file\" : \"" + arr.file + "\", \"grouping\" : \"" + arr.grouping + "\",\"query\":\"" + arr.query + "\", \"title\":\"" + arr.title + "\", ";  
	  html += "\"column\" : [";
	  var n_cnt = 0;
	  for(var i=0;i<rows.length;i++)
	  {
		  var width = rows[i].width;
		  if(rows[i].width == undefined) width = 50;
		  html=html+ "{\"id\":\"" +rows[i].name+"\", \"type\":\"" + rows[i].type + "\", \"summary\": \"" + rows[i].summary + "\", \"width\": \"" + width + "\", \"summaryText\": \"" + rows[i].summaryText + "\", \"show\": \"" + rows[i].show + "\"}";
		  if(arr.groupfield == rows[i].id) grouping_cnt = n_cnt;
		  
		  n_cnt++;
	  }
	  html=html+ "], \"rows\" : [";
	  
	  //content
	  /*for(var i=0;i<ids.length;i++)
	  {
		  var data=gridObj.getRowData(ids[i]); // get each row
	  		html= html+"{\"id\":[";
	        for(var j=0;j<rows.length;j++)
	        {
	        	if(rows[j].show != false) html= html+"\"" +  data[rows[j].id] + "\",";
	        }	        	
	        
	        //html=html+data[colNames[j]]+"\t"; // output each column as tab delimited
	        
	        html=html.substring(0, html.length-1)+"]}";  // output each row with end of line
	    
	    }*/
	    html=html+"], \"groupfield\":\"" + grouping_cnt + "\" }";  // end of line at the end*/
	    return html;
}

function getOPTIONS(options) {
	var html="";
	var colNames = options.colNames;
	html += "{colNames:[";
	for(var i=0;i<colNames.length;i++) {
		if (i != 0) html += ",";
		html += "'"+colNames[i]+"'";
	}
	html += "],colModel :[";
	var colModel = options.colModel;
	for(var i=0;i<colModel.length;i++) {
		if (i != 0) html += ",";
		html += "{name:'"+colModel[i].name+"'";
		if (colModel[i].type != null)
			html += ",type:'"+colModel[i].type+"'";
		if (colModel[i].userdata != null)
			html += ",userdata:'"+colModel[i].userdata+"'";
		html += "}";
	}
	html += "]}";
	return html;
}

function arrayToExcel(arr, list)
{
	var rows = arr.rows;
	var grouping_cnt = 0;
	var html="";
	  //title
	html += "{\"file\" : \"" + arr.file + "\", \"grouping\" : \"" + arr.grouping + "\",\"query\":\"" + arr.query + "\", \"title\":\"" + arr.title + "\",";
	html += "\"column\" : [";
	var n_cnt = 0;
	  for(var i=0;i<rows.length;i++)
	  {
			  var width = rows[i].width;
			  if(rows[i].width == undefined) width = 50;
			  html=html+ "{\"id\":\"" +rows[i].name+"\", \"type\":\"" + rows[i].type + "\", \"summary\": \"" + rows[i].summary + "\", \"width\": \"" + width + "\", \"summaryText\": \"" + rows[i].summaryText + "\", \"show\": \"" + rows[i].show + "\"}";
			  if(arr.groupfield == rows[i].id) grouping_cnt = n_cnt;
			  
			  n_cnt++;
		  
	  }
	  html=html+ "], \"rows\" : [";
	  
	  //content
	  /*$.each(list, function (index, entry) {
	  		html= html+"{\"id\":[";
	  		var cell = entry;
	        for(var j=0;j<rows.length;j++)
	        {
	        	if(rows[j].show == true) 
	        	{
	        		if(entry[rows[j].id] == null)
	        			html= html+"\"\",";
	        		else
	        			html= html+"\"" +  entry[rows[j].id] + "\",";
	        	}
	        }
	        html=html.substring(0, html.length-1)+"]}";  // output each row with end of line
  		});*/

	    html=html+"], \"groupfield\":\"" + grouping_cnt + "\" }";  // end of line at the end*/
	    return html;
}

function set_comma(n){
	if(!n)
		return "0";
	
	var reg = /(^[+-]?\d+)(\d{3})/;
	
	n += '';
	
	while(reg.test(n))
		n = n.replace(reg, '$1'+','+'$2');

	return n;
}

function toChartXml(data, list)
{
	var str = "";
	str += "<graph ";
	//차트정보
	$.each(data.chart, function (index, entry) {
		str += "" + index + "=" + "\"" + entry + "\" "; 
	});
	str += "><categories>";

	var tmp = data.category.split(',');
	//카테고리 리스트
	for(var i=0;i<tmp.length;i++)
	{
		str += "<category name=\"" + tmp[i] + "\"/>"; 
	}	
	str += "</categories>";
	
	//데이타
	for(var i=0;i<data.series.length;i++)
	{
		str += "<dataset ";
		$.each(data.series[i], function (index, entry) {
			str += "" + index + "=" + "\"" + entry + "\" "; 
		});
		str += ">";
		$.each(list, function (index, entry) {
		{
			str+="<set value=\"" + entry[data.column[i]] + "\"/>";
		}
		});
		str += "</dataset>";
	}
	
	str += "</graph>";
	
	return str;
}

function toChartJson(data, list)
{
	
	var str = "";
	str += "{\"chart\":{";
	var cnt = 0;
	$.each(data.chart, function (index, entry) {
		if(cnt != 0) str += ",";
		str += "\"" + index + "\":" + "\"" + entry + "\""; 
		cnt = cnt + 1;
	});
	str += " },";
	str += "\"categories\":[{\"category\":[";
	cnt = 0;
	for(var i=0;i<data.category.length;i++)
	{
		$.each(data.category[i], function (index, entry) {
			if(cnt != 0) str += ",";
			str += "{\"" + index + "\":" + "\"" + entry + "\"}"; 
			cnt = cnt + 1;
		});
	}
	str += "]}],";
	str += "\"dataset\":[";
	cnt = 0;
	for(var i=0;i<data.seriesname.length;i++)
	{
		if(cnt != 0) str+= ",";
		str += "{\"seriesname\":\""+data.seriesname[i]+"\", \"data\":[";
		var j_cnt = 0;
		$.each(list, function (index, entry) {
			//for(var j=0;j<data.seriesname.length;j++)
		{
			if(j_cnt != 0) str+= ",";
			str+="{\"value\":\"" + entry[data.column[i]] + "\"}";
			j_cnt = j_cnt + 1;
		}
		});
		str += "]}";
		cnt = cnt + 1;
	}
	
	str += "]";
	
	str += "}";

	return str;
}

/*
 * url을 인자로 받아서 timestamp를 추가하여 url을 return함. (ajax 통신에서 브라우저 캐시 사용시 캐시에서 읽어와서 변경 안되는 문제 피하기 위함)
 */
function getTimeStampUrl(srcUrl){
	var rtnUrl = "";
	var nowtimestamp = new Date();
    nowtimestamp = nowtimestamp.getTime();
    
	if(srcUrl.indexOf(".do?") > -1){
		rtnUrl = srcUrl + "&nowtimestamp=" + nowtimestamp;
	}else{
		rtnUrl = srcUrl + "?nowtimestamp=" + nowtimestamp;
	}
	//alert(rtnUrl);
	//alert(encodeURIComponent(rtnUrl));
    return rtnUrl;
} 
/*
 * 조직/사원 선택 팝업창 열기
 * emp_id_target : 부모창에서 사원번호(emp_id) 값을 받을 input element id, "" 일 경우 전달하지 않음. 
 * emp_nm_target : 부모창에서 사원명(emp_nm) 값을 받을 input element id, "" 일 경우 전달하지 않음.
 * mobile_no_target : 부모창에서 전화번호(mobile_no) 값을 받을 input element id, "" 일 경우 전달하지 않음.
 * after_function : 부모창에서 값 세팅후 추가로 실행이 필요한 function 명, "" 일 경우 실행하지 않음.
 */

function openOrgEmpTree(emp_id_target, emp_nm_target, mobile_no_target, after_function){
	var url = "/common/popup/orgemptree/orgEmpTreeMain.do";
	url += "?emp_id_target="+emp_id_target;
	url += "&emp_nm_target="+emp_nm_target;
	url += "&mobile_no_target="+mobile_no_target;
	url += "&after_function="+after_function;
	
	url = getTimeStampUrl(url);
    var name = "sendListPop";
    
    var width = '700';
    var height = screen.height-200;
    var top_position = 10;
    var left_position = 5;
    var settings = "width="+width+", height="+height+", status=no, location=no, toolbar=no, menubar=no, top="+top_position+", left="+left_position;
    
    window.open(url,name,settings);
}

/* 
 * jquery selector로 선택된 element list의 value 들을 주어진 separator를 사용하여 하나의 text 형식으로 변환함
 * selector - jquey selector 타입(#, ., input 등등)
 * separator - 사용할 구분자
 */
function setDataListWithSeparator(selector, separator){
	var data_list = "";
	$(selector).each(function(){
		if(data_list != ""){
			data_list += separator;
        }
		data_list += $(this).val();
	});
	
	return data_list;
}

/*
 * 화면의 checkbox를 name 및 value가 일치할 경우 checked 또는 unchecked 시킨다.
 */
function setCheckBox(name, value, checked){
	if(checked == "checked"){
		$("input:checkbox[name='" + name + "'][value='" + value +"']").attr("checked", "checked").parent().parent().removeAttr("class").attr("class", "selected");		
	}else{
		$("input:checkbox[name='" + name + "'][value='" + value +"']").removeAttr("checked").parent().parent().removeAttr("class").attr("class", "outrange");
	}
}

/*
 * ajax 통신 session 상태 확인
 */
function isSessionAlive(result){
	var status = result.session_status;
	if(status != null && status != "" && status != "null" && status != "undefined"){
		if(status == "invalidate"){
			alert(result.session_msg);
			window.location.href = "/goTopUrl.do";
		}
	}
}

/*
 * 같은 레벨인 경우 reset 처리
 */
function resetSessionManagerThisPage(){
	session_counter = redirectAfter - session_counter_inteval;
}

/*
 * iframe에서 부모 페이지의 변수 reset 처리
 */
function resetSessionManagerIframe(){
	parent.session_counter = parent.redirectAfter - parent.session_counter_inteval;	
}

function isNullElement(obj){
	if(obj != null && obj != "null" && obj != "" && obj != undefined){
		return false;
	}else{
		return true;
	}
}

function getNullToEmpty(value){
	if(value != null && value != "null" && value != "" && value != undefined){
		return value;
	}else{
		return "";
	}
}

function getCharDateToFormat(chars){
	if(chars.length == 14){
		chars = chars.substring(0, 4) + "-" + chars.substring(4, 6) + "-" + chars.substring(6, 8) + " " + chars.substring(8, 10) + ":" + chars.substring(10, 12) + ":" + chars.substring(12, 14);
	}
	
	return chars;
}

function loadingbarFadeIn(target) {
	var loading_image = "<div id='loadingbar' style='position:absolute;background:#fff'><embed width='0' height='0'></embed><img style='position:absolute' id='image-load' src='/images/sub/loading.gif'></div>";
	$("body").append(loading_image);
	$('#loadingbar').hide();
	
	$t = $( target );
	$("#loadingbar").css({ opacity : 0.5, top: $t.offset().top, left : 13, width : $t.outerWidth(), height  : $t.outerHeight()});
	$("#image-load").css({ top : ($t.offset().top+100), left : (($t.width() / 2) -60) });
	$('#loadingbar').fadeIn();
}

function loadingbarFadeOut() {
	$("#loadingbar").remove();
}

function roundNum(val, precision){
	var p = Math.pow(10, precision);
	return Math.round(val*p)/p;
}

function setShowHideLeftMenuForMobile(){
	if(chkIsConnectByMobile() == true){
		setLeftMenuArea("close");
	}
}

function chkIsConnectByMobile(){
	var isMobile = "false";

    var mobileKeyWords = new Array('iPhone', 'iPod', 'BlackBerry', 'Android', 'Windows CE', 'LG', 'MOT', 'SAMSUNG', 'Samsung', 'SonyEricsson');
    for (var word in mobileKeyWords){
        if (navigator.userAgent.match(mobileKeyWords[word]) != null){
            isMobile = "true";
            break;
        }
    }
    
    if(isMobile == "true"){
    	return true;
    }else if(isMobile == "false"){
    	return false;
    }
}

function setInnerFrameBoxHeight(){
	var iframe_height = parent.document.getElementById("mainframe").style.height;
    iframe_height = parseInt(iframe_height.substring(0, iframe_height.length-2), 10);
    
    document.getElementById("inner_box_td_tag").style.height = (iframe_height-61)+"px";
}

function getGridCalcHeight(except_page_height, except_grid_height){
	var iframe_height = parent.document.getElementById("mainframe").style.height;
	iframe_height = parseInt(iframe_height.substring(0, iframe_height.length-2), 10);
	//var except_page_height = 200;
	//var except_grid_height = 60;
	
	return (iframe_height - except_page_height - except_grid_height);
}

function getGridRownumCount(except_page_height, except_grid_height, divide_count){
	var iframe_height = parent.document.getElementById("mainframe").style.height;
	iframe_height = parseInt(iframe_height.substring(0, iframe_height.length-2), 10);
	
	return parseInt(((iframe_height - except_page_height - except_grid_height)/divide_count), 10);
}