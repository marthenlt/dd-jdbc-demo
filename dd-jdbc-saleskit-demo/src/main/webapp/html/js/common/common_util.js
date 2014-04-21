//** ---------------------------------------------------------------------------
// 목    적 : 함수정의표
// 생 성 일 : 
// 수    정 :
//** ---------------------------------------------------------------------------	
/*
(기능)문자열 자르기														getStringCut( strValue, strCutType, intStart, intCutSize )
(기능)바이트 수 구하기													getStringByte( strValue )
(기능)문자열 치환														getReplace( strValue, strFind, strChange )
(기능)공백제거															getTrim( strValue, strTrimType )
(기능)멀티 셀렉트박스의  선택된 항목들을 제거							setMultiSelected_Delete( strObjName)
(기능)체크박스 전체선택/해제											setChecked_All( strEleId, bChecked )
(기능)체크박스 전체반전 선택 (기존 선택값과 반대되는 모든값 선택)		setChecked_Reverse( strEleId )
(기능)입력 포커스 주기													setFocus( strEleId, nFormIndex )
(기능)TAB 효과 주기 (엔터키에 의해 동작)								setSendTab()
(기능)TAB 효과 주기 (지정한 길이에서 자동 전환)							setAutoTab(objEle,nLen, e)
(기능)지정한 함수 호출													setFunction_Call( strFunction )
(기능)입력박스 초기 셋팅된 텍스트값 지우기								setDefault_TextClear( objEle, strDefault_Text )
(기능)금지단어 필터링 체크   											IsWord_Filter( strFilter_Word, arrFilter_List )
(기능)팝업창 띄우기														setOpenPopup( cUrl, cOpenName, nWidth, nHeight )
(기능)팝업창 옵션에 따라 띄우기											setOpenPopupOption( cUrl, cOpenName, nWidth, nHeight, cOption )
(기능)팝업창 자동 사이즈 조절											popupAutoResize()
(기능)자동콤마 찍기														setAutoComma( objEle )
(기능)숫자만 입력														SetNum(obj)
(기능)멀티셀렉트박스의 이동 (위로이동)									setSelected_MoveUp( strObjName )
(기능)멀티셀렉트박스의 이동 (아래로이동)								setSelected_MoveDown( strObjName )
(기능)멀티셀렉트박스의 이동 (맨위로이동)								setSelected_MoveTop( strObjName )
(기능)멀티셀렉트박스의 이동 (맨아래로이동)								setSelected_MoveBottom( strObjName )
(기능)멀티셀렉트박스의 이동												setSelected_Move( objSelect, intIndex1, intIndex2 )
(기능)여러 멀티셀렉트박스에서의 이동 교환								setSelected_MoveElements( strObjName_Original, strObjName_Target )
(기능)멀티셀렉트박스에서의 전체 토글 (체크박스사용)						setSelectBox_ToggleAll( objCheckBox, strObjName )
(기능)멀티셀렉트박스에서의 전체 선택/해제 {토글}						setSelectBox_AllSelected( objEle, nSelected )
(기능)파일 다운로드														fnFileDownLoad(path,org,save)
(기능)파일 삭제															goFileDelete( cTableName, cSeqName, cSeq, cPath, cSave, cOriginal, cDelId )
(기능)화면 이동															goPageMoveUrl( cUrl )
(기능)화면 이동(새창)													goPageOpenUrl( cUrl )
(기능)이미지에 맞는 팝업창을 띄운다.									showPicture( srcl )

(체크)브라우저 체크(IE Or Others)										IsIE( )
(체크)입력가능한 문자인지 체크											IsValueType( strValue, strCheckType )
(체크)빈값여부 체크														IsEmpty( strValue )
(체크)동일정보 체크														IsEqual( strValue1, strValue2 )
(체크)혼합문자 체크														IsMix_String( strValue, bSpecialChar )
(체크)연속문자 체크														IsRepeat(strValue, nCheckCount)
(체크)입력허용길이 체크													IsLength( strValue, intMin, intMax )
(체크)이메일주소 체크													IsEmail( strValue )
(체크)한메일 사용여부 체크												IsMail_Daum( strValue )
(체크)전화번호 체크														IsPhone( strValue, strPhoneType )
(체크)사업자번호 체크													IsSaupjaNumber( strValue )
(체크)법인번호 체크														IsCorpNumber( strValue )
(체크)주민등록번호 체크													IsJuminNumber( strValue )
(체크)체크여부 확인														IsChecked( objEle )
(체크)윤년 체크															IsLeapYear( intYear )
(체크)유효한 날짜인지를 체크											IsDate( strYear, strMonth, strDay )
(체크)빈값여부 체크 후 포커스											IsCheck(obj, strMsg)
(체크)나모 엑티브 스퀘어6 입력내용 체크									IsBlank_NamoEditor( objForm, strEditorId )
(체크)이미지 파일 체크													uploadImg_Check( value )
(체크)글자수 제한														uf_isUpdateChar(obj,length_limit)

(체크)지정한 문자열만큼만 입력받기										checkByte_Length( objEle, intMax, bShow, strShow_SizeId )
(체크)(아이디)															check_Id( objEle, nMin, nMax, bRequired, cMsgTitle )
(체크)(비밀번호)														check_Pwd( objEle, objEle_re, nMin, nMax, bRequired, cMsgTitle )
(체크)(제한적인 문자만 사용)											check_LimitString( objEle, nMin, nMax, bRequired, cValueType, cMsgTitle )
(체크)(모든 문자 사용가능)												check_AllString( objEle, nMin, nMax, bRequired, cMsgTitle )
(체크)(이메일)															check_Email( objEle,  bRequired, cMsgTitle, bDaumMaill )
(체크)(주민등록번호)													check_Jumin( objEle1,  objEle2, bRequired, cMsgTitle )
(체크)(사업자번호)														check_Saupja( objEle1,  objEle2, objEle3, bRequired, cMsgTitle )
(체크)(법인번호)														check_CorpNumber( objEle1,  objEle2, bRequired, cMsgTitle )
(체크)(전화번호)														check_Phone( objEle1,  objEle2, objEle3, bRequired, cPhoneType, cMsgTitle )
(체크)(날짜)															check_Date( objEle, bRequired, cMsgTitle )
(체크)(파일 확장자 체크)												check_FileExt(objEle, usableFileExts, cMsgTitle)

(함수)만 나이 반환														getKorean_Age( yy, mm, gender_num )
(함수)셀렉트박스의  선택된 값 구하기									getSelected_Value( objEle )
(함수)멀티 셀렉트박스의  선택된 항목 수 구하기							getMultiSelected_Count( strObjName)
(함수)멀티 셀렉트박스의  선택된 항목들의 Value 목록 구하기				getMultiSelected_Value( strObjName)
(함수)체크된 항목수 구하기												getChecked_Count( objEle )
(함수)체크된 값 구하기													getChecked_Value( objEle )
(함수)지정한 달의 일 수 구하기											getMonthOfDays( intYear, intMonth )
(함수)두 날짜의 일 수 차이 구하기										getDateDiff( form.sDate.value, form.eDate.value );
(함수)이전달, 다음달을 구함												getAddMonth_PrevNext( move_type, yyyy, mm )
(함수)금지단어 필터링 치환   											getWord_Filter( strValue )
(함수)파일 확장자 알아내기   											getFileExtension( filePath )
(함수)이미지 보기				   										showImg( img )
(함수) 3자리마다 ,를 찍어주는 함수 										getDecimalFormat( value )
(함수)타겟을 지정해서 Input Element 1개를 동적 생성한다.				appendInputElement(type, name, value, parentObj)
(함수)타겟을 지정해서 모든 Element를 제거한다.							removeAllElement(type, name, value, parentObj)
(함수)플래쉬 파일을 페이지에 삽일할때 사용한다.							flashWrite(파일경로, 가로, 세로[, 변수][,배경색][,윈도우모드])
(함수)아이프레임을 리사이징한다.										iframeResize(ifrObj)
*/

//** ---------------------------------------------------------------------------
// 목    적 : 공통으로 쓰는 변수 정의
// 생 성 일 : 
// 수    정 :
//** ---------------------------------------------------------------------------	

var g_s_SQL_Injection_Check;

g_s_SQL_Injection_Check		= false;							//sql injection 체크 변수

var g_s_Path_Url;												//공통 도메인 변수

g_s_Path_Url				= "http://localhost:8087/";

var g_s_MNGR_SEQ_N;												//관리자 일련번호 - 상단수정 위해서
var g_s_MNGR_SEQ_N_CMN;											//관리자 일련번호
var g_s_MNGR_Edit_C;											//관리자수정 구분 변수

var g_s_PRDT_SEQ_N_CMN;											//제품 일련번호 저장 변수

var g_s_CUST_SEQ_N_CMN;											//회원 일련번호

var g_s_SearchAddr_Check;										//우편번호/주소 검색 구분 변수

var g_s_Client_Width;											//document width 값
var g_s_Client_Height;											//document height 값
var g_s_Scroll_Width;											//document scroll width 값
var g_s_Scroll_Height;											//document scroll height 값

var g_s_PageSize												//페이지당 보여줄 목록 개수

g_s_PageSize				= 10;

var nMax_Repeat;												//반복문자의 최대 허용값

nMax_Repeat					= 3;

var arr_FilterList;												//금지단어 필터링 리스트

arr_FilterList				= new Array("--", "create", "CREATE", "drop", "DROP", "exec", "EXEC", "iframe", "IFRAME", "object", "OBJECT", "script", "SCRIPT");

var arrId_FilterList;											// 아이디 필터링 리스트

arrId_FilterList			= new Array("admin", "master", "manager", "test", "tester");

