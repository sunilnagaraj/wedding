$(document).ready(function() {


	// For taking query_string regcode and putting that into form field
	function getQueryVariable(variable)
	{
	       var query = window.location.search.substring(1);
	       var vars = query.split("&");
	       for (var i=0;i<vars.length;i++) {
	               var pair = vars[i].split("=");
	               if(pair[0] == variable){return pair[1];}
	       }
	       return(false);
	}

	invitecode = getQueryVariable("invitecode");

	if (invitecode)
	{
//		alert(invitecode);
		$("#form-code").val(invitecode);
	}



	// Smooth scrolling navigation

		$(".scroll").click(function(event){		
			event.preventDefault();
			$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
		});
		
		$('.nav-item').click(function(){
		
			$('#main-menu').removeClass('expanded');
		
		});

	
	
	// Turn parallax scrolling off for iOS devices
	var iOS = false,
    p = navigator.platform;

	if( p === 'iPad' || p === 'iPhone' || p === 'iPod' ){
		iOS = true;
	}


	// Scroll effect on Home Page box
	if(iOS == false){
		var div = $('#main-title-text');
				$(window).on('scroll', function() {
				   var st = $(this).scrollTop();
				   div.css({ 'opacity' : (1 - st/400) });
				   div.css({ 'top' : (st*1.3) });
				});
	}
			
			
	// Initialize fancybox (lightbox plugin)
	$('.fancybox').fancybox();



	//Code for countdown timer
	$(".kkcount-down").kkcountdown({
		dayText		: '',
		daysText 	: ' days ',
		hoursText	: ':',
		minutesText	: ':',
		secondsText	: '',
		displayZeroDays : false,
		addClass	: ''
	});
	
	


	//Contact Form Code:
	$(function (e) {
		$("#contact-form .form-button").click(function (e) {
			var $error = 0;
			var name = $("#form-name").val();
			var number = $("#form-number").val();
			var emailAddr = $("#form-emailAddr").val();
			var numOfGuests = $("#form-numOfGuests").val();
			var guestsNames = $("#form-guestsNames").val();	
			var mailAddr = $("#form-mailAddr").val();								
			var text = $("#form-msg").val();
			var code = $("#form-code").val();
			var radio ='';

			
			 if($('#radio1').is(':checked')) { radio = 'I / We will be attending'; }
			 if($('#radio2').is(':checked')) { radio = 'Unfortunately I / We are unable to attend'; }
			 
			 
			 // Error if critical fields blank. Otherwise, clear error for second try submits.
			if(name == "" || emailAddr=="" || radio=="" ){
				$('#error-notify').fadeIn(500);
				$error = 1;
				
			}else{
				$('#error-notify').fadeOut(100);
				$error = 0;
				
			}
			
			// Enforce registration codes
			code = code.toLowerCase();
			
			if(radio == "I / We will be attending" &&  !( 
				(code == "sam" && numOfGuests <= "1") || 
				(code == "sbm" && numOfGuests <= "2") || 
				(code == "scm" && numOfGuests <= "3") || 
				(code == "sdm" && numOfGuests <= "4") || 
				(code == "sem" && numOfGuests <= "5") || 
				(code == "sfm" && numOfGuests <= "6") || 
				(code == "sgm" && numOfGuests <= "7") || 
				(code == "shm" && numOfGuests <= "8") || 
				(code == "sim" && numOfGuests <= "9")	
			)){
				$('#error-notifycode').fadeIn(500);
				$error = 1;
				
			}
			

			
			var dataString = 'name=' + name + '&number=' + number + '&emailAddr=' + emailAddr + '&numOfGuests=' + numOfGuests + '&guestsNames=' + guestsNames + '&mailAddr=' + mailAddr + '&text=' + text + '&radio=' + radio + '&code=' + code;
						
			if($error == 0){
				$.ajax({
					type: "POST",
					url: "mail.php",
					data: dataString,
					success: function () {
						$('#error-notify').fadeOut(500);
						$('#error-notifycode').fadeOut(200);
						$('#notify').fadeIn(1000);
					}
				});
				return false;
			}
			
			e.preventDefault();
		});
	});

	 
	 




});
