$(document).ready(function() {

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
			var radio ='';
			
		/*	escape(name);
			escape(number);
			escape(emailAddr);
			escape(numOfGuests);
			escape(guestsNames);
			escape(mailAddr);
			escape(text); */
			
		
			

			
			 if($('#radio1').is(':checked')) { radio = 'I / We will be attending'; }
			 if($('#radio2').is(':checked')) { radio = 'Unfortunately I / We are unable to attend'; }
			 
//			 escape (radio);
		
			if(name == "" || emailAddr=="" || radio=="" ){
				$('#error-notify').fadeIn(500);
				$error = 1;
				
			}

			
			var dataString = 'name=' + name + '&number=' + number + '&emailAddr=' + emailAddr + '&numOfGuests=' + numOfGuests + '&guestsNames=' + guestsNames + '&mailAddr=' + mailAddr + '&text=' + text + '&radio=' + radio;
						
			if($error == 0){
				$.ajax({
					type: "POST",
					url: "mail.php",
					data: dataString,
					success: function () {
						$('#error-notify').fadeOut(500);
						$('#notify').fadeIn(1000);
					}
				});
				return false;
			}
			
			e.preventDefault();
		});
	});

	 
	 










});