var layerRef				= "null";
var layerStyleRef			= "null";
var styleSwitch				= "null";

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//Function Start (체크)
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : objEle			(컨트롤명)
//			: usableFileExts	(사용가능한 확장자들)
//			: cMsgTitle			(유효하지 않을 시 나타낼 메세지)
//			: isEmptyCheck		(입력값 체크)
// 결    과	: Boolean
// 목    적 : 유효성 체크 (파일 확장자 체크)
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : if ( uf_check_FileExt( form.fileName, 'jpg, jpeg, gif, png', '이미지 파일을 첨부하여 주십시요.', true ) == false )	return;
// 주의사항 : 
//** ---------------------------------------------------------------------------
function uf_check_FileExt(objEle,usableFileExts,cMsgTitle,isEmptyCheck)
{
	var fileExt;
	var isValidFileExt;
	
	fileExt					= "";
	isValidFileExt			= false;
	
	if( uf_isEmpty(objEle.value) )
	{
		if ( isEmptyCheck )
		{
			alert(cMsgTitle);
			objEle.focus();
			return false;
		}
		else
		{
			return true;
		}
	}
	
	var filePointer;

	filePointer				= objEle.value.lastIndexOf('.');

	fileExt					= objEle.value.substring(filePointer + 1, objEle.value.length);
	fileExt					= fileExt.toLowerCase();
	
	if( uf_isEmpty(usableFileExts) )
	{
		alert("사용가능한 파일 확장자를 설정하여 주십시요.");
		return false;
	}
	else
	{
		var arrUsableFileExt;
		
		arrUsableFileExt	= usableFileExts.split(",");
		
		for( var i = 0; i < arrUsableFileExt.length; i++)
		{
			if( fileExt == uf_getTrim(arrUsableFileExt[i], 'B'))
			{
				isValidFileExt	= true;

				break;
			}
		}
		
		if( !isValidFileExt)
		{
			alert("유효하지 않은 파일입니다. \n\n[" + usableFileExts + "]로 다시 첨부하여 주십시요.");
			objEle.focus();

			return false;
		}
	}
	
	return isValidFileExt;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : objEle		(컨트롤명)
//			: bRequired		(필수체크 여부)
//			: cMsgTitle		(alert 메시지 내용)
// 결    과	: Boolean
// 목    적 : 유효성 체크 (날짜)
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : if ( uf_check_Date( form.regDate, true, '날짜' ) == false )	return;
// 주의사항 : 
//** ---------------------------------------------------------------------------
function uf_check_Date(objEle,bRequired,cMsgTitle )
{
	if ( typeof(objEle) != "object" )
	{
		return false;
	}

	var strValue;
	
	strValue			= uf_getTrim( objEle.value, "A" );
	
	if ( bRequired == false && strValue != "" )
	{
		bRequired = true;
	}

	if ( bRequired )
	{
		// 널값체크
		if ( uf_isEmpty(strValue) )
		{
			alert(cMsgTitle + "의 값을 입력하여 주십시오.");
			objEle.value	= "";
			objEle.focus();

			return false;
		}

		// 입력길이 체크
		if ( !uf_isLength(strValue, 10, 10) )
		{
			alert(cMsgTitle + "의 입력은 숫자와 하이픈을 사용하여 10자리로 입력하여 주십시오." );
			objEle.value	= "";
			objEle.focus();

			return false;
		}

		// 입력가능문자 체크
		if ( !uf_isValueType(strValue, "N-") )
		{
			alert(cMsgTitle + "의 입력값은 입력은 숫자와 하이픈만 사용 가능합니다.");
			objEle.value	= "";
			objEle.focus();

			return false;
		}

		// 날짜의 유효성 체크

		var arrDate;
		
		arrDate			= strValue.split("-");
		
		if ( !uf_isDate(arrDate[0], arrDate[1], arrDate[2] ) )
		{
			alert(cMsgTitle + "의 형식이 올바르지 않습니다." );
			objEle.value	= "";
			objEle.focus();

			return false;
		}
	}

	return true;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : objEle1		(전화번호 앞자리 컨트롤명)
//			: objEle2		(전화번호 중간자리 컨트롤명)
//			: objEle3		(전화번호 뒷자리 컨트롤명)
//			: bRequired		(필수체크 여부)
//			: cPhoneType	(P:일반전화, M:휴대폰)
//			: cMsgTitle		(alert 메시지 내용)
// 결    과	: Boolean
// 목    적 : 유효성 체크 (전화번호)
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : if ( uf_check_Phone( form.phone[0],  form.phone[1],  form.phone[2], true, 'P', '전화번호' ) == false )	return;
//			  if ( uf_check_Phone( form.hp[0],  form.hp[1],  form.hp[2], true, 'M', '휴대전화번호' ) == false )	return;
// 주의사항 : 
//** ---------------------------------------------------------------------------
function uf_check_Phone(objEle1,objEle2,objEle3,bRequired,cPhoneType,cMsgTitle)
{
	if ( typeof(objEle1) != "object" )
	{
		return false;
	}

	if ( typeof(objEle2) != "object" )
	{
		return false;
	}

	if ( typeof(objEle3) != "object" )
	{
		return false;
	}
	
	var strValue1;
	var strValue2;
	var strValue3;
	
	if (objEle1.type == "select-one")
	{
		strValue1		= uf_getSelected_Value(objEle1);
	}
	else
	{
		strValue1		= uf_getTrim( objEle1.value, "A" );
	}

	strValue2			= uf_getTrim( objEle2.value, "A" );
	strValue3			= uf_getTrim( objEle3.value, "A" );
	
	if ( objEle1.type == "select-one" )
	{
		if ( bRequired == false && (strValue2 != "" || strValue3 != "") )
		{
			bRequired = true;
		}
	}
	else
	{
		if ( bRequired == false && (strValue1 != "" || strValue2 != "" || strValue3 != "") )
		{
			bRequired = true;
		}
	}

	if ( bRequired )
	{
		// 널값체크
		if ( uf_isEmpty(strValue1) )
		{
			alert(cMsgTitle + "의 앞자리 값을 입력하여 주십시오.");
			objEle1.value	= "";
			objEle1.focus();

			return false;
		}

		// 널값체크
		if ( uf_isEmpty(strValue2) )
		{
			alert(cMsgTitle + "의 중간자리 값을 입력하여 주십시오.");
			objEle2.value	= "";
			objEle2.focus();

			return false;
		}
		
		// 널값체크
		if ( uf_isEmpty(strValue3) )
		{
			alert(cMsgTitle + "의 뒷자리 값을 입력하여 주십시오.");
			objEle3.value	= "";
			objEle3.focus();

			return false;
		}

		// 입력길이 체크
		if ( !uf_isLength(strValue1, 2, 3) )
		{
			alert(cMsgTitle + "의 앞자리는  2~3자리의 숫자로 입력하여 주십시오." );
			objEle1.value	= "";
			objEle1.focus();

			return false;
		}

		// 입력길이 체크
		if ( !uf_isLength(strValue2, 3, 4) )
		{
			alert(cMsgTitle + "의 중간자리는  3~4자리의 숫자로 입력하여 주십시오." );
			objEle2.value	= "";
			objEle2.focus();

			return false;
		}
		
		// 입력길이 체크
		if ( !uf_isLength(strValue3, 4, 4) )
		{
			alert(cMsgTitle + "의 뒷자리는  4자리의 숫자로 입력하여 주십시오." );
			objEle3.value	= "";
			objEle3.focus();

			return false;
		}

		// 입력가능문자 체크
		if ( !uf_isValueType(strValue1, "N") )
		{
			alert(cMsgTitle + "의 입력값에 숫자가 아닌 문자가 포함되어 있습니다.");
			objEle1.value	= "";
			objEle1.focus();

			return false;
		}
		
		// 입력가능문자 체크
		if ( !uf_isValueType(strValue2, "N") )
		{
			alert(cMsgTitle + "의 입력값에 숫자가 아닌 문자가 포함되어 있습니다.");
			objEle2.value	= "";
			objEle2.focus();

			return false;
		}
		
		// 입력가능문자 체크
		if ( !uf_isValueType(strValue3, "N") )
		{
			alert(cMsgTitle + "의 입력값에 숫자가 아닌 문자가 포함되어 있습니다.");
			objEle3.value	= "";
			objEle3.focus();

			return false;
		}

		// 전화번호 유효성 체크
		if ( !uf_isPhone( strValue1 + "-" + strValue2 + "-" + strValue3, cPhoneType ) )
		{
			alert(cMsgTitle + "의 형식이 올바르지 않습니다." );

			if ( objEle1.type == "select-one" )
			{
				objEle1.options[0].selected		= true;
			}
			else
			{
				objEle1.value					= "";
			}

			objEle2.value 						= "";
			objEle3.value 						= "";
			objEle1.focus();

			return false;
		}
	}

	return true;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : objEle1		(법인번호 앞자리 컨트롤명)
//			: objEle2		(법인번호 뒷자리 컨트롤명)
//			: bRequired		(필수체크 여부)
//			: cMsgTitle		(alert 메시지 내용)
// 결    과	: Boolean
// 목    적 : 유효성 체크 (법인번호)
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : if ( uf_check_CorpNumber( form.saupja[0],  form.saupja[1],  true, '법인번호' ) == false )	return;
// 주의사항 : 
//** ---------------------------------------------------------------------------
function uf_check_CorpNumber(objEle1,objEle2,bRequired,cMsgTitle)
{
	if ( typeof(objEle1) != "object" )
	{
		return false;
	}

	if ( typeof(objEle2) != "object" )
	{
		return false;
	}
	
	var strValue1;
	var strValue2;
	
	strValue1 			= uf_getTrim( objEle1.value, "A" );
	strValue2 			= uf_getTrim( objEle2.value, "A" );
	
	if ( bRequired == false && (strValue1 != "" ||strValue2 != "") )
	{
		bRequired		= true;
	}

	if ( bRequired )
	{
		// 널값체크
		if ( uf_isEmpty(strValue1) )
		{
			alert(cMsgTitle + "의 앞자리 값을 입력하여 주십시오.");
			objEle1.value	= "";
			objEle1.focus();

			return false;
		}

		// 널값체크
		if ( uf_isEmpty(strValue2) )
		{
			alert(cMsgTitle + "의 뒷자리의 값을 입력하여 주십시오.");
			objEle2.value	= "";
			objEle2.focus();

			return false;
		}

		// 입력길이 체크
		if ( !uf_isLength(strValue1, 6, 6) )
		{
			alert(cMsgTitle + "의 앞자리는  6자리 숫자입니다." );
			objEle1.value	= "";
			objEle1.focus();

			return false;
		}

		// 입력길이 체크
		if ( !uf_isLength(strValue2, 7, 7) )
		{
			alert(cMsgTitle + "의 뒷자리는  7자리 숫자입니다." );
			objEle2.value	= "";
			objEle2.focus();

			return false;
		}

		// 입력가능문자 체크
		if ( !uf_isValueType(strValue1, "N") )
		{
			alert(cMsgTitle + "의 입력값에 숫자가 아닌 문자가 포함되어 있습니다.");
			objEle1.value	= "";
			objEle1.focus();

			return false;
		}

		// 입력가능문자 체크
		if ( !uf_isValueType(strValue2, "N") )
		{
			alert(cMsgTitle + "의 입력값에 숫자가 아닌 문자가 포함되어 있습니다.");
			objEle2.value	= "";
			objEle2.focus();

			return false;
		}

		// 법인번호 유효성 체크
		if ( !uf_isCorpNumber( strValue1+strValue2 ) )
		{
			alert(cMsgTitle + "의 형식이 올바르지 않습니다." );
			objEle1.value	= "";
			objEle2.value	= "";
			objEle1.focus();

			return false;
		}
	}

	return true;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : objEle1		(사업자번호 앞자리 컨트롤명)
//			: objEle2		(사업자번호 중간자리 컨트롤명)
//			: objEle3		(사업자번호 뒷자리 컨트롤명)
//			: bRequired		(필수체크 여부)
//			: cMsgTitle		(alert 메시지 내용)
// 결    과	: Boolean
// 목    적 : 유효성 체크 (사업자번호)
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : if ( uf_check_Saupja( form.saupja[0],  form.saupja[1],  form.saupja[2], true, '사업자번호' ) == false )	return;
// 주의사항 : 
//** ---------------------------------------------------------------------------
function uf_check_Saupja(objEle1,objEle2,objEle3,bRequired,cMsgTitle)
{
	if ( typeof(objEle1) != "object" )
	{
		return false;
	}

	if ( typeof(objEle2) != "object" )
	{
		return false;
	}

	if ( typeof(objEle3) != "object" )
	{
		return false;
	}
	
	var strValue1;
	var strValue2;
	var strValue3;
	
	strValue1 			= uf_getTrim( objEle1.value, "A" );
	strValue2 			= uf_getTrim( objEle2.value, "A" );
	strValue3 			= uf_getTrim( objEle3.value, "A" );
	
	if ( bRequired == false && (strValue1 != "" || strValue2 != "" || strValue3 != "") )
	{
		bRequired = true;
	}

	if ( bRequired )
	{
		// 널값체크
		if ( uf_isEmpty(strValue1) )
		{
			alert(cMsgTitle + "의 앞자리 값을 입력하여 주십시오.");
			objEle1.value	= "";
			objEle1.focus();

			return false;
		}
		if ( uf_isEmpty(strValue2) )
		{
			alert(cMsgTitle + "의 중간자리 값을 입력하여 주십시오.");
			objEle2.value	= "";
			objEle2.focus();

			return false;
		}
		if ( uf_isEmpty(strValue3) )
		{
			alert(cMsgTitle + "의 뒷자리 값을 입력하여 주십시오.");
			objEle3.value	= "";
			objEle3.focus();

			return false;
		}

		// 입력길이 체크
		if ( !uf_isLength(strValue1, 3, 3) )
		{
			alert(cMsgTitle + "의 앞자리는  3자리 숫자입니다." );
			objEle1.value	= "";
			objEle1.focus();

			return false;
		}
		if ( !uf_isLength(strValue2, 2, 2) )
		{
			alert(cMsgTitle + "의 중간자리는  2자리 숫자입니다." );
			objEle2.value	= "";
			objEle2.focus();

			return false;
		}
		if ( !uf_isLength(strValue3, 5, 5) )
		{
			alert(cMsgTitle + "의 뒷자리는  5자리 숫자입니다." );
			objEle3.value	= "";
			objEle3.focus();

			return false;
		}

		// 입력가능문자 체크
		if ( !uf_isValueType(strValue1, "N") )
		{
			alert(cMsgTitle + "의 입력값에 숫자가 아닌 문자가 포함되어 있습니다.");
			objEle1.value	= "";
			objEle1.focus();

			return false;
		}
		if ( !uf_isValueType(strValue2, "N") )
		{
			alert(cMsgTitle + "의 입력값에 숫자가 아닌 문자가 포함되어 있습니다.");
			objEle2.value	= "";
			objEle2.focus();

			return false;
		}
		if ( !uf_isValueType(strValue3, "N") )
		{
			alert(cMsgTitle + "의 입력값에 숫자가 아닌 문자가 포함되어 있습니다.");
			objEle3.value	= "";
			objEle3.focus();

			return false;
		}

		// 사업자번호 유효성 체크
		if ( !uf_isSaupjaNumber( strValue1+strValue2+strValue3 ) )
		{
			alert(cMsgTitle + "의 형식이 올바르지 않습니다." );
			objEle1.value	= "";
			objEle2.value	= "";
			objEle3.value	= "";
			objEle1.focus();

			return false;
		}
	}

	return true;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : objEle1		(주민번호 앞자리 컨트롤명)
//			: objEle2		(주민번호 뒷자리 컨트롤명)
//			: bRequired		(필수체크 여부)
//			: cMsgTitle		(alert 메시지 내용)
// 결    과	: Boolean
// 목    적 : 유효성 체크 (주민등록번호)
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : if ( uf_check_Jumin( form.jumin[0],  form.jumin[1], true, '주민등록번호' ) == false )	return;
// 주의사항 : 
//** ---------------------------------------------------------------------------
function uf_check_Jumin(objEle1,objEle2,bRequired,cMsgTitle)
{
	if ( typeof(objEle1) != "object" )
	{
		return false;
	}

	if ( typeof(objEle2) != "object" )
	{
		return false;
	}
	
	var strValue1;
	var strValue2;
	
	strValue1 			= uf_getTrim( objEle1.value, "A" );
	strValue2 			= uf_getTrim( objEle2.value, "A" );
	
	if ( bRequired == false && (strValue1 != "" || strValue2 != "" ) )
	{
		bRequired = true;
	}

	if ( bRequired )
	{
		// 널값체크
		if ( uf_isEmpty(strValue1) )
		{
			alert(cMsgTitle + "의 앞자리 값을 입력하여 주십시오.");
			objEle1.value	= "";
			objEle1.focus();

			return false;
		}
		if ( uf_isEmpty(strValue2) )
		{
			alert(cMsgTitle + "의 뒷자리 값을 입력하여 주십시오.");
			objEle2.value	= "";			
			objEle2.focus();

			return false;
		}

		// 입력길이 체크
		if ( !uf_isLength(strValue1, 6, 6) )
		{
			alert(cMsgTitle + "의 앞자리는  6자리 숫자입니다." );
			objEle1.value	= "";
			objEle1.focus();

			return false;
		}
		if ( !uf_isLength(strValue2, 7, 7) )
		{
			alert(cMsgTitle + "의 뒷자리는  7자리 숫자입니다." );
			objEle2.value	= "";
			objEle2.focus();

			return false;
		}

		// 입력가능문자 체크
		if ( !uf_isValueType(strValue1, "N") )
		{
			alert(cMsgTitle + "의 입력값에 숫자가 아닌 문자가 포함되어 있습니다.");
			objEle1.value	= "";
			objEle1.focus();

			return false;
		}
		if ( !uf_iIsValueType(strValue2, "N") )
		{
			alert(cMsgTitle + "의 입력값에 숫자가 아닌 문자가 포함되어 있습니다.");
			objEle2.value	= "";
			objEle2.focus();

			return false;
		}

		// 주민등록번호 유효성 체크
		if ( !uf_isJuminNumber( strValue1+strValue2 ) )
		{
			alert(cMsgTitle + "의 형식이 올바르지 않습니다." );
			objEle1.value	= "";
			objEle2.value	= "";
			objEle1.focus();

			return false;
		}
	}

	return true;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : objEle		(컨트롤명)
//			: bRequired		(필수체크 여부)
//			: cMsgTitle		(alert 메시지 내용)
//			: bDaumMaill	(한메일 허용 여부)
// 결    과	: Boolean
// 목    적 : 유효성 체크 (이메일)
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : if ( uf_check_Email( form.email,  true, '이메일', true ) == false )	return;
// 주의사항 : 
//** ---------------------------------------------------------------------------
function uf_check_Email(objEle,bRequired,cMsgTitle,bDaumMaill)
{
	if ( typeof(objEle) != "object" )
	{
		return false;
	}
	
	var strValue;

	strValue			= uf_getTrim( objEle.value, "A" );

	if ( bRequired == false && strValue != "" )
	{
		bRequired = true;
	}

	if ( bRequired )
	{
		// 널값체크
		if ( uf_isEmpty(strValue) )
		{
			alert(cMsgTitle + "의 값을 입력하여 주십시오.");
			objEle.value	= "";
			objEle.focus();

			return false;
		}

		// 이메일 유효성 체크
		if ( !uf_isEmail( strValue ) )
		{
			alert(cMsgTitle + "의 형식이 올바르지 않습니다." );
			objEle.value	= "";
			objEle.focus();

			return false;
		}
		
		if ( bDaumMaill )
		{
			if ( !uf_isMail_Daum(strValue) )
			{
				alert(cMsgTitle + "의 입력값으로 다음메일(한메일)은 사용하실 수 없습니다." );
				objEle.value	= "";
				objEle.focus();

				return false;
			}
		}
	}

	return true;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : objEle		(컨트롤명)
//			: nMin			(입력 최소길이)
//			: nMax			(입력 최대길이)
//			: bRequired		(필수체크 여부)
//			: cMsgTitle		(alert 메시지 내용)
// 결    과	: Boolean
// 목    적 : 유효성 체크 (모든 문자 사용가능)
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : if ( uf_check_AllString( form.content, 4, 4000, true, '내용' ) == false )	return;
// 주의사항 : 
//** ---------------------------------------------------------------------------
function uf_check_AllString(objEle,nMin,nMax,bRequired,cMsgTitle)
{
	if ( typeof(objEle) != "object" )
	{
		return false;
	}
	
	var strValue;

	strValue 			= objEle.value;

	if ( bRequired == false && strValue != "" )
	{
		bRequired		= true;
	}

	if ( bRequired )
	{
		// 널값체크
		if ( uf_isEmpty(strValue) )
		{
			alert(cMsgTitle + "의 값을 입력하여 주십시오.");
			objEle.value	= "";
			objEle.focus();

			return false;
		}

		// 입력길이 체크
		if ( !uf_isLength(strValue, nMin, nMax) )
		{
			alert(cMsgTitle + "의 입력은  " + nMin + " ~ " + nMax + " 글자 사이로 작성하여 주십시오." );
			objEle.value	= "";
			objEle.focus();

			return false;
		}
	}

	return true;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : objEle		(컨트롤명)
//			: nMin			(입력 최소길이)
//			: nMax			(입력 최대길이)
//			: bRequired		(필수체크 여부)
//			: cValueType	(입력가능문자 형식)
//			: cMsgTitle		(alert 메시지 내용)
// 결    과	: Boolean
// 목    적 : 유효성 체크 (제한적인 문자만 사용)
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : if ( uf_check_LimitString( form.name, 4, 12, true, 'HE', '이름' ) == false )	return;
// 주의사항 : 
//** ---------------------------------------------------------------------------
function uf_check_LimitString(objEle,nMin,nMax,bRequired,cValueType,cMsgTitle)
{
	if ( typeof(objEle) != "object" )
	{
		return false;
	}

	var strValue;

	switch ( cValueType.toUpperCase() )
	{
		case "HENB"	:
		case "HB"		:	// HENB, HBEB, EB 등은 공백을 허용하므로 패스
		case "EB"		:	
			
			strValue	= objEle.value;							
			
			break;

		default			:	
			
			strValue	= uf_getTrim( objEle.value, "A" );
			
			break;
	}
	
	if ( bRequired == false && strValue != "" )
	{
		bRequired = true;
	}

	if ( bRequired )
	{
		// 널값체크
		if ( uf_isEmpty(strValue) )
		{
			alert(cMsgTitle + "의 값을 입력하여 주십시오.");
			objEle.value	= "";
			objEle.focus();

			return false;
		}

		// 입력가능문자 체크
		if ( !uf_isValueType(strValue, cValueType) )
		{
			alert(cMsgTitle + "의 입력값에 허용되지 않은 문자가 포함되어 있습니다.");
			objEle.value	= "";
			objEle.focus();

			return false;
		}

		// 입력길이 체크
		if ( !uf_isLength(strValue, nMin, nMax) )
		{
			alert(cMsgTitle + "의 입력은  " + nMin + " ~ " + nMax + " 글자 사이로 작성하여 주십시오." );
			objEle.value	= "";
			objEle.focus();

			return false;
		}
	}

	return true;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : objEle		(컨트롤명1)
//			: objEle_re		(컨트롤명2/비밀번호확인 컨트롤명)
//			: nMin			(입력 최소길이)
//			: nMax			(입력 최대길이)
//			: bRequired		(필수체크 여부)
//			: cMsgTitle		(alert 메시지 내용)
// 결    과	: Boolean
// 목    적 : 유효성 체크 (비밀번호)
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : if ( uf_check_Pwd( form.pwd[0],  form.pwd[1], 4, 12, true, '비밀번호' ) == false )	return;
// 주의사항 : 
//** ---------------------------------------------------------------------------
function uf_check_Pwd(objEle,objEle_re,nMin,nMax,bRequired,cMsgTitle)
{
	if ( typeof(objEle) != "object" )
	{
		return false;
	}

	if ( typeof(objEle_re) != "object" ) 
	{
		return false;
	}
	
	var strValue;

	strValue 			= uf_getTrim( objEle.value, "A" );

	if ( bRequired == false && strValue != "" )
	{
		bRequired		= true;
	}

	if ( bRequired )
	{
		// 널값체크
		if ( uf_isEmpty(strValue) )
		{
			alert(cMsgTitle + "의 값을 입력하여 주십시오.");
			objEle.value	= "";
			objEle.focus();

			return false;
		}

		// 입력가능문자 체크
		if ( !uf_isValueType(strValue, "PWD") )
		{
			alert(cMsgTitle + "의 입력값에 허용되지 않은 문자가 포함되어 있습니다.");
			objEle.value	= "";
			objEle.focus();

			return false;
		}
		
		// 입력길이 체크
		if ( !uf_isLength(strValue, nMin, nMax) )
		{
			alert(cMsgTitle + "의 입력은  " + nMin + " ~ " + nMax + " 글자 사이로 작성하여 주십시오." );
			objEle.value	= "";
			objEle.focus();

			return false;
		}

		// 연속문자 체크
		if ( uf_isRepeat(strValue,  nMax_Repeat) )
		{
			alert(cMsgTitle + "의 입력값은 " +   nMax_Repeat + "회 연속 반복되는 문자를 사용하실 수 없습니다." );
			objEle.value	= "";
			objEle.focus();

			return false;
		}

		// 혼합문자 체크
		if ( !uf_isMix_String(strValue, true) )		//비밀번호는 특문을 포함할 수 있지만 반드시 포함할 필요는 없다. 단지 체크를 위해 true 전달
		{
			alert(cMsgTitle + "의 입력값은 반드시 영문과 숫자를 포함한 값이어야 합니다." );
			objEle.value	= "";
			objEle.focus();

			return false;
		}

		// 동일정보 체크		
		if ( !uf_isEqual( strValue, objEle_re.value ) )
		{
			alert(cMsgTitle + "의 입력값이 " + cMsgTitle + " 확인의 입력값과 일치하지 않습니다." );
			objEle_re.value		= "";
			objEle.value		= "";
			objEle.focus();

			return false;
		}
		
		if ( uf_isWord_Filter( strValue ) )
		{
			alert("사용할 수 없는 문자열입니다.");
			return false;
		}
	}

	return true;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : objEle		(컨트롤명)
//			: nMin			(입력 최소길이)
//			: nMax			(입력 최대길이)
//			: bRequired		(필수체크 여부)
//			: cMsgTitle		(alert 메시지 내용)
// 결    과	: Boolean
// 목    적 : 유효성 체크 (아이디)
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : if ( uf_check_Id( form.id, 4, 12, true, '아이디' ) == false )	return;
// 주의사항 : 
//** ---------------------------------------------------------------------------
function uf_check_Id(objEle,nMin,nMax,bRequired,cMsgTitle)
{
	if ( typeof(objEle) != "object" )
	{
		return false;
	}
	
	var strValue;

	strValue 			= uf_getTrim( objEle.value, "A" );

	if ( bRequired == false && strValue != "" )
	{
		bRequired		= true;
	}

	if ( bRequired )
	{
		// 널값체크
		if ( uf_isEmpty(strValue) )
		{
			alert(cMsgTitle + "의 값을 입력하여 주십시오.");
			objEle.value	= "";
			objEle.focus();

			return false;
		}

		// 입력가능문자 체크
		if ( !uf_isValueType(strValue, "EN") )
		{
			alert(cMsgTitle + "의 입력값에 허용되지 않은 문자가 포함되어 있습니다.");
			objEle.value	= "";
			objEle.focus();

			return false;
		}
		
		// 입력길이 체크
		if ( !uf_isLength(strValue, nMin, nMax) )
		{
			alert(cMsgTitle + "의 입력은  " + nMin + " ~ " + nMax + " 글자 사이로 작성하여 주십시오." );
			objEle.value	= "";
			objEle.focus();

			return false;
		}

		// 금지단어 필터링 체크
		if ( uf_isWord_Filter(strValue, arrId_FilterList) )
		{
			alert(cMsgTitle + "의 입력값은 사용하실 수 없습니다.");
			objEle.value	= "";
			objEle.focus();

			return false;
		}

		// 연속문자 체크
		if ( uf_isRepeat(strValue,  nMax_Repeat) )
		{
			alert(cMsgTitle + "의 입력값은 " +   nMax_Repeat + "회 연속 반복되는 문자를 사용하실 수 없습니다." );
			objEle.value	= "";
			objEle.focus();

			return false;
		}
		
		if ( uf_isWord_Filter( strValue ) )
		{
			alert("사용할 수 없는 문자열입니다.");
			return false;
		}
	}

	return true;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : objEle			(컨트롤명)
//			: nMin				(입력 최소길이)
//			: nMax				(입력 최대길이)
//			: bRequired			(필수체크 여부)
//			: strCheckType		(문자열 체크 형식)
//			: strCheckString	(문자열 체크 형식 alert 메시지 내용)
//			: cMsgTitle			(alert 메시지 내용)
// 결    과	: Boolean
// 목    적 : 유효성 체크 (공통)
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : if ( uf_check_Common( form.pwd,  4, 12, true, 'N-', '', '비밀번호' ) == false )	return;
// 주의사항 : 
//** ---------------------------------------------------------------------------
function uf_check_Common(objEle,nMin,nMax,bRequired,strCheckType,strCheckString,cMsgTitle)
{
	if ( typeof(objEle) != "object" )
	{
		return false;
	}

	var strValue;

	strValue 			= objEle.value;

	if ( bRequired == false && strValue != "" )
	{
		bRequired		= true;
	}

	if ( bRequired )
	{
		// 널값체크
		if ( uf_isEmpty(strValue) )
		{
			alert(cMsgTitle + "의 값을 입력(선택)하여 주십시오.");
			objEle.value	= "";
			objEle.focus();

			return false;
		}

		// 입력가능문자 체크
		if ( !uf_isValueType(strValue, strCheckType) )
		{
			alert(cMsgTitle + "의 입력값은 " + strCheckString + "만 입력가능합니다.");
			objEle.value	= "";
			objEle.focus();

			return false;
		}
		
		// 입력길이 체크
		if ( !uf_isLength(strValue, nMin, nMax) )
		{
			alert(cMsgTitle + "의 입력은  " + nMin + " ~ " + nMax + " 글자 사이로 작성하여 주십시오." );
			objEle.value	= "";
			objEle.focus();

			return false;
		}

		if ( uf_isWord_Filter( strValue ) )
		{
			alert("사용할 수 없는 문자열입니다.");
			return false;
		}
	}

	return true;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : objEle			(컨트롤명)
//			: intMax			(제한글자수)
//			: bShow				(입력되는 문자열의 크기를 보여줄것인지의 여부)
//			: strShow_SizeId	(입력되는 문자열의 크기를 보여줄 Form Element)
// 결    과	: 없음
// 목    적 : 지정한 문자열만큼만 입력받기
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : <textarea name="content" onpropertychange="javascript:uf_checkByte_Length(this, 10, false, '');"></textarea>
// 			  <textarea name="content" onpropertychange="javascript:uf_checkByte_Length(this, 10, true, 'lblLength');"></textarea>
// 주의사항 : 
//** ---------------------------------------------------------------------------
function uf_checkByte_Length(objEle,intMax,bShow,strShow_SizeId)
{
	var objEle_Show;

	if ( bShow && !uf_isEmpty(strShow_SizeId) )
	{
		objEle_Show			= eval("document.getElementById('"+ strShow_SizeId +"')");
	}

    var i;
    var nTotalByte;
    var nTotalByte_Old;
    var cOneChar;
    var cTempString;

    i						= 0;
    nTotalByte     			= 0;
    nTotalByte_Old			= 0;

    while( i < objEle.value.length )
    {
        cOneChar			= objEle.value.charAt(i);
    
        if ( escape(cOneChar).length > 4 )
        {
            nTotalByte		+= 2;
        }
        else
        {
            nTotalByte++;
        }

        if ( nTotalByte > intMax )
        {
            alert("입력 가능한 범위를 넘었습니다.");
        
            cTempString		= objEle.value.substr(0,i);
            objEle.value	= cTempString;
            nTotalByte		= nTotalByte_Old;

            break;
        }

        nTotalByte_Old		= nTotalByte;

        i++;
    }

	if ( typeof(objEle_Show) == "object" )
	{
		if (objEle_Show.type == "text")
		{
			objEle_Show.value		= nTotalByte;			// text
		}
		else
		{
			objEle_Show.innerText	= nTotalByte;			// span
		}
	}
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : obj			(컨트롤명)
//			: length_limit	(제한글자수)
// 결    과	: 없음
// 목    적 : 글자수 제한.
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : onkeypress="uf_isUpdateChar(this, 400);" onblur="uf_isUpdateChar(this, 400);
// 주의사항 : 
//** ---------------------------------------------------------------------------
function uf_isUpdateChar(obj,length_limit)
{
	var length;
	
	length			= uf_getStringByte(obj.value);
	
	if (length > length_limit)
	{
		obj.value	= obj.value.replace(/\r\n$/, "");
//		obj.value	= uf_getStringCut(obj.value, "L", 1, length_limit)
		obj.value	= uf_getAssertMsglen(obj.value,length_limit )
	}
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : value				(파일컨트롤 값)
//			: isEmptyCheck		(입력값 체크)
// 결    과	: Boolean
// 목    적 : 파일 체크
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : if ( !uploadFile_Check(form.attachfile.value, true) ) 	return;
// 주의사항 : 
//** ---------------------------------------------------------------------------
function uploadFile_Check( value,isEmptyCheck )
{
	var src;

	src			= uf_getFileExtension(value);

	if (src == "")
	{
		if ( isEmptyCheck )
		{
			alert('올바른 파일을 선택하세요');
			return false;
		}
		else
		{
			return true;
		}
	}
	else if ( (src.toLowerCase() == "htm") || (src.toLowerCase() == "html") || (src.toLowerCase() == "asp") || (src.toLowerCase() == "jsp") || (src.toLowerCase() == "php") || (src.toLowerCase() == "php3") || (src.toLowerCase() == "exe") || (src.toLowerCase() == "com") || (src.toLowerCase() == "bat") || (src.toLowerCase() == "js") )
	{
		alert('htm, html, asp, jsp, php, php3, exe, com, bat, js 파일은 업로드 하실 수 없습니다.');
		return false;
	}

	return true;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : value			(파일컨트롤 값)
// 결    과	: Boolean
// 목    적 : 이미지 파일 체크
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : if ( !uf_uploadImg_Check(form.attachfile.value) ) 	return;
// 주의사항 : 
//** ---------------------------------------------------------------------------
function uf_uploadImg_Check(value)
{
	var src;

	src			= uf_getFileExtension(value);

	if (src == "")
	{
		alert('올바른 파일을 입력하세요');
		return false;
	}
	else if ( !( (src.toLowerCase() == "jpg") || (src.toLowerCase() == "jpeg") ) )
	//else if ( !( (src.toLowerCase() == "jpg") || (src.toLowerCase() == "jpeg") || (src.toLowerCase() == "png") || (src.toLowerCase() == "gif") || (src.toLowerCase() == "bmp") ) )
	{
		alert('jpg, jpeg 파일만 지원합니다.');
		//alert('jpg, jpeg, png, gif, bmp 파일만 지원합니다.');
		return false;
	}

	return true;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : objForm				(폼 객체)
//			: strEditorId			(에디터의 id 값)
// 결    과	: Boolean
// 목    적 : 나모 엑티브 스퀘어6 입력내용 체크
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : if ( uf_isBlank_NamoEditor(form, "wec") ) alert("입력값 없음");
// 주의사항 : 
//** ---------------------------------------------------------------------------
function uf_isBlank_NamoEditor(objForm,strEditorId)
{
	if ( strEditorId == null || uf_getTrim(strEditorId,"A") == "" )
	{
		strEditorId		= "wec";		// 기본적으로 사용하는 id
	}
	
	var form;
	var objEditor;
	var bodyValue;						// 에디터내 <body>에 있는 내용만을 가져옴
	var textValue;						// 에디터내 사용자가 작성한 텍스트만을 가져옴
	var bImage;							// <body>의 내용중 사용자 삽입 이미지가 있는지를 판별 (TextValue로 체크시 이미지는 체크되지 않음)
	var bText;							// 전체공백을 제거하여 값을 입력했는지를 판별 (에디터 자체에 기본으로 하나의 공백이 들어가기때문)
	var bReturn;

	form 				= objForm;
	objEditor			= eval('form.' + strEditorId);
	bodyValue			= objEditor.BodyValue;
	textValue			= objEditor.TextValue;
	
	if (bodyValue.indexOf('<img') == -1)
	{
		bImage			= true;
	}
	else
	{
		bImage			= false;
	}

	if (uf_getTrim(textValue, "A") == "")
	{
		bText 			= true;
	}
	else
	{
		bText 			= false;
	}

	if (bText && bImage)
	{
		bReturn			= true;
	}
	else
	{
		bReturn			= false;
	}

	return bReturn;
}	

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : obj				(컨트롤명)
//			: strMsg			(메시지)
// 결    과	: Boolean
// 목    적 : 빈값여부 체크 후 포커스
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : if( uf_isCheck(form.id, "아이디를 입력해주세요.") == false ) return;
// 주의사항 : 
//** ---------------------------------------------------------------------------
function uf_isCheck(obj,strMsg)
{
	if ( uf_isEmpty(obj.value) )
	{
		alert(strMsg);
		obj.focus();
		return false;
	}

	return true;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : strYear				(년)
//			: strMonth				(월)
//			: strDay				(일)
// 결    과	: Boolean
// 목    적 : 유효한 날짜인지를 체크
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : if ( uf_isDate( '2008', '13', '32' ) == false ) alert("올바른 날짜가 아님");
// 주의사항 : 
//** ---------------------------------------------------------------------------
function uf_isDate(strYear,strMonth,strDay )
{
	var intYear;		// 10진수 변환
	var intMonth;
	var intDay;
	
	intYear				= parseInt(strYear,10);		// 10진수 변환
	intMonth			= parseInt(strMonth,10);
	intDay  			= parseInt(strDay,10);
	
	var nMonthOfDays;
	
	nMonthOfDays		= uf_getMonthOfDays(intYear, intMonth);
	
	if ( intDay < 1 || intDay > nMonthOfDays )
	{
		return false;
	}

	if ( intMonth < 1 || intMonth > 12 )
	{
		return false;
	}
	
	return true;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : intYear				(년)
// 결    과	: Boolean
// 목    적 : 윤년 체크
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : if ( uf_isLeapYear( 2008 ) == true ) alert("윤년");
// 주의사항 : 
//** ---------------------------------------------------------------------------
function uf_isLeapYear(intYear)
{
	if ( intYear % 1000 != 0 && intYear % 4 == 0 )
	{
		return true;
	}

	return false;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : objEle				(라디오박스/체크박스의 컨트롤명)
// 결    과	: Boolean
// 목    적 : 체크여부 확인
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : if ( uf_isChecked( form.chkData ) == false ) alert("체크된 항목 없음");
// 주의사항 : 
//** ---------------------------------------------------------------------------
function uf_isChecked(objEle)
{
	if ( String(objEle) != "undefined" )
	{
		if ( String(objEle.length) == "undefined" )
		{
			if ( objEle.checked )
			{
				return true;
			}
		}
		else
		{
			for( var i=0; i<objEle.length; i++ )
			{
				if ( objEle[i].checked )
				{
					return true;
				}
			}
		}
	}
	
	return false;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : strValue				(문자열)
// 결    과	: Boolean
// 목    적 : 주민등록번호 체크
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : if ( uf_isJuminNumber( form.jumin.value ) == false ) alert("올바르지 않은 주민등록번호");
// 주의사항 : 
//** ---------------------------------------------------------------------------
function uf_isJuminNumber(strValue)
{
	if ( strValue.length != 13 )
	{
		return false;
	}

	if ( !uf_isValueType(strValue, "N") )
	{
		return false;
	}

	var sum;

	sum			= 0;

	for( i=0; i<8; i++ )
	{
		sum		+= strValue.substring(i, i+1)*(i+2);
	}

	for( i=8; i<12; i++ )
	{
		sum		+= strValue.substring(i, i+1)*(i-6);
	}

	sum = 11 - (sum%11);

	if ( sum >=10 )
	{
		sum		-= 10;
	}
	
	if ( (strValue.substring(12, 13) != sum) || ( (strValue.substring(6, 7) != 1) && (strValue.substring(6, 7) != 2) && (strValue.substring(6, 7) != 3) && (strValue.substring(6, 7) != 4)	) )
	{
		return false;
	}

	return true;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : strValue				(문자열)
// 결    과	: Boolean
// 목    적 : 법인번호 체크
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : if ( uf_isCorpNumber( form.corpnum.value ) == false ) alert("올바르지 않은 법인번호");
// 주의사항 : 
//** ---------------------------------------------------------------------------
function uf_isCorpNumber(strValue)
{
	if ( strValue.length != 13 )
	{
		return false;
	}

	if ( !uf_isValueType(strValue, "N") )
	{
		return false;
	}

	var sum;
	var num;
	var last;
	
	sum			= 0;
	num 		= [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
	last 		= parseInt(strValue.charAt(12));
	
	for(var i=0; i < 12; i++)
	{
		sum		+= parseInt(strValue.charAt(i)) * num[i];
	}
	
	return ((10 - sum % 10) % 10 == last) ? true : false;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : strValue				(문자열)
// 결    과	: Boolean
// 목    적 : 사업자번호 체크
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : if ( uf_isSaupjaNumber( form.saupja.value ) == false ) alert("올바르지 않은 사업자번호");
// 주의사항 : 
//** ---------------------------------------------------------------------------
function uf_isSaupjaNumber(strValue)
{
	if ( strValue.length != 10 )
	{
		return false;
	}

	if ( !uf_isValueType(strValue, "N") )
	{
		return false;
	}

	var sum;

	sum			= 0;

	sum			+= parseInt( strValue.substring(0,1) );
	sum			+= parseInt( strValue.substring(1,2) ) * 3 % 10;
	sum			+= parseInt( strValue.substring(2,3) ) * 7 % 10;
	sum			+= parseInt( strValue.substring(3,4) ) * 1 % 10;
	sum			+= parseInt( strValue.substring(4,5) ) * 3 % 10;
	sum			+= parseInt( strValue.substring(5,6) ) * 7 % 10;
	sum			+= parseInt( strValue.substring(6,7) ) * 1 % 10;
	sum			+= parseInt( strValue.substring(7,8) ) * 3 % 10;
	sum			+= Math.floor(parseInt( strValue.substring(8,9) ) * 5 / 10);
	sum			+= parseInt( strValue.substring(8,9) ) * 5 % 10;
	sum			+= parseInt( strValue.substring(9,10) );

	if ( sum % 10 != 0 )
	{
		return false;
	}

	return true;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : strValue				(문자열)
//			: strPhoneType			(전화번호 형식)
// 결    과	: Boolean
// 목    적 : 전화번호 체크
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : if ( uf_isPhone( form.phone.value, "M" ) == false ) alert("잘못된 전화번호 형식");
// 주의사항 : 
//** ---------------------------------------------------------------------------
function uf_isPhone(strValue,strPhoneType)
{
	var pattern;

	pattern			= /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/;

	if ( (strValue.length == 0) || (!pattern.test(strValue)) )
	{
		return false;
	}
	
	var groupNumber;

	groupNumber		= null;

	switch ( strPhoneType.toUpperCase() )
	{
		case "M"	: 
			
			groupNumber		= new Array("010", "011", "016", "017", "018", "019");
			
			break;

		case "P"		: 
			
			groupNumber		= new Array("02","031","032","033","041","042","043","051","052","053","054","055","061","062","063","064","070","080");
			
			break;

		case "MP"	: 
			
			groupNumber		= new Array("02","031","032","033","041","042","043","051","052","053","054","055","061","062","063","064","070","080","010", "011", "016", "017", "018", "019");
			
			break;

		default		: 
			
			return false;
			
			break;
	}

	var bFlag;
	var arrPhone;
	
	bFlag					= false;
	arrPhone				= strValue.split("-");
	
	for( var i=0; i<groupNumber.length; i++ )
	{
		if ( groupNumber[i] == arrPhone[0] )
		{
	    		bFlag		= true;

	    		break;
		}
	}

	return bFlag;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : strValue				(문자열)
// 결    과	: Boolean
// 목    적 : 한메일 사용여부 체크
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : if ( uf_isMail_Daum( form.email.value ) == false ) alert("한메일은 안돼");
// 주의사항 : 
//** ---------------------------------------------------------------------------
function uf_isMail_Daum(strValue)
{ 
	strValue	= strValue.toLowerCase();

	if ( strValue.match("@hanmail.net") || strValue.match("@daum.net") )
	{
		return false;
	}

	return true;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : strValue				(문자열)
// 결    과	: Boolean
// 목    적 : 이메일주소 체크
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : if ( uf_isEmail( form.email.value ) == false ) alert("잘못된 형식의 이메일");
// 주의사항 : 
//			  1. 아이디부분 = 영문+숫자만+언더바+하이픈 허용 / 최소 4자리 이상 최대 15자리 까지 허용 {4,15}
//** ---------------------------------------------------------------------------
function uf_isEmail(strValue)
{
	//대채가능패턴모음
	//var pattern		= /[-!#$%&'*+\/^_~{}|0-9a-zA-Z]+(\.[-!#$%&'*+\/^_~{}|0-9a-zA-Z]+)*@[-!#$%&'*+\/^_~{}|0-9a-zA-Z]+(\.[-!#$%&'*+\/^_~{}|0-9a-zA-Z]+)*/;
	//var pattern		= /^([A-Za-z0-9_-]{4,15})(@{1})([A-Za-z0-9_-]{1,15})(.{1})([A-Za-z0-9]{2,10})(.{1}[A-Za-z]{2,10})?(.{1}[A-Za-z]{2,10})?$/;
	//var pattern		= /(^[a-zA-Z0-9]+@[a-zA-Z0-9]+[a-zA-Z0-9\-]+[a-zA-Z0-9]+\.[a-zA-Z]+$)/;
	//var pattern		= /^(\w+)@(\w+)[.](\w+)[.](\w+)$/;
	//var pattern		= /^(\w+(?:\.\w+)*)@((?:\w+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	//var pattern		= /^([A-Za-z0-9]{4,15})(@{1})([A-Za-z0-9_-]{1,15})(.{1})([A-Za-z0-9]{2,4})(.{1}[A-Za-z]{2,4})?(.{1}[A-Za-z]{2,4})?$/;

	var pattern;

	var pattern			= /^([A-Za-z0-9_-]{4,15})(@{1})([A-Za-z0-9_-]{1,15})(.{1})([A-Za-z0-9]{2,10})(.{1}[A-Za-z]{2,10})?(.{1}[A-Za-z]{2,10})?$/;

	if ( (strValue.length == 0) || (!pattern.test(strValue)) )
	{
		return false;
	}

	return true;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : strValue				(문자열)
// 결    과	: Boolean
// 목    적 : 입력허용길이 체크
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : if ( uf_isLength( form.title.value, 2, 10 ) == false ) alert("입력길이 오류");
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_isLength(strValue,intMin,intMax )
{
	var nTotalByte;

	nTotalByte	= uf_getStringByte( strValue );

	if ( nTotalByte < intMin || nTotalByte > intMax )
	{
		return false;
	}

	return true;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : strValue				(문자열)
//			: nCheckCount			(반복체크할 수)
// 결    과	: Boolean
// 목    적 : 연속문자 체크
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : if ( uf_isRepeat( form.id.value, 3 ) == true ) alert("연속적임");
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_isRepeat(strValue,nCheckCount)
{
	var bResult;
	var chkRepeat; 		// 반복되는 형태 (예: aaaa)
	var chkAsc; 		// 연속된 오름차순 형태 (예: abcd, 1234)
	var chkDesc; 		// 연속된 내림차순 형태 (예: dcba, 4321)

	bResult  			= false;
	chkRepeat			= "";
	chkAsc 				= "";
	chkDesc				= "";

	for(var k=1; k<nCheckCount; k++)
	{
		chkRepeat 		+= "strValue.charAt(i) == strValue.charAt(i + " + k + ")";
		chkAsc			+= "(strValue.charCodeAt(i) + " + k + ") == strValue.charCodeAt(i + " + k + ")";
		chkDesc 		+= "(strValue.charCodeAt(i) - " + k + ") == strValue.charCodeAt(i + " + k + ")";

		if (k < nCheckCount - 1)
		{
			chkRepeat	+= " && ";
			chkAsc  	+= " && ";
			chkDesc 	+= " && ";
		}
	}

	for( var i=0; i<strValue.length-3; i++)
	{
		if ( eval(chkRepeat) || eval(chkAsc) || eval(chkDesc) )
		{
			bResult		= true;
		}
	}

	return bResult;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : strValue				(문자열)
//			: bSpecialChar			(특수문자체크여부)
// 결    과	: Boolean
// 목    적 : 혼합문자 체크
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : if ( uf_isMix_String( form.id.value ) == false ) alert("아이디는 영문과 숫자를 혼합하여 사용해야 함");
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_isMix_String(strValue,bSpecialChar)
{
	var onlyEng;
	var onlyNum;
	var onlySp;
	
	onlyEng		= uf_isValueType(strValue, "E");
	onlyNum 	= uf_isValueType(strValue, "N");
	onlySp		= uf_isValueType(strValue, "SP");
	
	if (bSpecialChar)
	{
		if ( !onlyEng && !onlyNum && !onlySp)
		{
			if ( uf_isValueType(strValue, "PWD") )
			{
				return true;
			}
		}
	}
	else
	{
		if ( !onlyEng && !onlyNum)
		{
			if ( uf_isValueType(strValue, "EN") )
			{
				return true;
			}
		}
	}

	return false;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : strValue1				(문자열1)
//			: strValue2				(문자열2)
// 결    과	: Boolean
// 목    적 : 동일정보 체크
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : if ( uf_isEqual( form.pwd[0].value, form.pwd[1].value ) == false ) alert("일치하지 않음");
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_isEqual(strValue1,strValue2)
{
	if ( strValue1 != strValue2 )
	{
		return false;
	}

	return true;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : strValue				(문자열)
// 결    과	: Boolean
// 목    적 : 빈값여부 체크
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : if ( uf_isEmpty( form.title.value ) == true ) alert("입력된 값 없음");
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_isEmpty(strValue)
{
	if ( strValue == null || strValue == "null" || uf_getTrim(strValue,"A") == "" )
	{
		return true;
	}

	return false;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : strValue				(문자열)
//			: strCheckType			(체크 타입)
// 결    과	: Boolean
// 목    적 : 입력가능한 문자인지 체크
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : if ( uf_isValueType( form.title.value ) == false ) alert("허용되지 않은 문자열 포함");
// 주의사항 :
//			  1. 이 함수는 극히 제한적으로 사용하고자 할때
//			  2. 특정 정규식을 추가하여 사용하면 좋을듯 함.
//** ---------------------------------------------------------------------------
function uf_isValueType(strValue,strCheckType)
{
	if ( strValue.length == 0 )
	{
		return false;
	}

	switch ( strCheckType.toUpperCase() )
	{
		case "H"		:			// 한글(자소허용안함)
			
			if ( strValue.search(/[^가-힣]/) != -1 )
			{
				return false;
				
			}
			
			break;

		case "E"		:			// 영문
			
			if ( strValue.search(/[^A-Za-z]/) != -1 )
			{
				return false;
			}

			break;

		case "N"		:			// 숫자
			
			if ( strValue.search(/[^0-9]/) != -1 )
			{
				return false;
			}
			
			break;

		case "HE"		:			// 한글(자소허용안함)+영문
			
			if ( strValue.search(/[^가-힣A-Za-z]/) != -1 )
			{
				return false;
			}
			
			break;

		case "HN"		:			// 한글(자소허용안함)+숫자
			
			if ( strValue.search(/[^가-힣0-9]/) != -1 )
			{
				return false;
			}
			
			break;

		case "EN"		:			// 영문+숫자
			
			if ( strValue.search(/[^A-Za-z0-9]/) != -1 )
			{
				return false;
			}
			
			break;

		case "HEN"		:			// 한글(자소허용안함)+영문+숫자
			
			if ( strValue.search(/[^가-힣A-Za-z0-9]/) != -1 )
			{
				return false;
			}
			
			break;

		case "HENB"		:			// 한글(자소허용안함)+영문+숫자+공백
			
			if ( strValue.search(/[^가-힣A-Za-z0-9 ]/) != -1 )
			{
				return false;
			}
			
			break;

		case "N-"		:			// 숫자+하이픈
			
			if ( strValue.search(/[^0-9-]/) != -1 )
			{
				return false;
			}
			
			break;

		case "N,"		:			// 숫자+콤마		
			
			if ( strValue.search(/[^0-9,]/) != -1 )
			{
				return false;
			}
			
			break;

		case "HB"		:			// 한글(자소허용안함)+공백
			
			if ( strValue.search(/[^가-힣 ]/) != -1 )
			{
				return false;
			}
			
			break;

		case "EB"		:			// 영문+공백
			
			if ( strValue.search(/[^A-Za-z ]/) != -1 )
			{
				return false;
			}
			
			break;

		case "PWD"		:			// 영문+숫자
			
			if ( strValue.search(/[^A-Za-z0-9]/) != -1 )
			{
				return false;
			}
			
			break;

		case "PWD2"		:			// 영문+숫자+특문( ~!@#$%^&*()\? )		
			
			if ( strValue.search(/[^A-Za-z0-9~!@#$%^&*()-\?]/) != -1 )
			{
				return false;
			}
			
			break;

		case "SP"		:			// 특문( ~!@#$%^&*()\? )
			
			if ( strValue.search(/[^~!@#$%^&*()-\?]/) != -1 )
			{
				return false;
			}
			
			break;

		case "EN_"		:			// 영문+숫자+_
			
			if ( strValue.search(/[^A-Za-z0-9_]/) != -1 )
			{
				return false;
			}
			
			break;

//		case "EN_/."	:			// 영문+숫자+_+/+.
//			
//			if ( strValue.search(/[^A-Za-z0-9_/.]/) != -1 )
//			{
//				return false;
//			}
//			
//			break;

		case "N."		:			// 숫자+.
			
			if ( strValue.search(/[^0-9.]/) != -1 )
			{
				return false;
			}
			
			break;

		case "N:"		:			// 숫자+:
			
			if ( strValue.search(/[^0-9:]/) != -1 )
			{
				return false;
			}
			
			break;

		case "ALL"		:			// 모든문자
			
			return true;
			
			break;

		default			:
			
			return false;
			
			break;
	}

	return true;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : 없음
// 결    과	: 없음
// 목    적 : 브라우저 체크
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : onclick="uf_isIE()"
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_isIE()
{
	return (navigator.userAgent.indexOf("MSIE") > -1) ? true : false;
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//Function End (체크)
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//Function Start (함수)
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : sVal			(문자열)
//			: cPhoneType	(P:일반전화, M:휴대폰)
//			: cMsgTitle		(alert 메시지 내용)
// 결    과	: 없음
// 목    적 : 전화번호에 구분자(-)를 넣어준다.
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : uf_setTelFormat(sVal,cPhoneType,cMsgTitle)
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_setTelFormat(sVal,cPhoneType,cMsgTitle)
{
	var strValue;

	strValue		= uf_getSelectNumber( sVal );

	if ( uf_isEmpty( strValue ) == true )
	{
//		alert(cMsgTitle + "의 값을 입력하여 주십시오.");
		return;
	}

	if ( !uf_isLength(strValue, 7, 14) )
	{
//		alert(cMsgTitle + "의 길이는 7 ~ 14 글자사이입니다." );
		return;
	}

	var sTel1;
	var sTel2;
	var sTel3;
	var sTemp;
	var nCnt;

	sTel3						= uf_getStringCut( strValue, 'MA', strValue.length-3, strValue.length );
	sTemp						= uf_getStringCut( strValue, 'L', 1, strValue.length-4 );

	if ( uf_getStringCut( sTemp, 'L', 1, 1 ) != "0" )
	{
		if ( strValue.length > 8 )
		{
			alert(cMsgTitle + "의 형식이 올바르지 않습니다." );
			return;
		}

		strValue				= "02-" + sTemp + "-" + sTel3;

		if ( !uf_isPhone( strValue, cPhoneType ) )
		{
			alert(cMsgTitle + "의 형식이 올바르지 않습니다." );
			return;
		}

		return strValue;
	}
	else
	{
		if ( sTemp.length <= 4 )
		{
			strValue			= sTemp + "-" + sTel3;

			if ( !uf_isPhone( strValue, cPhoneType ) )
			{
				alert(cMsgTitle + "의 형식이 올바르지 않습니다." );
				return;
			}

			return strValue;
		}
	}

	switch ( uf_getStringCut( sTemp, 'L', 1, 2 ) )
	{
		case "02":

			nCnt				= 2;

			break;

		case "01":

			nCnt				= 3;

			break;

		case "07":
		case "08":

			nCnt				= 3;

			break;

		default:

			switch ( uf_getStringCut( sTemp, 'L', 1, 3 ) )
			{
				case "031":
				case "032":
				case "033":
				case "041":
				case "042":
				case "043":
				case "051":
				case "053":
				case "054":
				case "055":
				case "061":
				case "062":
				case "063":
				case "064":

					nCnt		= 3;

					break;

				case "052":

					if ( uf_getStringCut( strValue, 'MA', 4, 1 ) =="3" || uf_getStringCut( strValue, 'MA', 4, 1 ) =="5" || uf_getStringCut( strValue, 'MA', 4, 1 ) =="7" )
					{
						nCnt	= 4;
					}
					else
					{
						nCnt	= 3;
					}

					break;

				default:
					
					nCnt		= 4;

					break;
			}

			break;
	}

	sTel1						= uf_getStringCut( sTemp, 'L', 1, nCnt );
	sTel2						= uf_getStringCut( sTemp, 'MA', nCnt+1, sTemp.length );

	if ( sTel2.length > 4 )
	{
		return strValue;
	}

	strValue					= sTel1 + "-" + sTel2 + "-" + sTel3;

	if ( !uf_isPhone( strValue, cPhoneType ) )
	{
		alert(cMsgTitle + "의 형식이 올바르지 않습니다." );
		return;
	}

	return strValue;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : sVal		(문자열)
// 결    과	: 
// 목    적 : 우편번호에 구분자(-)를 넣어준다.
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : uf_setPostFormat(sVal)
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_setPostFormat(sVal)
{
	var strValue;

	strValue		= uf_getSelectNumber( sVal );

	if ( uf_isEmpty( strValue ) == true )
	{
//		alert("우편번호의 값을 입력하여 주십시오.");
		return;
	}

	if ( !uf_isLength(strValue, 6, 7) )
	{
//		alert("우편번호의 길이는 6 ~ 7 글자사이입니다." );
		return;
	}

	var strPost1;
	var strPost2;

	strPost1			= uf_getStringCut( strValue, 'L', 1, 3 );
	strPost2			= uf_getStringCut( strValue, 'R', 1, 3 );

	return strPost1 + "-" + strPost2;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : sVal		(문자열)
// 결    과	: 
// 목    적 : 주민번호에 구분자(-)를 넣어준다.
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : uf_setSSNFormat(sVal)
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_setSSNFormat(sVal)
{
	var strValue;

	strValue		= uf_getSelectNumber( sVal );

	if ( uf_isEmpty( strValue ) == true )
	{
//		alert("주민번호의 값을 입력하여 주십시오.");
		return;
	}

	if ( !uf_isLength(strValue, 13, 14) )
	{
//		alert("주민번호의 길이는 13 ~ 14 글자사이입니다." );
		return;
	}

	if ( uf_isJuminNumber( strValue ) == false )
	{
		alert("주민번호가 유효하지 않습니다." );
		return;
	}

	var strSSN1;
	var strSSN2;

	strSSN1				= uf_getStringCut( strValue, 'L', 1, 6 );
	strSSN2				= uf_getStringCut( strValue, 'R', 1, 7 );

	return strSSN1 + "-" + strSSN2;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : sVal		(문자열)
// 결    과	: 
// 목    적 : 시간에 구분자(:)를 넣어준다.
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : uf_setTimeFormat(sVal)
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_setTimeFormat(sVal)
{
	var strValue;

	strValue		= uf_getSelectNumber( sVal );

	if ( uf_isEmpty( strValue ) == true )
	{
//		alert("시간의 값을 입력하여 주십시오.");
		return;
	}

	if ( !uf_isLength(strValue, 3, 8) )
	{
//		alert("시간의 길이는 3 ~ 8 글자사이입니다." );
		return;
	}

	var rVal;

	if ( strValue.length == 3 )
	{
		if ( uf_getStringCut( strValue, 'R', 1, 2 ) > 59 )
		{
			alert("시간이 유효하지 않습니다." );
			return;
		}

		rVal	= "0" + uf_getStringCut( strValue, 'L', 1, 1 ) + ":" + uf_getStringCut( strValue, 'R', 1, 2 );
	}
	else if ( strValue.length == 4 )
	{
		if ( uf_getStringCut( strValue, 'L', 1, 2 ) > 24 )
		{
			alert("시간이 유효하지 않습니다." );
			return;
		}

		if ( uf_getStringCut( strValue, 'R', 1, 2 ) > 59 )
		{
			alert("시간이 유효하지 않습니다." );
			return;
		}

		rVal	= uf_getStringCut( strValue, 'L', 1, 2 ) + ":" + uf_getStringCut( strValue, 'R', 1, 2 );
	}
	else if ( strValue.length == 5 )
	{
		if ( uf_getStringCut( strValue, 'MB', 2, 2 ) > 59 )
		{
			alert("시간이 유효하지 않습니다." );
			return;
		}
		
		if ( uf_getStringCut( strValue, 'R', 1, 2 ) > 59 )
		{
			alert("시간이 유효하지 않습니다." );
			return;
		}

		rVal	= "0" + uf_getStringCut( strValue, 'L', 1, 1 ) + ":" + uf_getStringCut( strValue, 'MB', 2, 2 ) + ":" + uf_getStringCut( strValue, 'R', 1, 2 );
	}
	else if ( strValue.length == 6 )
	{
		if ( uf_getStringCut( strValue, 'L', 1, 2 ) > 24 )
		{
			alert("시간이 유효하지 않습니다." );
			return;
		}

		if ( uf_getStringCut( strValue, 'MB', 3, 2 ) > 59 )
		{
			alert("시간이 유효하지 않습니다." );
			return;
		}
		
		if ( uf_getStringCut( strValue, 'R', 1, 2 ) > 59 )
		{
			alert("시간이 유효하지 않습니다." );
			return;
		}

		rVal	= uf_getStringCut( strValue, 'L', 1, 2 ) + ":" + uf_getStringCut( strValue, 'MB', 3, 2 ) + ":" + uf_getStringCut( strValue, 'R', 1, 2 );
	}

	return rVal;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : sVal		(문자열)
// 결    과	: 
// 목    적 : 날짜에 구분자(-)를 넣어준다.
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : uf_setDateFormat(sVal)
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_setDateFormat(sVal)
{
	var strValue;

	strValue		= uf_getSelectNumber( sVal );

	if ( uf_isEmpty( strValue ) == true )
	{
//		alert("날짜의 값을 입력하여 주십시오.");
		return;
	}

	if ( !uf_isLength(strValue, 8, 10) )
	{
//		alert("날짜의 입력은 8 ~ 10 글자사이입니다" );
		return;
	}

	var strYear;
	var strMonth;
	var strDay;
	var rVal;

	strYear				= uf_getStringCut( strValue, 'L', 1, 4 );
	strMonth			= uf_getStringCut( strValue, 'MB', 5, 2 );
	strDay				= uf_getStringCut( strValue, 'R', 1, 2 );

	if ( uf_isDate( strYear, strMonth, strDay ) == false )
	{
		alert("날짜가 유효하지 않습니다." );
		return;
	}

	rVal				= strYear + "-" + strMonth + "-" + strDay;

	return rVal;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : 1. sID			: CheckBox/RadioBox/ComboBox id, name
//			  2. sWIDTH			: CheckBox/RadioBox/ComboBox width
//			  3. sHEIGHT		: CheckBox/RadioBox/ComboBox height
//			  4. sSELECTED_1	: 등록시 선택되어야 할 값 (순서 0부터 시작 / 값|값| 형식)
//			  5. sSELECTED_2	: 수정시 선택되어야 할 값 (값|값| 형식)
//			  6. sNUM			: CheckBox/RadioBox 한줄에 보여줄 개수
//			  7. sTYPE			: CheckBox/RadioBox/ComboBox 구분 값 (checkbox / radio / combobox)
//			  8. sPARENT_CD		: 공통코드 테이블에서 Data를 불러올때의 상위코드 값
//			  9. sETC1_CD		: 공통코드 테이블에서 Data를 불러올때의 기타1코드 값
//			  10. sETC2_CD		: 공통코드 테이블에서 Data를 불러올때의 기타2코드 값
//			  11. sVALUE		: CheckBox/RadioBox/ComboBox 수동으로 만들경우 값
//			  12. sONCLICK		: Y이면 OnClick이벤트 핸들러를 만들고 그렇지 않으면 이벤트 핸들러를 만들지 않는다.
//			  13. sONCHANGE		: Y이면 OnChange이벤트 핸들러를 만들고 그렇지 않으면 이벤트 핸들러를 만들지 않는다.
//			  14. sDISABLED		: Y이면 컨트롤을 disalbled 시킨다
// 결    과	: 
// 목    적 : 1. CheckBox/RadioBox/ComboBox 만드는 함수
//			  2. OnClick이벤트에서 sID + _Click라는 형태의 이벤트 핸들러를 연결시킨다.
//			  3. OnChange이벤트에서 sID + _Change라는 형태의 이벤트 핸들러를 연결시킨다.
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : sTemp = uf_SetCheckRadioCombo_User("cbxVocTypeDetail", "150", "19", "0", "0", "5", "checkbox" "CO003", "", "", "", "N", "N", "N")
// 주의사항 :
//** ---------------------------------------------------------------------------  
function uf_SetCheckRadioCombo_User(sID, sWIDTH, sHEIGHT, sSELECTED_1, sSELECTED_2, sNUM, sTYPE, sPARENT_CD, sETC1_CD, sETC2_CD, sVALUE, sONCLICK, sONCHANGE, sDISABLED) 
{
	uf_showwait();

	var s_Temp_sSELECTED_1;
	var s_Temp_sSELECTED_2;

	s_Temp_sSELECTED_1					= sSELECTED_1.split("|");
	s_Temp_sSELECTED_2					= sSELECTED_2.split("|");

	var s_Temp_sVALUE;
	var s_Temp_CD;						//코드
	var s_Temp_CD_NM;					//코드명

	s_Temp_sVALUE						= sVALUE.split("|");
	s_Temp_CD							= "";
	s_Temp_CD_NM						= "";

	for (var x = 0; x < (s_Temp_sVALUE.length/2)-1; x++)
	{	
		s_Temp_CD						= s_Temp_CD	+ s_Temp_sVALUE[x*2] + "|";
		s_Temp_CD_NM					= s_Temp_CD_NM + s_Temp_sVALUE[x*2+1] + "|";
	}

	var s_CD;							//코드 배열
	var s_CD_NM;						//코드명 배열
	var i_CD_COUNT;						//코드 개수

	s_CD								= s_Temp_CD.split("|");
	s_CD_NM								= s_Temp_CD_NM.split("|");
	i_CD_COUNT							= s_CD.length;

	var sTemp_DISABLED;

	sTemp_DISABLED						= "";

	if ( sDISABLED == "Y" )
	{
		sTemp_DISABLED					= " ReadOnly Disabled ";
	}

	var i;
	var j;
	var k;

	i									= 0;
	j									= 0;
	k									= 0;

	var strData;

	strData								= "";

	if ( sTYPE == "combobox" )
	{
		if ( sONCHANGE == "Y")
		{
			strData						= strData + "<select id=" + sID + " name=" + sID + " class='sBox' style='width:" + sWIDTH + "px;height:" + sHEIGHT + "px;' OnChange='javascript:" + sID + "_Change();' " + sTemp_DISABLED + ">";
		}
		else
		{
			strData						= strData + "<select id=" + sID + " name=" + sID + " class='sBox' style='width:" + sWIDTH + "px;height:" + sHEIGHT + "px;' " + sTemp_DISABLED + ">";
		}

		if ( sSELECTED_1 == "-1")
		{
			strData						= strData + "<option value='' selected></option>";
		}
		else if ( sSELECTED_1 == "-2" )
		{
			strData						= strData + "<option value='' selected>전체</option>";
		}
		else if ( sSELECTED_1 == "-3" )
		{
			strData						= strData + "<option value='' selected>선택</option>";
		}
		else if ( sSELECTED_1 == "-4" )
		{
			strData						= strData + "<option value='' selected>없음</option>";
		}

		for (var x = 0; x < i_CD_COUNT-1; x++)
		{
			if ( s_CD[x] == sSELECTED_2 )
			{
				strData					= strData + "<option value='" + s_CD[x] + "' selected>" + s_CD_NM[x] + "</option>";
			}
			else
			{
				strData					= strData + "<option value='" + s_CD[x] + "'>" + s_CD_NM[x] + "</option>";
			}
		}

		strData							= strData + "</select>";
	}
	else
	{
		strData							= strData + "<table width='" + (parseInt(sWIDTH)*parseInt(sNUM)) + "' align='left' valign='middle' border='0' cellspacing='0' cellpadding='0'>";
		strData							= strData + "<tr>";

		for (var x = 0; x < i_CD_COUNT-1; x++)
		{
			if ( i == parseInt(sNUM) )
			{
				i						= 0;

				strData					= strData + "</tr>";
				strData					= strData + "<tr>";
				strData					= strData + "<td height='5'></td>";
				strData					= strData + "</tr>";
				strData					= strData + "<tr>";
			}
			
			strData						= strData + "<td width='" + sWIDTH + "' height='100%' align='left' valign='top'>";

			strData 					= strData + "<table width='100%' height='100%' align='center' valign='middle' border='0' cellpadding='0' cellspacing='0'>";
			strData 					= strData + "<tr>";
			strData 					= strData + "<td height='100%' align='left' valign='top'>";

			strData 					= strData + "<table width='100%' height='100%' align='center' valign='middle' border='0' cellpadding='0' cellspacing='0'>";
			strData 					= strData + "<tr>";
			strData 					= strData + "<td height='100%' align='left' valign='top'>";

			strData 					= strData + "<table width='" + (parseInt(sWIDTH)-1) + "' height='100%' border='0' cellspacing='0' cellpadding='0'>";
			strData 					= strData + "<tr>";
			strData 					= strData + "<td height='" + sHEIGHT + "'><input type='" + sTYPE + "' name='" + sID + "' id='" + sID + "' ";

			strData 					= strData + " value='" + s_CD[x] + "' ";
			
			for (var y = 0; y < s_Temp_sSELECTED_1.length-1; y++)
			{	
				if ( s_Temp_sSELECTED_1[y] == "-1" )
				{
				}
				else
				{
					if ( x == parseInt(s_Temp_sSELECTED_1[y]) )
					{
						strData			= strData + " checked ";
					}
				}
			}
			
			for (var y = 0; y < s_Temp_sSELECTED_2.length-1; y++)
			{	
				if ( s_CD[x] == s_Temp_sSELECTED_2[y] )
				{
					strData				= strData + " checked ";
				}
			}
			
			if ( sONCLICK == "Y" )
			{
				strData					= strData + " OnClick=javascript:" + sID + "_Click('" + s_CD[x] + "'); ";
			}

			strData 					= strData + " " + sTemp_DISABLED + ">" + s_CD_NM[x] + "</td>";

			strData 					= strData + "</tr>";
			strData 					= strData + "</table>";

			strData 					= strData + "</td>";
			strData 					= strData + "</tr>";
			strData 					= strData + "<tr>";
			strData 					= strData + "<td height='100%'></td>";
			strData 					= strData + "</tr>";
			strData 					= strData + "</table>";

			strData 					= strData + "</td>";

			if (i == parseInt(sNUM)-1 )
			{
				strData					= strData + "<td width='1'></td>";
			}
			else
			{
				strData					= strData + "<td width='1'></td>";
			}

			strData						= strData + "</tr>";
			strData						= strData + "</table>";

			strData						= strData + "</td>";

			i							= i + 1;
		}

//		빈여백 작업

		i								= i - 1;

		if ( i < parseInt(sNUM)-1 )
		{
			i							= (parseInt(sNUM)-1) - i;
		}
		else
		{
			i							= 0;
		}

		if (i > 0)
		{
			for (j = 1; j < i; j++)
			{	
				strData					= strData + "<td width='" + sWIDTH + "' height='100%' align='center' valign='top'>";

				strData					= strData + "<table width='100%' height='100%' border='0' cellpadding='0' cellspacing='0'>";
				strData					= strData + "<tr>";
				strData					= strData + "<td height='100%' align='center' valign='top'>";

				strData					= strData + "<table width='100%' height='100%' align='center' border='0' cellpadding='0' cellspacing='0'>";
				strData					= strData + "<tr>";
				strData					= strData + "<td height='100%'></td>";
				strData					= strData + "</tr>";
				strData					= strData + "<tr>";
				strData					= strData + "<td height='1'></td>";
				strData					= strData + "</tr>";
				strData					= strData + "</table>";
					
				strData					= strData + "</td>";

				if ( j == i )
				{
					strData				= strData + "<td width='1'></td>";
				}
				else
				{
					strData				= strData + "<td width='1'></td>";
				}

				strData					= strData + "</tr>";
				strData					= strData + "</table>";

				strData					= strData + "</td>";

			}
		}

//		빈여백 작업

		strData							= strData + "</tr>";
		strData							= strData + "</table>";
	}

	var objEle;

	objEle								= eval("document.getElementById('DIV_"+ sID +"')");

	objEle.innerHTML					= strData;

	uf_removewait();
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : 1. sID			: CheckBox/RadioBox/ComboBox id, name
//			  2. sWIDTH			: CheckBox/RadioBox/ComboBox width
//			  3. sHEIGHT		: CheckBox/RadioBox/ComboBox height
//			  4. sSELECTED_1	: 등록시 선택되어야 할 값 (순서 0부터 시작 / 값|값| 형식)
//			  5. sSELECTED_2	: 수정시 선택되어야 할 값 (값|값| 형식)
//			  6. sNUM			: CheckBox/RadioBox 한줄에 보여줄 개수
//			  7. sTYPE			: CheckBox/RadioBox/ComboBox 구분 값 (checkbox / radio / combobox)
//			  8. sPARENT_CD		: 공통코드 테이블에서 Data를 불러올때의 상위코드 값
//			  9. sETC1_CD		: 공통코드 테이블에서 Data를 불러올때의 기타1코드 값
//			  10. sETC2_CD		: 공통코드 테이블에서 Data를 불러올때의 기타2코드 값
//			  11. sVALUE		: CheckBox/RadioBox/ComboBox 수동으로 만들경우 값
//			  12. sONCLICK		: Y이면 OnClick이벤트 핸들러를 만들고 그렇지 않으면 이벤트 핸들러를 만들지 않는다.
//			  13. sONCHANGE		: Y이면 OnChange이벤트 핸들러를 만들고 그렇지 않으면 이벤트 핸들러를 만들지 않는다.
//			  14. sDISABLED		: Y이면 컨트롤을 disalbled 시킨다
//			  15. sIFRAME		: ifrma 컨트롤명
// 결    과	: 
// 목    적 : 1. CheckBox/RadioBox/ComboBox 만드는 함수
//			  2. OnClick이벤트에서 sID + _Click라는 형태의 이벤트 핸들러를 연결시킨다.
//			  3. OnChange이벤트에서 sID + _Change라는 형태의 이벤트 핸들러를 연결시킨다.
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : sTemp = uf_SetCheckRadioCombo_System("cbxVocTypeDetail", "150", "19", "0", "0", "5", "checkbox" "CO003", "", "", "", "N", "N", "N","")
// 주의사항 :
//** ---------------------------------------------------------------------------  
function uf_SetCheckRadioCombo_System(sID, sWIDTH, sHEIGHT, sSELECTED_1, sSELECTED_2, sNUM, sTYPE, sPARENT_CD, sETC1_CD, sETC2_CD, sVALUE, sONCLICK, sONCHANGE, sDISABLED,sIFRAME) 
{
//	uf_showwait();

	document.getElementById("sID").value			= sID;
	document.getElementById("sWIDTH").value			= sWIDTH;
	document.getElementById("sHEIGHT").value		= sHEIGHT;
	document.getElementById("sSELECTED_1").value	= sSELECTED_1;
	document.getElementById("sSELECTED_2").value	= sSELECTED_2;
	document.getElementById("sNUM").value			= sNUM;
	document.getElementById("sTYPE").value			= sTYPE;
	document.getElementById("sPARENT_CD").value		= sPARENT_CD;
	document.getElementById("sETC1_CD").value		= sETC1_CD;
	document.getElementById("sETC2_CD").value		= sETC2_CD;
	document.getElementById("sVALUE").value			= sVALUE;
	document.getElementById("sONCLICK").value		= sONCLICK;
	document.getElementById("sONCHANGE").value		= sONCHANGE;
	document.getElementById("sDISABLED").value		= sDISABLED;

	document.getElementById("form_code").method		= "post";
	document.getElementById("form_code").action		= "/jsp/manager/common_code_select.action";
	document.getElementById("form_code").target		= sIFRAME;
	document.getElementById("form_code").submit();
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : 1. sID			: CheckBox/RadioBox/ComboBox id, name
//			  2. sWIDTH			: CheckBox/RadioBox/ComboBox width
//			  3. sHEIGHT		: CheckBox/RadioBox/ComboBox height
//			  4. sSELECTED_1	: 등록시 선택되어야 할 값 (순서 0부터 시작 / 값|값| 형식)
//			  5. sSELECTED_2	: 수정시 선택되어야 할 값 (값|값| 형식)
//			  6. sNUM			: CheckBox/RadioBox 한줄에 보여줄 개수
//			  7. sTYPE			: CheckBox/RadioBox/ComboBox 구분 값 (checkbox / radio / combobox)
//			  8. sPARENT_CD		: 공통코드 테이블에서 Data를 불러올때의 상위코드 값
//			  9. sVALUE			: CheckBox/RadioBox/ComboBox 수동으로 만들경우 값
//			  10. sONCLICK		: Y이면 OnClick이벤트 핸들러를 만들고 그렇지 않으면 이벤트 핸들러를 만들지 않는다.
//			  11. sONCHANGE		: Y이면 OnChange이벤트 핸들러를 만들고 그렇지 않으면 이벤트 핸들러를 만들지 않는다.
//			  12. sDISABLED		: Y이면 컨트롤을 disalbled 시킨다
//			  13. sIFRAME		: ifrma 컨트롤명
// 결    과	: 
// 목    적 : 1. CheckBox/RadioBox/ComboBox 만드는 함수
//			  2. OnClick이벤트에서 sID + _Click라는 형태의 이벤트 핸들러를 연결시킨다.
//			  3. OnChange이벤트에서 sID + _Change라는 형태의 이벤트 핸들러를 연결시킨다.
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : sTemp = uf_SetCheckRadioCombo_Mngr_Org("cbxVocTypeDetail", "150", "19", "0", "0", "5", "checkbox" "CO003", "", "N", "N", "N","")
// 주의사항 :
//** ---------------------------------------------------------------------------  
function uf_SetCheckRadioCombo_Mngr_Org(sID, sWIDTH, sHEIGHT, sSELECTED_1, sSELECTED_2, sNUM, sTYPE, sPARENT_CD, sVALUE, sONCLICK, sONCHANGE, sDISABLED,sIFRAME) 
{
//	uf_showwait();

	document.getElementById("sID").value			= sID;
	document.getElementById("sWIDTH").value			= sWIDTH;
	document.getElementById("sHEIGHT").value		= sHEIGHT;
	document.getElementById("sSELECTED_1").value	= sSELECTED_1;
	document.getElementById("sSELECTED_2").value	= sSELECTED_2;
	document.getElementById("sNUM").value			= sNUM;
	document.getElementById("sTYPE").value			= sTYPE;
	document.getElementById("sPARENT_CD").value		= sPARENT_CD;
	document.getElementById("sVALUE").value			= sVALUE;
	document.getElementById("sONCLICK").value		= sONCLICK;
	document.getElementById("sONCHANGE").value		= sONCHANGE;
	document.getElementById("sDISABLED").value		= sDISABLED;

	document.getElementById("form_code").method		= "post";
	document.getElementById("form_code").action		= "/jsp/manager/common_mngr_org_select.action";
	document.getElementById("form_code").target		= sIFRAME;
	document.getElementById("form_code").submit();
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : objEle		(컨트롤명/문자열)
//			: cMsgTitle		(alert 메시지 내용)
// 결    과	: 없음
// 목    적 : 시간에 구분자(:)를 넣어준다.
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : uf_getTimeFormat(objEle,cMsgTitle)
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_getTimeFormat(objEle,cMsgTitle)
{
	var objEle_Show;

	if ( !uf_isEmpty(objEle) )
	{
		objEle_Show	= eval("document.getElementById('"+ objEle +"')");
	}
	else
	{
		return;
	}

	var strValue;

	strValue		= uf_getSelectNumber( objEle_Show.value );

	if ( uf_isEmpty( strValue ) == true )
	{
//		alert(cMsgTitle + "의 값을 입력하여 주십시오.");
		return;
	}

	if ( !uf_isLength(strValue, 3, 8) )
	{
		alert(cMsgTitle + "의 입력은 \n\n3 ~ 8 글자 사이로 작성하여 주십시오." );
		objEle_Show.value	= "";
		return;
	}

	if ( strValue.length == 3 )
	{
		if ( uf_getStringCut( strValue, 'R', 1, 2 ) > 59 )
		{
			alert(cMsgTitle + "가 유효하지 않습니다." );
			objEle_Show.value	= "";
			return;
		}

		objEle_Show.value	= "0" + uf_getStringCut( strValue, 'L', 1, 1 ) + ":" + uf_getStringCut( strValue, 'R', 1, 2 );
	}
	else if ( strValue.length == 4 )
	{
		if ( uf_getStringCut( strValue, 'L', 1, 2 ) > 24 )
		{
			alert(cMsgTitle + "가 유효하지 않습니다." );
			objEle_Show.value	= "";
			return;
		}

		if ( uf_getStringCut( strValue, 'R', 1, 2 ) > 59 )
		{
			alert(cMsgTitle + "가 유효하지 않습니다." );
			objEle_Show.value	= "";
			return;
		}

		objEle_Show.value	= uf_getStringCut( strValue, 'L', 1, 2 ) + ":" + uf_getStringCut( strValue, 'R', 1, 2 );
	}
	else if ( strValue.length == 5 )
	{
		if ( uf_getStringCut( strValue, 'MB', 2, 2 ) > 59 )
		{
			alert(cMsgTitle + "가 유효하지 않습니다." );
			objEle_Show.value	= "";
			return;
		}
		
		if ( uf_getStringCut( strValue, 'R', 1, 2 ) > 59 )
		{
			alert(cMsgTitle + "가 유효하지 않습니다." );
			objEle_Show.value	= "";
			return;
		}

		objEle_Show.value	= "0" + uf_getStringCut( strValue, 'L', 1, 1 ) + ":" + uf_getStringCut( strValue, 'MB', 2, 2 ) + ":" + uf_getStringCut( strValue, 'R', 1, 2 );
	}
	else if ( strValue.length == 6 )
	{
		if ( uf_getStringCut( strValue, 'L', 1, 2 ) > 24 )
		{
			alert(cMsgTitle + "가 유효하지 않습니다." );
			objEle_Show.value	= "";
			return;
		}

		if ( uf_getStringCut( strValue, 'MB', 3, 2 ) > 59 )
		{
			alert(cMsgTitle + "가 유효하지 않습니다." );
			objEle_Show.value	= "";
			return;
		}
		
		if ( uf_getStringCut( strValue, 'R', 1, 2 ) > 59 )
		{
			alert(cMsgTitle + "가 유효하지 않습니다." );
			objEle_Show.value	= "";
			return;
		}

		objEle_Show.value	= uf_getStringCut( strValue, 'L', 1, 2 ) + ":" + uf_getStringCut( strValue, 'MB', 3, 2 ) + ":" + uf_getStringCut( strValue, 'R', 1, 2 );
	}
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : objEle		(컨트롤명/문자열)
//			: cMsgTitle		(alert 메시지 내용)
// 결    과	: 없음
// 목    적 : 주민번호에 구분자(-)를 넣어준다.
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : uf_getSSNFormat(objEle,cMsgTitle)
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_getSSNFormat(objEle,cMsgTitle)
{
	var objEle_Show;

	if ( !uf_isEmpty(objEle) )
	{
		objEle_Show	= eval("document.getElementById('"+ objEle +"')");
	}
	else
	{
		return;
	}

	var strValue;

	strValue		= uf_getSelectNumber( objEle_Show.value );

	if ( uf_isEmpty( strValue ) == true )
	{
//		alert(cMsgTitle + "의 값을 입력하여 주십시오.");
		return;
	}

	if ( !uf_isLength(strValue, 13, 14) )
	{
		alert(cMsgTitle + "의 입력은 \n\n13 ~ 14 글자 사이로 작성하여 주십시오." );
		objEle_Show.value	= "";
		return;
	}

	if ( uf_isJuminNumber( strValue ) == false )
	{
		alert(cMsgTitle + "가 유효하지 않습니다." );
		objEle_Show.value	= "";
		return;
	}

	var strSSN1;
	var strSSN2;

	strSSN1				= uf_getStringCut( strValue, 'L', 1, 6 );
	strSSN2				= uf_getStringCut( strValue, 'R', 1, 7 );

	objEle_Show.value	= strSSN1 + "-" + strSSN2;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : objEle		(컨트롤명/문자열)
//			: cMsgTitle		(alert 메시지 내용)
// 결    과	: 없음
// 목    적 : 우편번호에 구분자(-)를 넣어준다.
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : uf_getPostFormat(objEle,cMsgTitle)
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_getPostFormat(objEle,cMsgTitle)
{
	var objEle_Show;

	if ( !uf_isEmpty(objEle) )
	{
		objEle_Show	= eval("document.getElementById('"+ objEle +"')");
	}
	else
	{
		return;
	}

	var strValue;

	strValue		= uf_getSelectNumber( objEle_Show.value );

	if ( uf_isEmpty( strValue ) == true )
	{
//		alert(cMsgTitle + "의 값을 입력하여 주십시오.");
		return;
	}

	if ( !uf_isLength(strValue, 6, 7) )
	{
		alert(cMsgTitle + "의 입력은 \n\n6 ~ 7 글자 사이로 작성하여 주십시오." );
		objEle_Show.value	= "";
		return;
	}

	var strPost1;
	var strPost2;

	strPost1			= uf_getStringCut( strValue, 'L', 1, 3 );
	strPost2			= uf_getStringCut( strValue, 'R', 1, 3 );

	objEle_Show.value	= strPost1 + "-" + strPost2;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : objEle		(컨트롤명/문자열)
//			: cMsgTitle		(alert 메시지 내용)
// 결    과	: 없음
// 목    적 : 날짜에 구분자(-)를 넣어준다.
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : uf_getDateFormat(objEle,cMsgTitle)
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_getDateFormat(objEle,cMsgTitle)
{
	var objEle_Show;

	if ( !uf_isEmpty(objEle) )
	{
		objEle_Show	= eval("document.getElementById('"+ objEle +"')");
	}
	else
	{
		return;
	}

	var strValue;

	strValue		= uf_getSelectNumber( objEle_Show.value );

	if ( uf_isEmpty( strValue ) == true )
	{
//		alert(cMsgTitle + "의 값을 입력하여 주십시오.");
		return;
	}

	if ( !uf_isLength(strValue, 8, 10) )
	{
		alert(cMsgTitle + "의 입력은 \n\n8 ~ 10 글자 사이로 작성하여 주십시오." );
		objEle_Show.value	= "";
		return;
	}

	var strYear;
	var strMonth;
	var strDay;

	strYear				= uf_getStringCut( strValue, 'L', 1, 4 );
	strMonth			= uf_getStringCut( strValue, 'MB', 5, 2 );
	strDay				= uf_getStringCut( strValue, 'R', 1, 2 );

	if ( uf_isDate( strYear, strMonth, strDay ) == false )
	{
		alert(cMsgTitle + "의 날짜가 유효하지 않습니다." );
		objEle_Show.value	= "";
		return;
	}

	objEle_Show.value	= strYear + "-" + strMonth + "-" + strDay;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : objEle		(컨트롤명/문자열)
//			: cPhoneType	(P:일반전화, M:휴대폰)
//			: cMsgTitle		(alert 메시지 내용)
// 결    과	: 없음
// 목    적 : 전화번호에 구분자(-)를 넣어준다.
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : uf_getTelFormat(strValue,cPhoneType,cMsgTitle)
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_getTelFormat(objEle,cPhoneType,cMsgTitle)
{
	var objEle_Show;

	if ( !uf_isEmpty(objEle) )
	{
		objEle_Show	= eval("document.getElementById('"+ objEle +"')");
	}
	else
	{
		return;
	}

	var strValue;

	strValue		= uf_getSelectNumber( objEle_Show.value );

	if ( uf_isEmpty( strValue ) == true )
	{
//		alert(cMsgTitle + "의 값을 입력하여 주십시오.");
		return;
	}

	if ( !uf_isLength(strValue, 7, 14) )
	{
		alert(cMsgTitle + "의 입력은 \n\n7 ~ 14 글자 사이로 작성하여 주십시오." );
		objEle_Show.value	= "";
		return;
	}

	var sTel1;
	var sTel2;
	var sTel3;
	var sTemp;
	var nCnt;

	sTel3						= uf_getStringCut( strValue, 'MA', strValue.length-3, strValue.length );
	sTemp						= uf_getStringCut( strValue, 'L', 1, strValue.length-4 );

	if ( uf_getStringCut( sTemp, 'L', 1, 1 ) != "0" )
	{
		if ( strValue.length > 8 )
		{
//			objEle_Show.value	= strValue;
			
			alert(cMsgTitle + "의 형식이 올바르지 않습니다." );
			objEle_Show.value	= "";
			return;
		}

		strValue				= "02-" + sTemp + "-" + sTel3;

		if ( !uf_isPhone( strValue, cPhoneType ) )
		{
			alert(cMsgTitle + "의 형식이 올바르지 않습니다." );
			objEle_Show.value	= "";
			return;
		}

		objEle_Show.value		= strValue;
		
		return;
	}
	else
	{
		if ( sTemp.length <= 4 )
		{
			strValue			= sTemp + "-" + sTel3;

			if ( !uf_isPhone( strValue, cPhoneType ) )
			{
				alert(cMsgTitle + "의 형식이 올바르지 않습니다." );
				objEle_Show.value	= "";
				return;
			}

			objEle_Show.value	= strValue;

			return;
		}
	}

	switch ( uf_getStringCut( sTemp, 'L', 1, 2 ) )
	{
		case "02":

			nCnt				= 2;

			break;

		case "01":

			nCnt				= 3;

			break;

		case "07":
		case "08":

			nCnt				= 3;

			break;

		default:

			switch ( uf_getStringCut( sTemp, 'L', 1, 3 ) )
			{
				case "031":
				case "032":
				case "033":
				case "041":
				case "042":
				case "043":
				case "051":
				case "053":
				case "054":
				case "055":
				case "061":
				case "062":
				case "063":
				case "064":

					nCnt		= 3;

					break;

				case "052":

					if ( uf_getStringCut( strValue, 'MA', 4, 1 ) =="3" || uf_getStringCut( strValue, 'MA', 4, 1 ) =="5" || uf_getStringCut( strValue, 'MA', 4, 1 ) =="7" )
					{
						nCnt	= 4;
					}
					else
					{
						nCnt	= 3;
					}

					break;

				default:
					
					nCnt		= 4;

					break;
			}

			break;
	}

	sTel1						= uf_getStringCut( sTemp, 'L', 1, nCnt );
	sTel2						= uf_getStringCut( sTemp, 'MA', nCnt+1, sTemp.length );

	if ( sTel2.length > 4 )
	{
		objEle_Show.value		= strValue;
		
		return;
	}

	strValue					= sTel1 + "-" + sTel2 + "-" + sTel3;

	if ( !uf_isPhone( strValue, cPhoneType ) )
	{
		alert(cMsgTitle + "의 형식이 올바르지 않습니다." );
		objEle_Show.value		= "";
		return;
	}

	objEle_Show.value			= strValue;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : strValue		(문자열)
// 결    과	: String
// 목    적 : 숫자만 돌려줌
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : uf_getSelectNumber(strValue)
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_getSelectNumber(strValue)
{
	var re;

	re	= /[^0-9]/gi;

	return strValue.replace(re,""); 
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : 없음
// 결    과	: 없음
// 목    적 : XML객체를 생성한다.
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : uf_getXmlHttpRequestObject()
// 주의사항 : 
//** ---------------------------------------------------------------------------
function uf_getXmlHttpRequestObject()
{
	if(window.XMLHttpRequest)
	{
		return new XMLHttpRequest();
	}
	else if(window.ActiveXObject)
	{
		return new ActiveXObject("Microsoft.XMLHTTP");
	}
	else
	{
//		alert("XMLHttpRequest 개체를 생성할 수 없습니다.");
		return null
	}
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : method		(Http 전송방식)
//			: address		(서버 주소)
//			: data			(서버에 전달할 파라미터)
//			: sync			(동기/비동기 여부)
// 결    과	: String
// 목    적 : XML객체를 이용해 페이지를 호출한다.
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : uf_sendRequest(method,address,data)
// 주의사항 : 
//** ---------------------------------------------------------------------------
function uf_sendRequest(method,address,data,sync)
{ 
	//xml 객체 생성 
	request						= uf_getXmlHttpRequestObject(); 
  
	if ( request == null )
	{
		alert("XMLHttpRequest 객체를 생성할 수 없습니다.");
	}

	//전송방식에 따라 data 및 address를 조작하자   
	if(method == 'GET')
	{
		address					= address + "?" + data; 

		data					= null; 
	}

	//open 
	request.open(method,address,sync); 
 
	//요청의 header 설정 
	request.setRequestHeader("Content-Type","application/x-www-form-urlencoded"); 

	//send 
	request.send(data);

	if (request.responseText == null || request.readyState != 4)
	{
		return "ERRORS|";
	}
	else
	{
		return request.responseText;
	}
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : ifrObj		(아이프레임 이름)
// 결    과	: 없음
// 목    적 : 아이프레임을 리사이징한다.
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : 호출하는 아이프레임에 <iframe name="ifrName" onresize="uf_iframeResize(this)" ..>
// 주의사항 : 사용하지 마시요
//** ---------------------------------------------------------------------------
function uf_iframeResize(ifrObj)
{
	try
	{	
		var oBody;
		var oFrame;
		
		oBody					= ifrObj.document.body;
		oFrame					= document.all(ifrObj);
			
		oFrame.style.height		= oBody.scrollHeight + (oBody.offsetHeight - oBody.clientHeight);
		oFrame.style.width		= oBody.scrollWidth + (oBody.offsetWidth - oBody.clientWidth);
		
		//alert(oFrame.style.height);
	}
	catch(e) // An error is raised if the IFrame domain != its container's domain
	{
		//window.status =	'Error: ' + e.number + '; ' + e.description;
	}
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : url		(경로)
//			: w			(가로)
//			: h			(세로)
//			: vars		(변수)
//			: bg		(배경색)
//			: win		(윈도우모드)
// 결    과	: 없음
// 목    적 : 플래쉬 생성 스크립트
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : uf_flashWrite(url,w,h,vars,bg,win)
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_flashWrite(url,w,h,vars,bg,win)
{
	var id;

	id			= url.split("/")[url.split("/").length-1].split(".")[0];		//id는 파일명으로 설정

	if (vars == null)
	{
		vars	= '';
	}

	if (bg == null)
	{
		bg		= '#FFFFFF';
	}

	if (win == null)
	{
		win		= 'transparent';
	}

	var flashStr;

	// 플래시 코드 정의
	flashStr	= "	<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000'";
	flashStr	+="			codebase='http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0'";
	flashStr	+="			width='" + w + "'";
	flashStr	+="			height='" + h + "'";
	//flashStr	+="			id='" + id + "'";
	flashStr	+="			align='middle'>";

	flashStr	+="		<param name='allowScriptAccess' value='always' />";
	flashStr	+="		<param name='movie' value='" + url + "' />";
	flashStr	+="		<param name='FlashVars' value='" + vars + "' />";
	flashStr	+="		<param name='wmode' value='" + win + "' />";
	flashStr	+="		<param name='menu' value='false' />";
	flashStr	+="		<param name='quality' value='high' />";
	flashStr	+="		<param name='bgcolor' value='" + bg + "' />";

	flashStr	+="		<embed src='" + url + "'";
	flashStr	+="		       flashVars='" + vars + "'";
	flashStr	+="		       wmode='" + win + "'";
	flashStr	+="		       menu='false'";
	flashStr	+="		       quality='high'";
	flashStr	+="		       bgcolor='" + bg + "'";
	flashStr	+="		       width='" + w + "'";
	flashStr	+="		       height='" + h +"'";
	flashStr	+="		       name='" + id + "'";
	flashStr	+="		       align='middle'";
	flashStr	+="		       allowScriptAccess='always'";
	flashStr	+="		       swLiveConnect='true'";
	flashStr	+="		       type='application/x-shockwave-flash'";
	flashStr	+="		       pluginspage='http://www.macromedia.com/go/getflashplayer' />";
	flashStr	+=" </object>";

	document.write(flashStr);
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : parentObj		(대상(Form))
// 결    과	: 없음
// 목    적 : 타겟을 지정해서 모든 Element를 제거한다.
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : uf_removeAllElement(parentObj)
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_removeAllElement(parentObj)
{
	var els;
	var count;

	els		= parentObj.elements;
	count	= els.length;

	for( var i=0; i<count; i++ )
	{
		parentObj.removeChild(els[0]);
	}
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : type			(input의 type(hidden, text..))
//			: name			(input의 이름)
//			: value			(input의 값)
//			: parentObj		(생성된 Element를 추가할 대상(Form))
// 결    과	: 없음
// 목    적 : 타겟을 지정해서 Input Element 1개를 동적 생성한다.
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : uf_appendInputElement(type, name, value, parentObj)
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_appendInputElement(type,name,value,parentObj)
{
	var obj;

	obj	= document.createElement("input");

	obj.setAttribute("type", type);
	obj.setAttribute("name", name);
	obj.setAttribute("value", value);
	parentObj.appendChild(obj);
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : mValue		(숫자값)
// 결    과	: String
// 목    적 : 3자리수마다 ,를 찍어주는 함수
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : uf_getDecimalFormat(숫자값);
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_getDecimalFormat(mValue)
{
	var temp_str;

	temp_str			= String(mValue);

	for(var i=0 , retValue=String(), stop=temp_str.length;i<stop; i++)
	{
		if (((i%3) == 0) && i != 0)
		{
			retValue	= temp_str.charAt((stop - i) -1) + "," + retValue;
		}
		else
		{
			retValue	= temp_str.charAt((stop - i) -1) + retValue;
		}
	}

	return retValue;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : strValue		(문자열)
// 결    과	: String
// 목    적 : 금지단어 필터링 치환
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : form.content.value = uf_getWord_Filter( form.content.value );
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_getWord_Filter(strValue)
{
	var strBadWord;
	var nBadCoun;
	
	nBadCount				= 0;    
	
	var arrBadList;			/* 금지단어 목록 */
	
	arrBadList				= new Array("바보/**님","멍청이/청님", "18/", "졸라/졸라서");
	
	for( var i=0; i < arrBadList.length; i++ )
	{
		strBadWord			= arrBadList[i];
	
		var arrWord;

		arrWord				= strBadWord.split("/");		// 금지단어,대체단어를 분리

		if ( jsEmpty(arrWord[1]) == true )
		{
			arrWord[1]		= "***";						// 대체단어가 빈값이면 임의의 값을 기록
		}
		
		while(true)
		{
			if (strValue.indexOf(arrWord[0]) != -1 )
			{
				strValue	= strValue.replace(arrWord[0], arrWord[1]);

				nBadCount++;
			}
			else
			{
				break;
			}
		}
	}

//	if ( nBadCount > 0 )
//	{
//		alert(nBadCount + "개의 불량단어 검출");
//	}

	return strValue;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : move_type	(prev:이전달, next:다음달)
//			: yyyy		(기준년도)
//			: mm		(기준월(月))
// 결    과	: String	(2008-12 의 형태)
// 목    적 : 이전달, 다음달을 구함
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : var cResult		= uf_getAddMonth_PrevNext(cMoveType, yyyy, mm);	// 이전달, 다음달을 구함
//			  var arrDate 		= cResult.split("-");
//			  alert(arrDate[0] + "\n" + arrDate[1]);
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_getAddMonth_PrevNext(move_type,yyyy,mm)
{
	var yyyy;
	var mm;

	yyyy			= parseInt(yyyy,10);	// 10진수 변환
	mm				= parseInt(mm,10);		// 10진수 변환

	var currentMM;

	currentMM		= mm - 1;				// 현재달을 구함 (실제 달력은 0~11 을 사용하므로 -1 해준다)

	var d;
	var dd ;
	
	d				= new Date(yyyy, currentMM, '01');

	if (move_type == "prev")
	{
		dd			= new Date(yyyy, d.getMonth()-1);
	}
	else
	{
		dd			= new Date(yyyy, d.getMonth()+1);
	}
	
	yyyy			= dd.getYear();
	mm				= dd.getMonth()+1;		// 결과처리된 달을 가져온다 (실제 달력은 0~11 을 사용하므로 +1 해준다)
	
	if (mm < 10)
	{
		mm			= "0" + mm;				// 월을 표현할때 2자리 형태로 
	}
	else
	{
		mm			= mm;
	}

	var cResult;
	
	cResult			= yyyy + "-" + mm;
	
	return cResult;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : cStartDate	(시작일자)
//			: cEndDate		(종료일자)
// 결    과	: Integer
// 목    적 : 두 날짜의 일 수 차이 구하기
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : var nDay = uf_getDateDiff( form.sDate.value, form.eDate.value );	// 두 날짜의 차이
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_getDateDiff(cStartDate,cEndDate)
{
	var sDate;
	var eDate;

	sDate			= cStartDate.split("-");
	eDate			= cEndDate.split("-");

	var dtSDate;
	var dtEDate;
	
	dtSDate			= new Date(sDate[0], Number(sDate[1])-1, sDate[2]);
	dtEDate			= new Date(eDate[0], Number(eDate[1])-1, eDate[2]);
	
	var nDiffDay;
	
	nDiffDay		= ( dtEDate.getTime() - dtSDate.getTime() ) / (1000*60*60*24);
	
	return nDiffDay;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : objEle	(라디오박스/체크박스의 이름)
// 결    과	: String
// 목    적 : 체크된 값 구하기
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : var cResult = uf_getChecked_Value( form.chkData );
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_getChecked_Value(objEle)
{
	var strReturn;

	strReturn						= "";

	if ( String(objEle) != "undefined" )
	{
		if ( String(objEle.length) == "undefined" )
		{
			strReturn				= objEle.value;
		}
		else
		{
			for( var i=0; i<objEle.length; i++ )
			{
				if ( objEle[i].checked )
				{
					if ( strReturn.length > 0 )
					{
						strReturn	+= ",";
					}

					strReturn		+= objEle[i].value;
				}
			}
		}
	}

	return strReturn;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : objEle	(라디오박스/체크박스의 이름)
// 결    과	: Number
// 목    적 : 체크된 항목수 구하기
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : var nResult = uf_getChecked_Count( form.chkData );
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_getChecked_Count(objEle)
{
	var nCount;

	nCount					= 0;

	if ( String(objEle) != "undefined" )
	{
		if ( String(objEle.length) == "undefined" )
		{
			if ( objEle.checked ) 
			{
				nCount		+= 1;
			}
		}
		else
		{
			for( var i=0; i<objEle.length; i++ )
			{
				if ( objEle[i].checked )
				{
					nCount	+= 1;
				}
			}
		}
	}
	
	return nCount;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : strObjName	(셀렉트박스 이름)
// 결    과	: String
// 목    적 : 멀티 셀렉트박스의  선택된 항목들의 Value 목록 구하기
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : var cSelectedItemList = uf_getMultiSelected_Value( "imgList" );
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_getMultiSelected_Value(strObjName)
{
    var strReturn;

    strReturn					= "";

	try
	{
        var objEle;

        objEle					= document.getElementById(strObjName);

		for( var i=0; i < objEle.options.length; i++ )
		{
            if ( objEle.options[i].selected )
            {
            	if ( strReturn.length > 0 )
				{
					strReturn	+= ",";
				}

            	strReturn		+= objEle.options[i].value;
            }
        }
	}
	catch(e)
	{
	}

	return strReturn;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : strObjName	(셀렉트박스 이름)
// 결    과	: Number
// 목    적 : 멀티 셀렉트박스의  선택된 항목 수 구하기
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : var nResult = uf_getMultiSelected_Count( "imgList" );
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_getMultiSelected_Count(strObjName)
{
    var nCount;

    nCount				= 0;

	try
	{
        var objEle;

        objEle			= document.getElementById(strObjName);

		for( var i=0; i < objEle.options.length; i++ )
		{
            if ( objEle.options[i].selected )
			{
				nCount	+= 1;
			}
        }
	}
	catch(e)
	{
	}

	return nCount;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : objEle	(셀렉트박스 이름)
// 결    과	: String
// 목    적 : 셀렉트박스의  선택된 값 구하기
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : var cResult = uf_getSelected_Value( form.selectData );
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_getSelected_Value(objEle)
{
	var strReturn;

	strReturn		= "";

	for( var i=0; i<objEle.length; i++ )
	{
		if ( objEle.options[i].selected )
		{
			if ( strReturn.length > 0 )
			{
				strReturn	+= ",";
			}

			strReturn		+= objEle.options[i].value;
		}
	}

	return strReturn;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : yy			(출생년도 2자리)
//			: mm			(출생월 2자리)
//			: gender_num	(주민등록번호 뒷자리의 첫번째 숫자)
// 결    과	: Number
// 목    적 : 만 나이 반환
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : var nAge = uf_getKorean_Age( form.jumin[0].value.substr(0,2), form.jumin[0].value.substr(2,2), form.jumin[1].value.substr(0,1) );
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_getKorean_Age(yy,mm,gender_num)
{
	var nowDate;
	var strYY;
	var strMM;
	var strBrith_YY;
	var nKorean_Age;

	nowDate				= new Date();
	strYY				= nowDate.getYear();
	strMM				= nowDate.getMonth()+1;

	if ( gender_num == 1 || gender_num == 2 )
	{
		strBrith_YY		='19' + String(yy);
	}
	else
	{
		strBrith_YY		='20' + String(yy);
	}
	
	if ( parseInt(mm) < parseInt(strMM) )
	{
		nKorean_Age		= strYY-parseInt(strBrith_YY);
	}
	else
	{
		nKorean_Age		= strYY-parseInt(strBrith_YY)-1;
	}

	return nKorean_Age;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : filePath		(파일전체경로)
// 결    과	: String
// 목    적 : 파일 확장자 알아내기
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : alert( uf_getFileExtension(form.attachfile.value) );
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_getFileExtension(filePath)
{
	var lastIndex;

	lastIndex		= -1;
	lastIndex		= filePath.lastIndexOf('.');

	var extension	= "";

	if ( lastIndex != -1 )
	{
		extension	= filePath.substring( lastIndex+1, filePath.len );
	} 
	else 
	{
		extension	= "";
	}
	
	return extension;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : intYear		(년)
//			: intMonth		(월)
// 결    과	: Number
// 목    적 : 지정한 달의 일 수 구하기
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : var nResult = uf_getMonthOfDays( 2008, 2);
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_getMonthOfDays(intYear,intMonth )
{
	var arrDays;
	
	arrDays			= new Array(12);
	
	arrDays[0]   	= 31;
	arrDays[1]   	= ( uf_isLeapYear(intYear) ) ? 29 : 28;
	arrDays[2]   	= 31;
	arrDays[3]   	= 30;
	arrDays[4]   	= 31;
	arrDays[5]   	= 30;
	arrDays[6]   	= 31;
	arrDays[7]   	= 31;
	arrDays[8]   	= 30;
	arrDays[9]		= 31;
	arrDays[10]		= 30;
	arrDays[11]		= 31;
	
	return arrDays[intMonth-1];
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//Function End (함수)
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//Function Start (기능)
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : e			(event)
// 결    과	: keycode
// 목    적 : KeyCode 값을 준다
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : uf_getKeyCode(e)
// 주의사항 :
//** ---------------------------------------------------------------------------  
function uf_getKeyCode(e)
{
	var result;

	if(window.event)
	{
		result	= window.event.keyCode;
	}
	else if(e)
	{
		result	= e.which;
	}

	return result;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : sName		(컨트롤명)
//			: sPath		(이미지 경로)
// 결    과	: 없음
// 목    적 : 마우스를 갖다놓았을 때 이미지를 바꾼다
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : uf_ChangeImage(sName,sPath)
// 주의사항 :
//** ---------------------------------------------------------------------------  
function uf_ChangeImage(sName,sPath)
{
	document.getElementById(sName).src		= sPath;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : sTR_ID		(TR태그 아이디)
//			: sGubun		(구분)
// 결    과	: 없음
// 목    적 : tr 태그의 색 변경 (마우스 OVER/OUT)
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : uf_TRChangeColor_M(sTR_ID,sGubun)
// 주의사항 :
//** ---------------------------------------------------------------------------  
function uf_TRChangeColor_M(sTR_ID,sGubun)
{
	if ( sGubun == "0" )
	{
		document.getElementById(sTR_ID).style.backgroundColor	= "#AAFFBA";
	}
	else
	{
		document.getElementById(sTR_ID).style.backgroundColor	= "";
	}
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : sTR_ID		(TR태그 아이디)
//			: sGubun		(구분)
// 결    과	: 없음
// 목    적 : tr 태그의 색 변경 (마우스 클릭)
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : uf_TRChangeColor_C(sTR_ID,sGubun)
// 주의사항 :
//** --------------------------------------------------------------------------- 
function uf_TRChangeColor_C(sTR_ID,sGubun)
{
	if ( sGubun == "0" )
	{
		document.getElementById(sTR_ID).style.backgroundColor	= "#AAFFBA";
	}
	else
	{
		document.getElementById(sTR_ID).style.backgroundColor	= "";
	}
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : 없음
// 결    과	: 없음
// 목    적 : 화면 목록 이동 (목록제목과 목록)
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : onScroll()
// 주의사항 :
//** ---------------------------------------------------------------------------  
function onScroll()
{
	DIV_HEADER.scrollLeft = DIV_LIST.scrollLeft;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : 없음
// 결    과	: 없음
// 목    적 : 화면 목록 이동 (목록제목과 목록)
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : onScroll_01()
// 주의사항 :
//** ---------------------------------------------------------------------------  
function onScroll_01()
{
	DIV_HEADER_01.scrollLeft = DIV_LIST_01.scrollLeft;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : 없음
// 결    과	: 없음
// 목    적 : 화면 목록 이동 (목록제목과 목록)
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : onScroll_02()
// 주의사항 :
//** ---------------------------------------------------------------------------  
function onScroll_02()
{
	DIV_HEADER_02.scrollLeft = DIV_LIST_02.scrollLeft;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : 없음
// 결    과	: 없음
// 목    적 : 화면 목록 이동 (목록제목과 목록)
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : onScroll_03()
// 주의사항 :
//** ---------------------------------------------------------------------------  
function onScroll_03()
{
	DIV_HEADER_03.scrollLeft = DIV_LIST_03.scrollLeft;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : 없음
// 결    과	: 없음
// 목    적 : 화면 목록 이동 (목록제목과 목록)
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : onScroll_04()
// 주의사항 :
//** ---------------------------------------------------------------------------  
function onScroll_04()
{
	DIV_HEADER_04.scrollLeft = DIV_LIST_04.scrollLeft;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : 없음
// 결    과	: 없음
// 목    적 : SMS보내기 화면 오픈
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : btnSMSSend_0_Click()
// 주의사항 :
//** ---------------------------------------------------------------------------  
function btnSMSSend_0_Click()
{
	top.uf_Show_Proccess_Page("DIV_INFORMATION_PAGE","109","185","1000","ifrm_INFORMATION_PAGE","600","100","/manage/include_files/common_client/sms.asp");
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : vCheck		(호출 구분)
// 목    적 : 없음
// 플 로 우 : 우편번호/주소 검색 화면 오픈
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : btnSearchAddr_0_Click(vCheck)
// 주의사항 :
//** ---------------------------------------------------------------------------  
function btnSearchAddr_0_Click(vCheck)
{
	top.g_s_SearchAddr_Check	= vCheck;

	top.uf_Show_Proccess_Page("DIV_INFORMATION_PAGE","120","200","100000","ifrm_INFORMATION_PAGE","800","100","/jsp/manager/include_files/common_jsp/post.jsp");
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : vMNGR_SEQ_N		(관리자 일련번호)
// 결    과	: 없음
// 목    적 : 관리자정보수정 화면 오픈
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : btnMNGR_Update_0_Click(vMNGR_SEQ_N)
// 주의사항 :
//** ---------------------------------------------------------------------------  
function btnMNGR_Update_0_Click(vMNGR_SEQ_N)
{
	top.g_s_MNGR_SEQ_N		= vMNGR_SEQ_N;

	top.g_s_MNGR_Update_C	= "Update";

	top.uf_Show_Proccess_Page("DIV_PROCCESS_PAGE_01","120","200","1000","ifrm_PROCCESS_PAGE_01","800","100","/jsp/manager/contents/mngr/mngr_update.jsp");
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : vMNGR_SEQ_N		(관리자 일련번호)
// 결    과	: 없음
// 목    적 : 관리자정보 화면 오픈
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : btnMNGR_INFO_0_Click(vMNGR_SEQ_N)
// 주의사항 :
//** ---------------------------------------------------------------------------  
function btnMNGR_INFO_0_Click(vMNGR_SEQ_N)
{
	top.g_s_MNGR_SEQ_N_CMN	= vMNGR_SEQ_N;

	top.uf_Show_Proccess_Page("DIV_INFORMATION_PAGE","120","200","1000","ifrm_INFORMATION_PAGE","800","100","/jsp/manager/include_files/common_jsp/mngr_info.jsp");
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : vCUST_SEQ_N		(회원 일련번호)
// 결    과	: 없음
// 목    적 : 회원정보 화면 오픈
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : btnCUST_INFO_0_Click(vCUST_SEQ_N)
// 주의사항 :
//** ---------------------------------------------------------------------------  
function btnCUST_INFO_0_Click(vCUST_SEQ_N)
{
	top.g_s_CUST_SEQ_N_CMN	= vCUST_SEQ_N;

	top.uf_Show_Proccess_Page("DIV_INFORMATION_PAGE","120","200","1000","ifrm_INFORMATION_PAGE","800","100","/jsp/manager/include_files/common_jsp/cust_info.jsp");
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : 
// 결    과	: 
// 목    적 : 페이지 타이틀 표시
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : 
// 주의사항 :
//** ---------------------------------------------------------------------------     
function btnPAGE_TITLE_0_Click()
{
	document.getElementById("DIV_PAGE_TITLE").innerHTML	= "<img src='/admin/images/body/title_ico.gif' hspace='5' align='absmiddle' />" + document.getElementById("txtPRNT_MENU_NM").value + " - " + document.getElementById("txtMENU_NM").value;
	
	uf_removewait();
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : 
// 결    과	: 
// 목    적 : 조회권한 체크
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : 
// 주의사항 :
//** ---------------------------------------------------------------------------     
function btnPAGE_NQRY_F_CD_0_Click()
{
	var s_PAGE_NQRY_F_CD_0;

	s_PAGE_NQRY_F_CD_0					= false;

	if ( top.document.getElementById("txtMNGR_GRD_CD").value != "01" )
	{
		if ( top.document.getElementById("txtMENU_NQRY_F_CD").value != "0" )
		{
			alert("조회권한이 없습니다.");
			top.window.location.href	= "/jsp/manager/contents/main/main.jsp";
			s_PAGE_NQRY_F_CD_0			= true;
		}
	}
	
	return s_PAGE_NQRY_F_CD_0;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : 
// 결    과	: 
// 목    적 : 등록권한 체크
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : 
// 주의사항 :
//** ---------------------------------------------------------------------------     
function btnPAGE_RG_F_CD_0_Click()
{
	var s_PAGE_RG_F_CD_0;

	s_PAGE_RG_F_CD_0					= false;

	if ( top.document.getElementById("txtMNGR_GRD_CD").value != "01" )
	{
		if ( top.document.getElementById("txtMENU_RG_F_CD").value != "0" )
		{
			alert("등록권한이 없습니다.");
			top.window.location.href	= window.location.href;
			s_PAGE_RG_F_CD_0			= true;
		}
	}
	
	return s_PAGE_RG_F_CD_0;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : 
// 결    과	: 
// 목    적 : 수정권한 체크
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : 
// 주의사항 :
//** ---------------------------------------------------------------------------     
function btnPAGE_MDF_F_CD_0_Click()
{
	var s_PAGE_MDF_F_CD_0;

	s_PAGE_MDF_F_CD_0					= false;

	if ( top.document.getElementById("txtMNGR_GRD_CD").value != "01" )
	{
		if ( top.document.getElementById("txtMENU_MDF_F_CD").value != "0" )
		{
			alert("수정권한이 없습니다.");
			top.window.location.href	= window.location.href;
			s_PAGE_MDF_F_CD_0			= true;
		}
	}
	
	return s_PAGE_MDF_F_CD_0;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : 
// 결    과	: 
// 목    적 : 삭제권한 체크
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : 
// 주의사항 :
//** ---------------------------------------------------------------------------     
function btnPAGE_DEL_F_CD_0_Click()
{
	var s_PAGE_DEL_F_CD_0;

	s_PAGE_DEL_F_CD_0					= false;

	if ( top.document.getElementById("txtMNGR_GRD_CD").value != "01" )
	{
		if ( top.document.getElementById("txtMENU_DEL_F_CD").value != "0" )
		{
			alert("삭제권한이 없습니다.");
			top.window.location.href	= window.location.href;
			s_PAGE_DEL_F_CD_0			= true;
		}
	}
	
	return s_PAGE_DEL_F_CD_0;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : 없음
// 결    과	: 없음
// 목    적 : 로그아웃
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : btnLogOut_0_Click()
// 주의사항 :
//** ---------------------------------------------------------------------------  
function btnLogOut_0_Click()
{
	if ( confirm("로그아웃 하시겠습니까?") )
	{
		uf_showwait();

		document.getElementById("form_logout").method		= "post";
		document.getElementById("form_logout").action		= "/jsp/manager/logout.action";
		document.getElementById("form_logout").target		= "ifmaction_logout_action";
		document.getElementById("form_logout").submit();
	}
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : 없음
// 결    과	: 없음
// 목    적 : 로그아웃
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : btnLogOut_1_Click()
// 주의사항 :
//** ---------------------------------------------------------------------------  
function btnLogOut_1_Click()
{
	if ( confirm("로그아웃 하시겠습니까?") )
	{
		window.location.href	= "/contents/member/asp/logout_action.asp";
	}
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : src		(플래쉬 경로)
// 결    과	: 없음
// 목    적 : 플래쉬에 맞는 팝업창을 띄운다.
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : onclick="uf_showFlash( src )"
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_showFlash(src)
{
	var imgObj;

	imgObj			= new Image();

	imgObj.src		= src;

	var wopt;

	wopt			= "scrollbars=no,status=no,resizable=no";
	wopt			+= ",width=" + imgObj.width;
	wopt			+= ",height=" + imgObj.height;

	var wbody;

	wbody			= "<head><title>플래쉬 보기</title>";
	wbody			+= "<script language='javascript'>";
	wbody 			+= "function finalResize(){";
	wbody 			+= "  var oBody=document.body;";
	wbody 			+= "  var oImg=document.images[0];";
	wbody 			+= "  var xdiff=oImg.width-oBody.clientWidth;";
	wbody 			+= "  var ydiff=oImg.height-oBody.clientHeight;";
	wbody 			+= "  window.resizeBy(xdiff,ydiff);";
	wbody 			+= "}";
	wbody 			+= "</"+"script>";
	wbody 			+= "</head>";
	wbody 			+= "<body onLoad='finalResize()' style='margin:0'>";
	wbody 			+= "<a href='javascript:window.close()'><embed src='" + src + "' border=0></a>";
	wbody 			+= "</body>";

	var winResult;

	winResult		= window.open("about:blank","",wopt);

	winResult.document.open("text/html", "replace");
	winResult.document.write(wbody);
	winResult.document.close();

	return;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : src		(이미지 경로)
// 결    과	: 없음
// 목    적 : 이미지에 맞는 팝업창을 띄운다.
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : onclick="uf_showPicture( src )"
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_showPicture(src)
{
	var imgObj;

	imgObj			= new Image();

	imgObj.src		= src;

	var wopt;

	wopt			= "scrollbars=no, status=no, resizable=no";
	wopt			+= ",width=" + imgObj.width;
	wopt			+= ",height=" + imgObj.height;

	var wbody;

	wbody			= "<head><title>사진/이미지 보기</title>";
	wbody			+= "<script language='javascript'>";
	wbody			+= "function finalResize(){";
	wbody			+= "  var oBody=document.body;";
	wbody			+= "  var oImg=document.images[0];";
	wbody			+= "  var xdiff=oImg.width-oBody.clientWidth;";
	wbody 			+= "  var ydiff=oImg.height-oBody.clientHeight;";
	wbody 			+= "  window.resizeBy(xdiff,ydiff);";
	wbody 			+= "}";
	wbody 			+= "</"+"script>";
	wbody 			+= "</head>";
	wbody 			+= "<body onLoad='finalResize()' style='margin:0'>";
	wbody 			+= "<a href='javascript:window.close()'><img src='" + src + "' border=0></a>";
	wbody 			+= "</body>";

	var winResult;

	winResult		= window.open("about:blank", "", wopt);

	winResult.document.open("text/html", "replace");
	winResult.document.write(wbody);
	winResult.document.close();

	return;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : cUrl		(경로)
// 결    과	: 없음
// 목    적 : 화면 이동
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : <input type="button" value="이동"	onClick="uf_goPageMoveUrl('/')">
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_goPageMoveUrl(cUrl)
{
	window.location.href	= cUrl;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : cUrl		(경로)
// 결    과	: 없음
// 목    적 : 화면 이동(새창)
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : <input type="button" value="이동"	onClick="uf_goPageOpenUrl('/')">
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_goPageOpenUrl(cUrl)
{
	window.open(cUrl, "_blank")
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : cTableName			(삭제 테이블명)
//			: cSeqName				(삭제 시퀀스명)
//			: cSeq					(삭제 시퀀스)
//			: cPath					(삭제 경로)
//			: cSave					(삭제 저장명)
//			: cOriginal				(삭제 원본명)
//			: cDelId				(화면상에 지워질 파일명 id)
// 결    과	: 없음
// 목    적 : 파일 삭제
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : uf_goFileDelete(cTableName,cSeqName,cSeq,cPath,cSave,cOriginal,cDelId)
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_goFileDelete(cTableName,cSeqName,cSeq,cPath,cSave,cOriginal,cDelId)
{
	if ( !confirm('정말 삭제하시겠습니까?') )
	{
		return;
	}

	var actionMethod;
	var actionURL;
	var actionParams;
	
	actionMethod		= "post";
	actionURL 			= "/webzine/ver3/common/jsp/commonFileDelete.jsp";
	actionParams		= "tablename="+cTableName+"&seqname="+cSeqName+"&seq="+cSeq+"&path="+cPath+"&save="+cSave+"&original="+cOriginal;
	
	var ajax;

	ajax = new Ajax.Request(
		actionURL, 
		{
			method: actionMethod, 
			parameters: actionParams, 
			onComplete: uf_goFileNameDelete(cDelId),
			onFailure: uf_goFileDeleteErr
		});
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : cDelId				(화면상에 지워질 파일명 id)
// 결    과	: 없음
// 목    적 : 화면상에서의 첨부파일 삭제
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : uf_goFileNameDelete(cDelId)
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_goFileNameDelete(cDelId)
{
	var cDelIdObj;

	//var cDelIdObj		= $(cDelId);
	cDelIdObj			= document.getElementById(cDelId);

	cDelIdObj.innerText	= "";
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : 없음
// 결    과	: 없음
// 목    적 : 첨부파일 삭제 에러시
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : uf_goFileDeleteErr()
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_goFileDeleteErr()
{
	alert("파일을 삭제하는데 실패하였습니다.");
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : path			(경로)
//			: org			(?)
//			: save			(?)
// 결    과	: 없음
// 목    적 : 파일 다운로드
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : uf_fnFileDownLoad(path, org, save)
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_fnFileDownLoad(path,org,save)
{
	var oDiv;
	
	oDiv				= document.createElement("<div style='display: none;'></div>");
	
	var oForm;

	oForm				= document.createElement("<form name='fileFomAction'></form>");

	oForm.method		= "post";
	oForm.action		= "/webzine/ver3/common/jsp/commonFileDown.jsp?";
	//oForm.action		= "/webzine/ver3/common/jsp/commonFileDown.jsp?path="+path+"&org="+org+"&save="+save;
	
	var oInputHidden;

	oInputHidden		= document.createElement("<input text='hidden' name='path'>");
	oInputHidden.value	= path;
	oForm.appendChild(oInputHidden);
	
	var oInputHidden;

	oInputHidden		= document.createElement("<input text='hidden' name='org'>");
	oInputHidden.value	= org;
	oForm.appendChild(oInputHidden);
	
	var oInputHidden;

	oInputHidden		= document.createElement("<input text='hidden' name='save'>");
	oInputHidden.value	= save;
	oForm.appendChild(oInputHidden);
	
	oDiv.appendChild(oForm);

	document.body.appendChild(oDiv);
	
	oForm.submit();
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : strObjName			(컨트롤명)
//			: nBoolean				(체크여부 0(true)/1(false) )
// 결    과	: 없음
// 목    적 : 멀티셀렉트박스에서의 전체 선택/해제 {토글}
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : <input type="button" value="전체선택"	onClick="uf_setSelectBox_AllSelected( form.Category, nBoolean)">
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_setSelectBox_AllSelected(strObjName,nBoolean)
{
	var bSelected;

	if (nBoolean == 0)
	{
		bSelected						= true;
	}
	else
	{
		bSelected						= false;
	}

	for( var i=0; i<strObjName.options.length; i++ )
	{
		strObjName.options[i].selected	= bSelected;
	}
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : objCheckBox			(체크박스 컨트롤명)
//			: strObjName			(컨트롤명)
// 결    과	: 없음
// 목    적 : 멀티셀렉트박스에서의 전체 토글 (체크박스사용)
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : <input type="button" value="전체토글"	onClick="uf_setSelectBox_ToggleAll( objCheckBox, strObjName )">
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_setSelectBox_ToggleAll(objCheckBox,strObjName)
{
	var objSelect;

	objSelect		= document.getElementById(strObjName);

	if ( objCheckBox.checked )
	{
		for( var i=0; i<objSelect.options.length; i++ )
		{
			objSelect.options[i].selected	= true;
		}
	} 
	else
	{
		for( var i=0; i<objSelect.options.length; i++ )
		{
			objSelect.options[i].selected	= false;
		}
	}
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : strObjName_Original		(원본 컨트롤명)
//			: strObjName_Target			(대상 컨트롤명)
// 결    과	: 없음
// 목    적 : 여러 멀티셀렉트박스에서의 이동 교환
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : <input type="button" value="맞교환"	onClick="uf_setSelected_MoveElements( strObjName_Original, strObjName_Target )">
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_setSelected_MoveElements(strObjName_Original,strObjName_Target )
{
	var objOriginal;
	var objTarget;

	objOriginal				= document.getElementById(strObjName_Original);
	objTarget				= document.getElementById(strObjName_Target);

	// 이동 (원본-->타켓)

	var intRemoveCount;     // 이동할 항목수

	intRemoveCount			= 0;

	for( var i=0; i < objOriginal.options.length; i++ )
	{
		if ( objOriginal.options[i].selected == true )
		{
			var addText										= objOriginal.options[i].text;
			var addValue									= objOriginal.options[i].value;

			objTarget.options[objTarget.options.length]		= new Option(addText,addValue);

			objOriginal.options[i].selected					= false;

			++intRemoveCount;

		}
		else
		{
			objOriginal.options[i-intRemoveCount].selected	= false;
			objOriginal.options[i-intRemoveCount].text		= objOriginal.options[i].text;
			objOriginal.options[i-intRemoveCount].value		= objOriginal.options[i].value;
		}
	}

	// 이동후 원본에서 제거

	var intRemainCount;		// 이동후 남은 항목수

	intRemainCount			= objOriginal.options.length - intRemoveCount;

	for( i=objOriginal.options.length-1; i>=intRemainCount; i-- )
	{
		objOriginal.options[i]	= null;
	}
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : strObjName		(컨트롤명)
// 결    과	: 없음
// 목    적 : 멀티셀렉트박스의 이동 (맨아래로이동)
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : <input type="button" value="맨아래로이동"	onClick="uf_setSelected_MoveBottom('strObjName')">
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_setSelected_MoveBottom(strObjName)
{
	var objSelect;
	var i;

	objSelect									= document.getElementById(strObjName);
	i											= objSelect.selectedIndex;

	if ( i>-1 )
	{
		for(; i<objSelect.length-1; i++)
		{
			uf_setSelected_Move(objSelect,i+1,i);

			objSelect.options[i+1].selected		= true;
			objSelect.options[i].selected		= false;
		}
	}
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : strObjName		(컨트롤명)
// 결    과	: 없음
// 목    적 : 멀티셀렉트박스의 이동 (맨위로이동)
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : <input type="button" value="맨위로이동"	onClick="uf_setSelected_MoveTop('strObjName')">
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_setSelected_MoveTop(strObjName)
{
	var objSelect;
	var i;

	objSelect								= document.getElementById(strObjName);
	i										= objSelect.selectedIndex;

	for(; i>0; i--)
	{
		uf_setSelected_Move(objSelect,i,i-1);

		objSelect.options[i-1].selected		= true;
		objSelect.options[i].selected		= false;
	}
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : strObjName		(컨트롤명)
// 결    과	: 없음
// 목    적 : 멀티셀렉트박스의 이동 (아래로이동)
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : <input type="button" value="아래로이동"	onClick="uf_setSelected_MoveDown('strObjName')">
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_setSelected_MoveDown(strObjName)
{
	var objSelect;
	var i;

	objSelect								= document.getElementById(strObjName);
	i										= objSelect.selectedIndex;

	if ( i<objSelect.length-1 && i>-1 )
	{
		uf_setSelected_Move(objSelect,i+1,i);

		objSelect.options[i+1].selected		= true;
		objSelect.options[i].selected		= false;
	}
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : strObjName		(컨트롤명)
// 결    과	: 없음
// 목    적 : 멀티셀렉트박스의 이동 (위로이동)
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : <input type="button" value="위로이동"	onClick="uf_setSelected_MoveUp('strObjName')">
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_setSelected_MoveUp(strObjName)
{
	var objSelect;
	var i;

	objSelect	= document.getElementById(strObjName);
	i			= objSelect.selectedIndex;

	if ( i > 0 )
	{
		uf_setSelected_Move( objSelect, i, i-1 );

		objSelect.options[i-1].selected		= true;
		objSelect.options[i].selected		= false;
	}
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : strObjName		(컨트롤명)
//			: intIndex1			(컨트롤 순서 1)
//			: intIndex2			(컨트롤 순서 2)
// 결    과	: 없음
// 목    적 : 멀티셀렉트박스의 이동
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : <input type="button" value="이동테스트"	onClick="uf_setSelected_Move( objSelect, intIndex1, intIndex2 )">
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_setSelected_Move(objSelect,intIndex1,intIndex2)
{
	var savedValue;
	var savedText;

	var savedValue						= objSelect.options[intIndex1].value;
	var savedText						= objSelect.options[intIndex1].text;

	objSelect.options[intIndex1].value	= objSelect.options[intIndex2].value;
	objSelect.options[intIndex1].text	= objSelect.options[intIndex2].text;
	objSelect.options[intIndex2].value	= savedValue;
	objSelect.options[intIndex2].text	= savedText;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : obj		(컨트롤명)
// 결    과	: 없음		(TextBox 실시간 처리)
// 목    적 : 숫자만 입력
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : <input type="text" name="money" onkeypress='uf_setNum(this)' onblur='uf_setNum(this)'>
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_setNum(obj)
{
	var val;
	var re;

	val			= obj.value;
	re			= /[^0-9]/gi;

	obj.value	= val.replace(re,""); 
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : sVal		(변환하려는 문자열)
// 결    과	: String	(문자열)
// 목    적 : 자동콤마 찍기
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : uf_getAutoComma(sVal)
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_getAutoComma(sVal)
{
	var newValue;
	var len;
	var ch;
	var j;
	var formatValue;

	newValue			= "" + sVal;
	len					= newValue.length;
	ch					= "";
	j					= 1;
	formatValue			= "";

	newValue			= uf_getSelectNumber(newValue);
	len					= newValue.length;

	for ( i=len; i>0; i-- )
	{
		ch				= newValue.substring(i-1,i);

		formatValue		= ch + formatValue;

		if ( (j%3) == 0 && i>1 )
		{
			formatValue	= "," + formatValue
		}

		j++;
	}

	return formatValue;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : objEle	(컨트롤명)
// 결    과	: 없음		(TextBox 실시간 처리)
// 목    적 : 자동콤마 찍기
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : <input type="text" name="money" onKeyup="uf_setAutoComma(this)" style="text-align:right; ime-mode:disabled;">
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_setAutoComma(objEle)
{
	var newValue;
	var len;
	var ch;
	var j;
	var formatValue;

	newValue			= "" + objEle.value;
	len					= newValue.length;
	ch					= "";
	j					= 1;
	formatValue			= "";

	newValue			= uf_getSelectNumber(newValue);
	len					= newValue.length;

	for ( i=len; i>0; i-- )
	{
		ch				= newValue.substring(i-1,i);

		formatValue		= ch + formatValue;

		if ( (j%3) == 0 && i>1 )
		{
			formatValue	= "," + formatValue
		}

		j++;
	}

	objEle.value		= formatValue;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : 없음
// 결    과	: 없음
// 목    적 : 팝업창 자동 사이즈 조절
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : window.onload = function(){uf_popupAutoResize();} 
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_popupAutoResize() 
{
    var thisX;
    var thisY;
    var maxThisX;
    var maxThisY;
    var marginY;
    
    thisX			= parseInt(document.body.scrollWidth);
    thisY			= parseInt(document.body.scrollHeight);
    maxThisX		= screen.width - 50;
    maxThisY		= screen.height - 50;
    marginY			= 0;
    
	// 브라우저별 높이 조절.
	if (navigator.userAgent.indexOf("MSIE 6") > 0)
	{
		marginY		= 45;		// IE 6.x
	}
	else if(navigator.userAgent.indexOf("MSIE 7") > 0)
	{
		marginY		= 75;		// IE 7.x
	}
	else if(navigator.userAgent.indexOf("Firefox") > 0)
	{
		marginY		= 50;		// FF
	}
	else if(navigator.userAgent.indexOf("Opera") > 0)
	{
		marginY		= 30;		// Opera
	}
	else if(navigator.userAgent.indexOf("Netscape") > 0)
	{
		marginY		= -2;		// Netscape
	}

    if (thisX > maxThisX)
	{
        window.document.body.scroll		= "yes";
        thisX							= maxThisX;
    }
    if (thisY > maxThisY - marginY)
	{
        window.document.body.scroll		= "yes";
        thisX							+= 19;
        thisY							= maxThisY - marginY;
    }

    window.resizeTo(thisX+10, thisY+marginY);

    // 센터 정렬
    var windowX;
    var windowY;
    
	windowX			= (screen.width - (thisX+10))/2;
    windowY			= (screen.height - (thisY+marginY))/2 - 20;

    window.moveTo(windowX,windowY);
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : 없음
// 결    과	: 없음
// 목    적 : 팝업창을 가운데로 조정하고, 포커스를 줌.
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : window.onload = function(){uf_setPopupCenterFocus();} 
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_setPopupCenterFocus()
{
	var thisX;
	var thisY;
	var maxThisX;
	var maxThisY;
	var marginY;
	
	thisX			= parseInt(document.body.scrollWidth);
	thisY			= parseInt(document.body.scrollHeight);
	maxThisX		= screen.width - 50;
	maxThisY		= screen.height - 50;
	marginY			= 0;
	
	// 브라우저별 높이 조절.
	if (navigator.userAgent.indexOf("MSIE 6") > 0)
	{
		marginY		= 45;		// IE 6.x
	}
	else if(navigator.userAgent.indexOf("MSIE 7") > 0)
	{
		marginY		= 75;		// IE 7.x
	}
	else if(navigator.userAgent.indexOf("Firefox") > 0)
	{
		marginY		= 50;		// FF
	}
	else if(navigator.userAgent.indexOf("Opera") > 0)
	{
		marginY		= 30;		// Opera
	}
	else if(navigator.userAgent.indexOf("Netscape") > 0)
	{
		marginY		= -2;		// Netscape
	}

	if (thisX > maxThisX)
	{
		//window.document.body.scroll	= "yes";
		thisX							= maxThisX;
	}

	if (thisY > maxThisY - marginY)
	{
		//window.document.body.scroll	= "yes";
		thisX							+= 19;
		thisY							= maxThisY - marginY;
	}

	// 센터 정렬
	var windowX;
	var windowY;

	windowX			= (screen.width - (thisX+10))/2;
	windowY			= (screen.height - (thisY+marginY))/2 - 20;

	window.moveTo(windowX,windowY);
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : cUrl			(경로)
//			: cOpenName		(window명)
//			: nWidth		(길이)
//			: nHeight		(높이)
//			: cOption		(옵션)
// 결    과	: 없음
// 목    적 : 팝업창 옵션에 따라 띄우기
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : uf_setOpenPopupOption( '/Popup/popPassword.jsp', 'popPassword', 300, 200, "scrollbars=no");
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_setOpenPopupOption(cUrl,cOpenName,nWidth,nHeight,cOption)
{
	var cDefaultOption;
	
	cDefaultOption		= "toolbars=no, location=no, status=no, menubars=no, scrollbars=no, resizable=no";

	if (cOption != "")
	{
		cOption			= cOption; 
	}
	else
	{
		cOption			= cDefaultOption; 
	}

	var windowprops;

	windowprops			= "width=" + nWidth + ", height=" + nHeight + ", " + cOption + "";

	window.open(cUrl, cOpenName, windowprops);
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : cUrl			(경로)
//			: cOpenName		(window명)
//			: nWidth		(길이)
//			: nHeight		(높이)
// 결    과	: 없음
// 목    적 : 팝업창 띄우기
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : uf_setOpenPopup( '/Popup/popPassword.jsp', 'popPassword', 300, 200 );
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_setOpenPopup(cUrl,cOpenName,nWidth,nHeight)
{
	// 팝업 위치 자동 조정

	var LeftPosition;
	var TopPosition;

	if (screen.width)
	{
		LeftPosition	= (screen.width-nWidth)/2;
	}
	else
	{
		LeftPosition	= 0;
	}

	if (screen.height)
	{
		TopPosition		= (screen.height-nHeight)/2;
	}
	else
	{
		TopPosition		= 0;
	}

	var windowprops;

	windowprops			= "width=" + nWidth +", height=" + nHeight + ", toolbars=no, location=no, status=no, menubars=no, scrollbars=no, resizable=no, top=" + TopPosition + ", left=" + LeftPosition + "  ";

	window.open(cUrl, cOpenName, windowprops);
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : strFilter_Word		(컨트롤명)
// 결    과	: Boolean
// 목    적 : 금지단어 필터링 체크
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : if ( uf_isWord_Filter( form.content.value ) == false) alert("사용할 수 없는 문자열입니다");
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_isWord_Filter(strFilter_Word)
{
	var sFilter_Check_Flag;

	sFilter_Check_Flag			= false;

	for( var i=0; i<arr_FilterList.length; i++ )
	{
		if ( strFilter_Word.indexOf(arr_FilterList[i]) >= 0 )
		{
			sFilter_Check_Flag	= true;
		}
	}
	
	return sFilter_Check_Flag;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : objEle				(컨트롤명)
// 인    자 : strDefault_Text		(초기세팅된 텍스트)
// 결    과	: 없음
// 목    적 : 입력박스 초기 셋팅된 텍스트값 지우기
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : <input type="text" name="search" onMouseDown="uf_setDefault_TextClear(this.form.keyword, '검색어를 입력하세요');">
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_setDefault_TextClear(objEle,strDefault_Text)
{
	if (objEle.value == strDefault_Text)
	{
		objEle.value	= "";
	}
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : strFunction				(Function명)
// 결    과	: 없음
// 목    적 : 지정한 함수 호출
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : <input  type="text" name="search" onKeyDown="return uf_setFunction_Call( 'goSearch()' );">
// 주의사항 :
//			  1. 이 함수의 본래 목적은 자동서브밋 방지 효과를 내기 위한 것 이었음.
//			  2. 즉, <form> 요소에 단 하나의 TextBox 만 존재할때, 엔터키 이벤트가 발생하면 자동서브밋되는 현상을 방지하기 위함이었음
//** ---------------------------------------------------------------------------
function uf_setFunction_Call(strFunction)
{
	if ( event.keyCode == 13 )
	{
		eval(strFunction + ";");

		return false;
	}
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : objele		(컨트롤명)
//			: nlen			(넘겨할 길이)
//			: e				(event)
// 결    과	: 없음
// 목    적 : TAB 효과 주기 (지정한 길이에서 자동 전환)
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : <input type="text" name="jumin" onKeyUp="return uf_setAutoTab(this, 6, event);">
//			  <input type="text" name="jumin" onKeyUp="return uf_setAutoTab(this, 7, event);">
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_setAutoTab(objele,nlen,e)
{
	var isNN;

	isNN			= (navigator.appName.indexOf("Netscape") != -1);
	
	var keyCode;
	var filter;

	if (isNN)
	{
		keyCode		= e.which;
		filter		= [0,8,9];
	}
	else
	{
		keyCode		= e.keyCode;
		filter		= [0,8,9,16,17,18,37,38,39,40,46];
	}

	if(objele.value.length >= nlen && !uf_containsElement(filter,keyCode))
	{
		objele.value	= objele.value.slice(0, nlen);

		objele.form[(uf_getIndex(objele)+1) % objele.form.length].focus();
	}

	function uf_containsElement(arr,ele)
	{
		var found;
		var index;

		found			= false;
		index			= 0;

		while(!found && index < arr.length)
		{
			if(arr[index] == ele)
			{
				found	= true;
			}
			else
			{
				index++;
			}
		}

		return found;
	}

	function uf_getIndex(objele)
	{
		var index;
		var i;
		var found;

		index		= -1;
		i			= 0;
		found		= false;

		while (i < objele.form.length && index == -1)
		{
			if (objele.form[i] == objele)
			{
				index	= i;
			}
			else
			{
				i++;
			}
		}

		return index;
	}

	return true;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : 없음
// 결    과	: 없음
// 목    적 : TAB 효과 주기 (엔터키에 의해 동작)
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : uf_setSendTab();
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_setSendTab()
{
	if ( event.keyCode == 13 )
	{
		event.keyCode = 9;
	}
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : strEleId		(컨트롤명)
//			: nFormIndex	(컨트롤명)
// 결    과	: 없음
// 목    적 : 입력 포커스 주기
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : uf_setFocus( 'userName', null );
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_setFocus(strEleId,nFormIndex)
{
	if (nFormIndex == null)
	{
		nFormIndex	= 0;
	}

	var form;
	var objEle;
	
	form			= eval('document.forms[' + nFormIndex + "]");
	objEle			= eval('form.' + strEle);

	objEle.focus();
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : strEleId	(컨트롤명)
// 결    과	: 없음
// 목    적 : 체크박스 전체반전 선택 (기존 선택값과 반대되는 모든값 선택)
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : <input type="checkbox" onClick="uf_setChecked_Reverse('checkData');">
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_setChecked_Reverse(strEleId)
{
	var objEle;

	objEle					= eval("document.getElementsByName('"+ strEleId +"')");
	
	for( var i=0; i < objEle.length; i++ )
	{
		objEle[i].checked	= !objEle[i].checked;
	}
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : strEleId	(컨트롤명)
//			: bChecked	(체크여부)
// 결    과	: 없음
// 목    적 : 체크박스 전체선택/해제
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : <input type="checkbox" onClick="uf_setChecked_All('checkData', this.checked);">
// 주의사항 :
//** ---------------------------------------------------------------------------
function uf_setChecked_All(strEleId,bChecked )
{
	var objEle;

	objEle					= eval("document.getElementsByName('"+ strEleId +"')");

	if (bChecked)
	{
		bChecked			= true;
	}
	else
	{
		bChecked			= false;
	}

	for( var i=0; i < objEle.length; i++ )
	{
		objEle[i].checked	= bChecked;
	}
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : strObjName	(셀렉트박스 이름)
// 결    과	: 없음
// 목    적 : 멀티 셀렉트박스의  선택된 항목들을 제거
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : uf_setMultiSelected_Delete( "imgList" );
// 주의사항 :
//			  1. 멀티 삭제시 주의점: 밑에서 위로 루프 돌리며 삭제해야 한다.
//			  2. for( var i=0; i < objEle.options.length; i++ ) 와 같이, 위에서 부터 삭제를 하면, 데이터가 꼬이면서 원하지 않는 결과를 얻게 된다.
//** ---------------------------------------------------------------------------
function uf_setMultiSelected_Delete(strObjName)
{
	try
	{
        var objEle;

        objEle	= document.getElementById(strObjName);

		for( var i=(objEle.options.length-1); i >= 0 ; i-- )
		{
			if (objEle.options[i].selected )
			{
				objEle.options[i]	= null;
			}
        }
	}
	catch(e)
	{
	}
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : strValue		(문자열)
//			  strTrimType	(공백제거형식)
// 결    과	: String
// 목    적 : 공백제거
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : var strResult = uf_getTrim( form.title.value, 'B');
// 주의사항 :
//			  1. L	: 왼쪽공백제거
//			  2. R	: 오른쪽공백제거
//			  3. B	: 양쪽공백제거
//			  3. A	: 전체공백제거
//** ---------------------------------------------------------------------------
function uf_getTrim(strValue,strTrimType)
{
	var strReturn;

	strReturn			= "";
	
	switch ( strTrimType.toUpperCase() )
	{
		case "L"	:
			
			strReturn	= strValue.replace(/^\s+/g,"");
			
			break;

		case "R"	:
			
			strReturn	= strValue.replace(/\s+$/g,"");
			
			break;

		case "B"	:
			
			strReturn	= strValue.replace(/^\s+/g,"").replace(/\s+$/g,"");
			
			break;

		case "A"	:
			
			strReturn	= strValue.replace(/\s+/g,"");
			
			break;

		default		:
			
			strReturn	= strValue;
			
			break;
	}

	return strReturn;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : strValue		(문자열)
//			  strFind		(찾을단어)
//			  strChange		(바꿀단어)
// 결    과	: String
// 목    적 : 문자열 치환
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : var cResult = uf_getReplace( form.title.value, 'a', 'A' );
// 주의사항 :
//** ---------------------------------------------------------------------------	
function uf_getReplace(strValue,strFind,strChange)
{
	var nPos;

	nPos		= strValue.indexOf( strFind );

	while ( nPos != -1 )
	{
		strValue 	= strValue.replace( strFind, strChange );
		nPos 		= strValue.indexOf( strFind );
	}
	
	return strValue;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : strValue			(문자열)
// 결    과	: Number
// 목    적 : 바이트 수 구하기
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : var cResult = uf_getStringByte( form.title.value );
// 주의사항 :
//** ---------------------------------------------------------------------------	
function uf_getStringByte(strValue)
{
	var nTotalByte;
	var cOneChar;

	nTotalByte			= 0;
	cOneChar			= "";

	if ( strValue.length == 0 )
	{
		return nTotalByte;
	}
	
	for( var i=0; i < strValue.length; i++ )
	{
		cOneChar		= strValue.charAt(i);

		if ( escape(cOneChar).length > 4 )
		{
			nTotalByte	+= 2;
		}
		else
		{
			nTotalByte ++;
		}
	}

	return nTotalByte;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : strValue			(문자열)
//			: strCutType		(자르는방법)
//			: intStart			(시작위치)
//			: intCutSize		(자를크기)
// 결    과	: String
// 목    적 : 문자열 자르기
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : var cResult = uf_getStringCut( form.title.value, 'MB', 4, 6 );
// 주의사항 :
//			  1. L / R	: 왼쪽,오른쪽 자르기의 경우 {시작위치} 값은 무시함
//			  2. MA		: {중간}시작점에서 끝까지 자르기의 경우  {자를크기} 값은 무시함
//			  3. MA/MB	: {중간} 자르기의 경우 시작값은 1부터 적용함 (즉, sbustring(0,2) 방식이 아닌 VB함수의 Mid(1,2)와 같은 형식을 취함)
//** ---------------------------------------------------------------------------	
function uf_getStringCut(strValue,strCutType,intStart,intCutSize)
{
	if ( strValue.length == 0 )
	{
		return "";
	}

	if ( intStart < 0 )
	{
		intStart		= 0;
	}

	if ( intCutSize < 0 )
	{
		intCutSize		= 0;
	}
	
	var cResult;

	cResult				= "";
	
	switch ( strCutType.toUpperCase() )
	{
		case "L"	:	// 왼쪽에서 자르기
			
			cResult		= strValue.substring(0,intCutSize);
			
			break;

		case "R"	:	// 오른쪽에서 자르기

			intStart    = strValue.length - intCutSize;

			cResult		= strValue.substring(intStart);
			
			break;

		case "MB"	:	// {중간}시작점에서 지정위치까지 자르기

			intCutSize	+= intStart-1;

			cResult		= strValue.substring(intStart-1, intCutSize);
			
			break;

		case "MA"	:	// {중간}시작점에서 끝까지 자르기

			cResult		= strValue.substring(intStart-1);
			
			break;

		default     	:

			cResult		= strValue;
			
			break;
	}

	return cResult;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : message	(문자열)
//			: maximum	(자를글자수)
// 결    과	: String
// 목    적 : 글자 자르기
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
// 사용예제 : uf_getAssertMsglen(message,maximum )
// 주의사항 : 
//** ---------------------------------------------------------------------------
function uf_getAssertMsglen(message,maximum )
{
	var inc;
	var nbytes;
	var msg;
	var msglen;

	inc				= 0;
	nbytes			= 0;
	msg				= "";
	msglen			= message.length;

	for (i=0; i<msglen; i++)
	{
		var ch;

		ch			= message.charAt(i);

		if (escape(ch).length > 4)
		{
			inc		= 2;
		}
		else
		{
			inc		= 1;
		}

		if ((nbytes + inc) > maximum)
		{
			break;
		}

		nbytes		+= inc;
		msg			+= ch;
	}

	return msg;
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : 
// 목    적 : 상태바 생성
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
//** ---------------------------------------------------------------------------	
function uf_showwait(sMsg,bCheck)
{
	if ( bCheck == null || uf_getTrim(bCheck,"A") == "" )
	{
		bCheck		= true;
	}

	if (bCheck)
	{
		if(document.getElementById("Proccess_Ing"))
		{
			var s_Client_Width;													//document width 값
			var s_Client_Height;												//document height 값
			var s_Scroll_Width;													//document scroll width 값
			var s_Scroll_Height;												//document scroll height 값

//			브라우저별

			if (navigator.userAgent.indexOf("MSIE 6") > 0)
			{
//				IE 6.x

				s_Client_Width													= document.body.clientWidth;
				s_Client_Height													= document.body.clientHeight;
				s_Scroll_Width													= document.body.scrollWidth;
				s_Scroll_Height													= document.body.scrollHeight;
			}
			else if(navigator.userAgent.indexOf("MSIE 7") > 0)
			{
//				IE 7.x

				s_Client_Width													= document.body.clientWidth;
				s_Client_Height													= document.body.clientHeight;
				s_Scroll_Width													= document.body.scrollWidth;
				s_Scroll_Height													= document.body.scrollHeight;
			}
			else if(navigator.userAgent.indexOf("MSIE 8") > 0)
			{
//				IE 8.x

				s_Client_Width													= document.documentElement.clientWidth;
				s_Client_Height													= document.documentElement.clientHeight;
				s_Scroll_Width													= document.documentElement.scrollWidth;
				s_Scroll_Height													= document.documentElement.scrollHeight;
			}
			else if(navigator.userAgent.indexOf("Firefox") > 0)
			{
//				FF

				s_Client_Width													= document.documentElement.clientWidth;
				s_Client_Height													= document.documentElement.clientHeight;
				s_Scroll_Width													= document.documentElement.scrollWidth;
				s_Scroll_Height													= document.documentElement.scrollHeight;
			}
			else if(navigator.userAgent.indexOf("Opera") > 0)
			{
//				Opera

				s_Client_Width													= document.documentElement.clientWidth;
				s_Client_Height													= document.documentElement.clientHeight;
				s_Scroll_Width													= document.documentElement.scrollWidth;
				s_Scroll_Height													= document.documentElement.scrollHeight;
			}
			else if(navigator.userAgent.indexOf("Netscape") > 0)
			{
//				Netscape

				s_Client_Width													= document.documentElement.clientWidth;
				s_Client_Height													= document.documentElement.clientHeight;
				s_Scroll_Width													= document.documentElement.scrollWidth;
				s_Scroll_Height													= document.documentElement.scrollHeight;
			}
			else
			{
				s_Client_Width													= document.documentElement.clientWidth;
				s_Client_Height													= document.documentElement.clientHeight;
				s_Scroll_Width													= document.documentElement.scrollWidth;
				s_Scroll_Height													= document.documentElement.scrollHeight;
			}

//			브라우저별

			document.getElementById("Proccess_Ing_Content").style.top			= s_Scroll_Height/2-60;
			document.getElementById("Proccess_Ing_Content").style.left			= s_Scroll_Width/2-60;
			document.getElementById("Proccess_Ing_Content").style.width			= "170px";
			document.getElementById("Proccess_Ing_Content").style.height		= "70px";
			document.getElementById("Proccess_Ing_Content").style.position		= "absolute";
			document.getElementById("Proccess_Ing_Content").style.zIndex		= 10000;

			document.getElementById("Proccess_Ing_BG").style.top				= "0px";
			document.getElementById("Proccess_Ing_BG").style.left				= "0px";
			document.getElementById("Proccess_Ing_BG").style.width				= s_Scroll_Width+"px";
			document.getElementById("Proccess_Ing_BG").style.height				= s_Scroll_Height+"px";

			document.getElementById("Proccess_Ing").style.top					= "0px";
			document.getElementById("Proccess_Ing").style.left					= "0px";
			document.getElementById("Proccess_Ing").style.width					= s_Scroll_Width+"px";
			document.getElementById("Proccess_Ing").style.height				= s_Scroll_Height+"px";
			document.getElementById("Proccess_Ing").style.display				= "block";
		}
	}
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : 
// 목    적 : 상태바 제거
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
//** ---------------------------------------------------------------------------	
function uf_removewait()
{
	if(document.getElementById("Proccess_Ing"))
	{
		document.getElementById("Proccess_Ing").style.display	= "none";
	}
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : 
// 목    적 : 페이지내 처리 페이지 생성
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 : 
//** ---------------------------------------------------------------------------	
function uf_Show_Proccess_Page(objEle, objEle_Top, objEle_Left, objEle_zIndex, objEle_iframe, objEle_iframe_Width, objEle_iframe_Height, objEle_iframe_Url)
{
//	브라우저별

	if (navigator.userAgent.indexOf("MSIE 6") > 0)
	{
//		IE 6.x

		g_s_Client_Width				= top.document.body.clientWidth;
		g_s_Client_Height				= top.document.body.clientHeight;
		g_s_Scroll_Width				= top.document.body.scrollWidth;
		g_s_Scroll_Height				= top.document.body.scrollHeight;
	}
	else if(navigator.userAgent.indexOf("MSIE 7") > 0)
	{
//		IE 7.x

		g_s_Client_Width				= top.document.body.clientWidth;
		g_s_Client_Height				= top.document.body.clientHeight;
		g_s_Scroll_Width				= top.document.body.scrollWidth;
		g_s_Scroll_Height				= top.document.body.scrollHeight;
	}
	else if(navigator.userAgent.indexOf("MSIE 8") > 0)
	{
//		IE 8.x

		g_s_Client_Width				= top.document.documentElement.clientWidth;
		g_s_Client_Height				= top.document.documentElement.clientHeight;
		g_s_Scroll_Width				= top.document.documentElement.scrollWidth;
		g_s_Scroll_Height				= top.document.documentElement.scrollHeight;
	}
	else if(navigator.userAgent.indexOf("Firefox") > 0)
	{
//		FF

		g_s_Client_Width				= top.document.documentElement.clientWidth;
		g_s_Client_Height				= top.document.documentElement.clientHeight;
		g_s_Scroll_Width				= top.document.documentElement.scrollWidth;
		g_s_Scroll_Height				= top.document.documentElement.scrollHeight;
	}
	else if(navigator.userAgent.indexOf("Opera") > 0)
	{
//		Opera

		g_s_Client_Width				= top.document.documentElement.clientWidth;
		g_s_Client_Height				= top.document.documentElement.clientHeight;
		g_s_Scroll_Width				= top.document.documentElement.scrollWidth;
		g_s_Scroll_Height				= top.document.documentElement.scrollHeight;
	}
	else if(navigator.userAgent.indexOf("Netscape") > 0)
	{
//		Netscape

		g_s_Client_Width				= top.document.documentElement.clientWidth;
		g_s_Client_Height				= top.document.documentElement.clientHeight;
		g_s_Scroll_Width				= top.document.documentElement.scrollWidth;
		g_s_Scroll_Height				= top.document.documentElement.scrollHeight;
	}
	else
	{
		g_s_Client_Width				= top.document.documentElement.clientWidth;
		g_s_Client_Height				= top.document.documentElement.clientHeight;
		g_s_Scroll_Width				= top.document.documentElement.scrollWidth;
		g_s_Scroll_Height				= top.document.documentElement.scrollHeight;
	}

//	브라우저별

	var s_objEle_1;
	var s_objEle_2;
	var s_objEle_3;
	var s_objEle_iframe;

	s_objEle_1							= eval("top.document.getElementById('"+ objEle +"')");
	s_objEle_2							= eval("top.document.getElementById('"+ objEle +"_BG')");
	s_objEle_3							= eval("top.document.getElementById('"+ objEle +"_CONTENT')");
	s_objEle_iframe						= eval("top.document.getElementById('"+ objEle_iframe +"')");

	s_objEle_iframe.width				= objEle_iframe_Width+"px";
	s_objEle_iframe.height				= objEle_iframe_Height+"px";
	s_objEle_iframe.src					= objEle_iframe_Url;

	s_objEle_3.style.top				= objEle_Top+"px";
	s_objEle_3.style.left				= objEle_Left+"px";
	s_objEle_3.style.width				= objEle_iframe_Width+"px";
	s_objEle_3.style.height				= objEle_iframe_Height+"px";
	s_objEle_3.style.position			= "absolute";
	s_objEle_3.style.zIndex				= objEle_zIndex;

	s_objEle_2.style.top				= "0px";
	s_objEle_2.style.left				= "0px";
	s_objEle_2.style.width				= g_s_Scroll_Width+"px";
	s_objEle_2.style.height				= g_s_Scroll_Height+"px";

	s_objEle_1.style.top				= "0px";
	s_objEle_1.style.left				= "0px";
	s_objEle_1.style.width				= g_s_Scroll_Width+"px";
	s_objEle_1.style.height				= g_s_Scroll_Height+"px";
	s_objEle_1.style.display			= "block";
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 :
// 목    적 : 
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
//** ---------------------------------------------------------------------------
function uf_Show_Proccess_Page_End(objEle,objEle_iframe)
{
	var s_p_Client_Width;				//document width 값
	var s_p_Client_Height;				//document height 값
	var s_p_Scroll_Width;				//document scroll width 값
	var s_p_Scroll_Height;				//document scroll height 값
	var s_p_Scroll_Top;					//document scroll top 값
	var s_p_Scroll_Left;				//document scroll left 값

	var s_Client_Width;					//document width 값
	var s_Client_Height;				//document height 값
	var s_Scroll_Width;					//document scroll width 값
	var s_Scroll_Height;				//document scroll height 값
	var s_Scroll_Top;					//document scroll top 값
	var s_Scroll_Left;					//document scroll left 값

//	브라우저별

	if (navigator.userAgent.indexOf("MSIE 6") > 0)
	{
//		IE 6.x

		s_p_Client_Width				= top.document.body.clientWidth;
		s_p_Client_Height				= top.document.body.clientHeight;
		s_p_Scroll_Width				= top.document.body.scrollWidth;
		s_p_Scroll_Height				= top.document.body.scrollHeight;

		s_Client_Width					= document.body.clientWidth;
		s_Client_Height					= document.body.clientHeight;
		s_Scroll_Width					= document.body.scrollWidth;
		s_Scroll_Height					= document.body.scrollHeight;
	}
	else if(navigator.userAgent.indexOf("MSIE 7") > 0)
	{
//		IE 7.x

		s_p_Client_Width				= top.document.body.clientWidth;
		s_p_Client_Height				= top.document.body.clientHeight;
		s_p_Scroll_Width				= top.document.body.scrollWidth;
		s_p_Scroll_Height				= top.document.body.scrollHeight;

		s_Client_Width					= document.body.clientWidth;
		s_Client_Height					= document.body.clientHeight;
		s_Scroll_Width					= document.body.scrollWidth;
		s_Scroll_Height					= document.body.scrollHeight;
	}
	else if(navigator.userAgent.indexOf("MSIE 8") > 0)
	{
//		IE 8.x

		s_p_Client_Width				= top.document.documentElement.clientWidth;
		s_p_Client_Height				= top.document.documentElement.clientHeight;
		s_p_Scroll_Width				= top.document.documentElement.scrollWidth;
		s_p_Scroll_Height				= top.document.documentElement.scrollHeight;

		s_Client_Width					= document.documentElement.clientWidth;
		s_Client_Height					= document.documentElement.clientHeight;
		s_Scroll_Width					= document.documentElement.scrollWidth;
		s_Scroll_Height					= document.documentElement.scrollHeight;
	}
	else if(navigator.userAgent.indexOf("Firefox") > 0)
	{
//		FF

		s_p_Client_Width				= top.document.documentElement.clientWidth;
		s_p_Client_Height				= top.document.documentElement.clientHeight;
		s_p_Scroll_Width				= top.document.documentElement.scrollWidth;
		s_p_Scroll_Height				= top.document.documentElement.scrollHeight;

		s_Client_Width					= document.documentElement.clientWidth;
		s_Client_Height					= document.documentElement.clientHeight;
		s_Scroll_Width					= document.documentElement.scrollWidth;
		s_Scroll_Height					= document.documentElement.scrollHeight;
	}
	else if(navigator.userAgent.indexOf("Opera") > 0)
	{
//		Opera

		s_p_Client_Width				= top.document.documentElement.clientWidth;
		s_p_Client_Height				= top.document.documentElement.clientHeight;
		s_p_Scroll_Width				= top.document.documentElement.scrollWidth;
		s_p_Scroll_Height				= top.document.documentElement.scrollHeight;

		s_Client_Width					= document.documentElement.clientWidth;
		s_Client_Height					= document.documentElement.clientHeight;
		s_Scroll_Width					= document.documentElement.scrollWidth;
		s_Scroll_Height					= document.documentElement.scrollHeight;
	}
	else if(navigator.userAgent.indexOf("Netscape") > 0)
	{
//		Netscape

		s_p_Client_Width				= top.document.documentElement.clientWidth;
		s_p_Client_Height				= top.document.documentElement.clientHeight;
		s_p_Scroll_Width				= top.document.documentElement.scrollWidth;
		s_p_Scroll_Height				= top.document.documentElement.scrollHeight;

		s_Client_Width					= document.documentElement.clientWidth;
		s_Client_Height					= document.documentElement.clientHeight;
		s_Scroll_Width					= document.documentElement.scrollWidth;
		s_Scroll_Height					= document.documentElement.scrollHeight;
	}
	else
	{
		s_p_Client_Width				= top.document.documentElement.clientWidth;
		s_p_Client_Height				= top.document.documentElement.clientHeight;
		s_p_Scroll_Width				= top.document.documentElement.scrollWidth;
		s_p_Scroll_Height				= top.document.documentElement.scrollHeight;

		s_Client_Width					= document.documentElement.clientWidth;
		s_Client_Height					= document.documentElement.clientHeight;
		s_Scroll_Width					= document.documentElement.scrollWidth;
		s_Scroll_Height					= document.documentElement.scrollHeight;
	}

//	브라우저별

	var s_objEle_1;
	var s_objEle_2;
	var s_objEle_3;
	var s_objEle_iframe;

	s_objEle_1							= eval("top.document.getElementById('"+ objEle +"')");
	s_objEle_2							= eval("top.document.getElementById('"+ objEle +"_BG')");
	s_objEle_3							= eval("top.document.getElementById('"+ objEle +"_CONTENT')");
	s_objEle_iframe						= eval("top.document.getElementById('"+ objEle_iframe +"')");

	if ( eval(s_p_Scroll_Height) > eval(s_Scroll_Height) )
	{
		var s_objEle_iframe_height;

		s_objEle_iframe_height			= s_Scroll_Height+10;

		s_objEle_iframe.height			= s_objEle_iframe_height+"px";
	}
	else
	{
		var s_objEle_iframe_height;

		s_objEle_iframe_height			= s_Scroll_Height+10;

		var s_objEle_2_1_height;

		s_objEle_2_1_height				= s_Scroll_Height+140;

		s_objEle_iframe.height			= s_objEle_iframe_height+"px";
//		s_objEle_3.style.height			= s_objEle_2_1_height+"px";
		s_objEle_2.style.height			= s_objEle_2_1_height+"px";
		s_objEle_1.style.height			= s_objEle_2_1_height+"px";
	}
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : 
// 목    적 : 페이지내 처리 페이지 제거
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
//** ---------------------------------------------------------------------------	
function uf_Remove_Proccess_Page(objEle, objEle_Top, objEle_Left, objEle_zIndex, objEle_iframe, objEle_iframe_Width, objEle_iframe_Height, objEle_iframe_Url)
{
	var s_objEle_1;
	var s_objEle_2;
	var s_objEle_3;
	var s_objEle_iframe;

	s_objEle_1					= eval("top.document.getElementById('"+ objEle +"')");
	s_objEle_2					= eval("top.document.getElementById('"+ objEle +"_BG')");
	s_objEle_3					= eval("top.document.getElementById('"+ objEle +"_CONTENT')");
	s_objEle_iframe				= eval("top.document.getElementById('"+ objEle_iframe +"')");

	s_objEle_iframe.width		= "0px";
	s_objEle_iframe.height		= "0px";
	s_objEle_iframe.src			= objEle_iframe_Url;

	s_objEle_3.style.width		= "0px";
	s_objEle_3.style.height		= "0px";

	s_objEle_2.style.width		= "0px";
	s_objEle_2.style.height		= "0px";

	s_objEle_1.style.width		= "0px";
	s_objEle_1.style.height		= "0px";
	s_objEle_1.style.display	= "none";
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : 
// 목    적 : General Setup And Starting
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
//** ---------------------------------------------------------------------------
function layer_init()
{
	if (navigator.appName == "Netscape")
	{
		layerStyleRef		= "layer.";
        layerRef			= "document.layers";
        styleSwitch			= "";
    }
	else
	{
        layerStyleRef		= "layer.style";
        layerRef			= "document.all";
        styleSwitch			= ".style";
    }
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : 
// 목    적 : showLayer
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
//** ---------------------------------------------------------------------------
function showLayer(layerName)
{
	document.getElementById(layerName).style.visibility	= "visible";
//	eval(layerRef + '["' + layerName + '"]' + styleSwitch + '.visibility="visible"');
}                        

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : 
// 목    적 : hideLayer
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
//** ---------------------------------------------------------------------------
function hideLayer(layerName)
{
	document.getElementById(layerName).style.visibility	= "hidden";
//	eval(layerRef + '["' + layerName + '"]' + styleSwitch + '.visibility="hidden"');
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : 
// 목    적 : hideLayer_all
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
//** ---------------------------------------------------------------------------
function hideLayer_all()
{
	document.getElementById("MenuLayer0").style.visibility	= "hidden";
	document.getElementById("MenuLayer1").style.visibility	= "hidden";
	document.getElementById("MenuLayer2").style.visibility	= "hidden";
	document.getElementById("MenuLayer3").style.visibility	= "hidden";	
	document.getElementById("MenuLayer4").style.visibility	= "hidden";
	document.getElementById("MenuLayer5").style.visibility	= "hidden";
	document.getElementById("MenuLayer6").style.visibility	= "hidden";
	document.getElementById("MenuLayer7").style.visibility	= "hidden";
	document.getElementById("MenuLayer8").style.visibility	= "hidden";
	document.getElementById("MenuLayer9").style.visibility	= "hidden";
	document.getElementById("MenuLayer10").style.visibility	= "hidden";
	document.getElementById("MenuLayer11").style.visibility	= "hidden";
	document.getElementById("MenuLayer12").style.visibility	= "hidden";
	document.getElementById("MenuLayer13").style.visibility	= "hidden";
	document.getElementById("MenuLayer14").style.visibility	= "hidden";
	document.getElementById("MenuLayer15").style.visibility	= "hidden";
	document.getElementById("MenuLayer16").style.visibility	= "hidden";
	document.getElementById("MenuLayer17").style.visibility	= "hidden";
	document.getElementById("MenuLayer18").style.visibility	= "hidden";
	document.getElementById("MenuLayer19").style.visibility	= "hidden";
	document.getElementById("MenuLayer20").style.visibility	= "hidden";
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : 
// 목    적 : 플래쉬 문제
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
//** ---------------------------------------------------------------------------	
function flashobject(file,width,height,bgcolor,name)
{
	document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="' + width + '" height="' + height + '" id="' + name + '">'
	+ '<param name="movie" value="' + file + '" />'
	+ '<param name="quality" value="best" />'
	+ '<param name="wmode" value="transparent" />'
	+ '<param name="bgcolor" value="' + bgcolor + '" />'
	+ '<param name="menu" value="false" />'
	+ '<param name="AllowScriptAccess" value="always" />'
	+ '<embed src="' + file + '" quality="high" wmode="transparent" bgcolor="' + bgcolor + '" width="' + width + '" height="' + height + '" name="' + name + '" menu="false" AllowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />'
	+ '</object>');
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : 
// 목    적 : 동영상 문제
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
//** ---------------------------------------------------------------------------
function mediaobject(url,width,height)
{
	document.write('<object id="mplayer" classid="CLSID:22D6F312-B0F6-11D0-94AB-0080C74C7E95" id="mplayer" type="application/x-oleobject" border="0" style="Z-INDEX: 1" width="' + width + '" height="' + height + '">'
	+ '<param NAME="Filename" VALUE="' + url + '">'
	+ '<param name="CurrentPosition" value="0">'
	+ '<param name="SetCurrentEntry" value="1">'
	+ '<param name="ClickToPlay" value="1">'
	+ '<param name="AutoSize" value="1">'
	+ '<param name="AutoStart" value="1">'
	+ '<param name="AutoResize" value="1">'
	+ '<param name="ShowControls" value="0">'
	+ '<param name="ShowAudioControls" value="1">'
	+ '<param name="ShowDisplay" value="0">'
	+ '<param name="ShowStatusBar" value="0">'
	+ '<param name="EnableContextMenu" value="0">'
	+ '<param name="ShowPositionControls" value="0">'
	+ '<param name="DisplayBackColor" value="0">'
	+ '<param name="ShowTracker" value="0">'
	+ '<param name="ShowCaptioning" value="0">'
	+ '<embed type="application/x-mplayer2" pluginspage="http://www.microsoft.com/Windows/Downloads/Contents/Products/MediaPlayer/" width="' + width + '" height="' + height + '">'
	+ '</object>');
}

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : 
// 목    적 : 이미지 롤오버 함수
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
//** ---------------------------------------------------------------------------
function MM_swapImgRestore()
{ 
//	v3.0
	var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages()
{
//	v3.0
	var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d)
{
//	v4.01
	var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
	if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
	for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
	if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage()
{ 
//	v3.0
	var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
	if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function MM_openBrWindow(theURL,winName,features)
{ 
//	v2.0
	window.open(theURL,winName,features);
}

function MM_showHideLayers()
{ 
//	v6.0
	var i,p,v,obj,args=MM_showHideLayers.arguments;
	for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
    obj.visibility=v; }
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//Function End (기능)
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//** ---------------------------------------------------------------------------
// 함 수 명 : 
// 인    자 : 
// 목    적 : 페이지 시작시 실행 (window.onload 와는 별개)
// 플 로 우 : 
// 검    수 :
// 생 성 일 : 
// 수    정 :
//** ---------------------------------------------------------------------------

layer_init();
