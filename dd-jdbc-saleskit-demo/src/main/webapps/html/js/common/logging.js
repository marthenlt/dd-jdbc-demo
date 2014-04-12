//ie에서 F12 -> 콘솔탭
if(window.console == undefined){
	console = {log : function(){}};
}

function script_console_sample(){
	//console.time console.timeEnd 는 결과와 같이 시작된 지점을 time() Method 와 끝나는 지점에 timeEnd() method를 써주고 
	//인자 값으로 검사하고자 하는 함수 이름을 넘겨주면 소스코드가 실행된 시간을 화면에 출력해 준다
	console.time("method_name");
	console.timeEnd("method_name");
	
	//log 는 단순하게 인자값으로 넘겨준것을 console 에 반환해서 찍어주고 dir은 인자값으로 넘겨준 값을 자세하게 그 안에 어떤것들이 들어있는지 method, property등 을 보여준다
	console.log();  
	console.dir();
	
	//document에 있는 textarea를 배열로 반환 
	$$("textarea");
	
	monitorEvents();
	
	//인자값으로 받은 Element 에서 발행하는 Event를 모니터링 해주는 함수이다.
	monitorEvents($$("textarea")[0]);

	//인자값으로 넘겨준 값이 가지고 있는 모든 key 값과, value값을 console창에 반환해서 보여주는 함수이다
	keys(document);
	values(document);
	
}
