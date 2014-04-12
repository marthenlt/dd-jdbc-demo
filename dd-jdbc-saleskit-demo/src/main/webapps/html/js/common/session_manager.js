var idleTime = 2000; // number of miliseconds until the user is considered idle
var initialSessionTimeoutMessage = 'Your session will expire in <span id="sessionTimeoutCountdown"></span> seconds.<br /><br />Click on <b>OK</b> to continue your session.';
var sessionTimeoutCountdownId = 'sessionTimeoutCountdown';
var redirectAfter = 60 * 30; // number of seconds to wait before redirecting the user
var session_counter_inteval = 30;	//서버와 클라이언트 사이의 세션 간격, 서버 세션보다 약간 작게 잡아준다.
var session_counter = (redirectAfter - session_counter_inteval);		//설정된 세션 timeout 값
var redirectTo = getContextPath()+"/logout.do"; // URL to relocate the user to once they have timed out
var keepAliveURL = 'keepAlive.php'; // URL to call to keep the session alive
var expiredMessage = "접속이 종료되었습니다."; // message to show user when the countdown reaches 0
var running = false; // var to check if the countdown is running
var timer; // reference to the setInterval timer so it can be stopped
$(document).ready(function() {
	$("body").append("<input type=\"hidden\" id=\"sessionTimeoutCountdown\" value=\"\"/>");
	
	if(!running){
		running = true;

		// intialisze timer
		$('#'+sessionTimeoutCountdownId).val(session_counter);

		// create a timer that runs every second
		timer = setInterval(function(){
			session_counter -= 1;

			// if the counter is 0, redirect the user
			if(session_counter == 0) {
				alert(expiredMessage);
				window.location.href = redirectTo;
			} else {
				$('#'+sessionTimeoutCountdownId).val(session_counter);
			};
		}, 1000);
	}
});