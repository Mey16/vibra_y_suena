// JavaScript 
$(document).ready(function(){
			//document.addEventListener("deviceready",function(){

		$('#bbeep').tap(function(){
			alert('Beep');
			navigator.notification.beep(1);
		});//tap del beep
        $('#bvibrar').tap(function(){
			alert('Vibraa!');
			navigator.notification.vibrate(1000);
			});//tap de vibrar
		//},false);//deviceready
});//ready 			

