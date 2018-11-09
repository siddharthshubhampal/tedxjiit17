'use strict';

jQuery(document).ready(function () {


    $(window).bind("load", function () {
        // Preloader
        $('#loading').delay(300).fadeOut(200);

        // Smooth Page Scroll Start
        // ---------------------------------------------------------------------------------------   
        $('.primary-navbar a[href^=#]').click(function (event) {
            event.preventDefault();
            var header_height = $('.header-wrap').outerHeight()-2;
            $('html,body').animate({
                scrollTop: $(this.hash).offset().top - header_height}, 1000);
        });

        $('.goto-register[href^=#]').click(function (event) {
            event.preventDefault();
            $('html,body').animate({
                scrollTop: $(this.hash).offset().top - 20}, 1000);
        });
		
		$('.goto-contact[href^=#]').click(function (event) {
            event.preventDefault();
            $('html,body').animate({
                scrollTop: $(this.hash).offset().top - 70}, 1000);
        });
		
        // Smooth Page Scroll End
        // ---------------------------------------------------------------------------------------
    });

    // Smooth Page Scroll Start
    // ---------------------------------------------------------------------------------------   
    $('.primary-navbar a[href^=#]').click(function (event) {
        event.preventDefault();
        var header_height = $('.header-wrap').outerHeight();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top - header_height}, 1000);
    });
    // Smooth Page Scroll End
    // ---------------------------------------------------------------------------------------

    // Sticky Header
    $(window).scroll(function () {
        if (jQuery(window).scrollTop()) {
            //jQuery(".header-wrap").addClass("slideDownScaleReversedIn fix").removeClass("slideDownScaleReversedOut");
			jQuery(".header-wrap").addClass("slideDownScaleReversedIn fix").removeClass("slideDownScaleReversedOut");
        }
        else {
            //jQuery(".header-wrap").addClass("slideDownScaleReversedOut").removeClass("slideDownScaleReversedIn");
			jQuery(".header-wrap").addClass("slideDownScaleReversedIn fix").removeClass("slideDownScaleReversedOut");
            if (!(jQuery('body > section > div').hasClass('banner-wrap')))
            {
                var header_height = $('.header-wrap').outerHeight();
                jQuery('.header-wrap').offset().top - header_height;
            }
        }
    });

    if (window.matchMedia('(min-width: 768px)').matches) {
        $(".dropdown").hover(
                function () {
                    $('.dropdown-menu', this).stop(true, true).slideDown("fast");
                },
                function () {
                    $('.dropdown-menu', this).stop(true, true).slideUp("fast");
                }
        );
    }
    // ---------------------------------------------------------------------------------------
    // Scroll To Top Start

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.to-top').fadeIn();
        } else {
            $('.to-top').fadeOut();
        }
    });
    //Click event to scroll to top
    $('.to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    //Scroll To Top End
    // ---------------------------------------------------------------------------------------




    // ---------------------------------------------------------------------------------------
    // Brands Slider Start
    $("#brands-carousel-slider").owlCarousel({
		items:4,
		loop:true,
		margin:5,
		autoplay:true,
		autoplaySpeed:1000,
		autoplayHoverPause:true,
		nav:false,
		lazyLoad:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:false
			},
			600:{
				items:3,
				nav:false
			},
			1000:{
				items:4,
				nav:false,
			},
			
			1200:{
				items:5,
				nav:false,
			}
			
		}
	});
	   
   
    // Brands Slider End
    // ---------------------------------------------------------------------------------------


    // ---------------------------------------------------------------------------------------
    // Countdown Start
    if ($().countdown) {
        var austDay = new Date();
        austDay = new Date(2017, 4 - 1, 14);
        $('#dealCountdown1').countdown({until: austDay});
        $('#dealCountdown2').countdown({until: austDay});
        $('#dealCountdown3').countdown({until: austDay});
    }
    // Countdown End
    // ---------------------------------------------------------------------------------------

    new WOW().init();



});

// GOOGLE MAP


var myLatlng = new google.maps.LatLng(30.3834205, 77.9688908);
jQuery('#map').gMap({
			address: 'UPES management and Law College, Dehradun, Uttarakhand 248007, India',
			maptype: 'ROADMAP',
			zoom: 16,
			center: myLatlng,			
			markers: [
				{
					address: "UPES management and Law College",
					html: '<div><img src="img/upeslogo.jpg" /></div>',
					popup: true,
					icon: {
											
						image: "img/map-marker.png",
						iconsize: [50, 81],
						iconanchor: [50, 81]
					}
				}
			],
			doubleclickzoom: false,
			controls: {
				panControl: true,
					zoomControl: true,
					mapTypeControl: true,
					scaleControl: true,
					streetViewControl: true,
					overviewMapControl: true
			}
		});




$('.slimScroll').slimScroll({
        color: '#d80018',
		size: '5px',
		height: '180px',
		alwaysVisible: true,
		railVisible: true
  });


function showSpeakerDetails(speaker)
{
	$(".pranav").hide();
	$(".samira").hide();
	$(".rohit").hide();
	$(".saundarya").hide();
	$(".tripti").hide();
	$(".smriti").hide();
	$(".mandip").hide();
	
	if(speaker == "pranav")
	{
		$(".modal-title").html('Pranav Sharma');
		$(".modal-sub-title").html('Young Astrophysicist &amp; Poet');
	}
	else if(speaker == "samira")
	{
		$(".modal-title").html('Samira Gupta');
		$(".modal-sub-title").html("Motivational Speaker & Image Consultant");
	}
	else if(speaker == "rohit")
	{
		$(".modal-title").html('Rohit Khandelwal');
		$(".modal-sub-title").html("Mr. World 2016");
	}
	else if(speaker == "saundarya")
	{
		$(".modal-title").html('Saundarya Pathak');
		$(".modal-sub-title").html("India's youngest Table Tennis prodigy");
	}
	else if(speaker == "tripti")
	{
		$(".modal-title").html('Ms. Tripti Bhatt');
		$(".modal-sub-title").html("Youngest IPS Officer & SP Vigilance and Cyber Crime, Uttrakhand");
	}
	else if(speaker == "smriti")
	{
		$(".modal-title").html('Smriti Nagpal');
		$(".modal-sub-title").html("Sign Language News Anchor & Listed in BBC 100 Women List");
	}
	else if(speaker == "mandip")
	{
		$(".modal-title").html('Major Gen Mandip Singh');
		$(".modal-sub-title").html("Deputy Commandant, Indian Military Academy");
	}
	
	
	$("."+speaker).show();
	$("#speakerModal").modal('show');
	
}

function regiisterForTicket()
{
	var name	=	$.trim($("#txtRegName").val());
	var email	=	$.trim($("#txtRegEmail").val());
	var mobile	=	$.trim($("#txtRegPhone").val());
	var price	=	$.trim($("#selRegPrice").val());
	
	$("#spnregname").html('');
	$("#spnregemail").html('');
	$("#spnregmobile").html('');
	$("#spnregprice").html('');

	if(name == "")
	{
		$("#spnregname").html('Please enter your name');
	}
	else if(email == "")
	{
		$("#spnregemail").html('Please enter your email address');
	}
	else if(validateEmail(email) === false)
	{
		$("#spnregemail").html('Please enter a valid email address');
	}
	else if(mobile == "")
	{
		$("#spnregmobile").html('Please enter your mobile number');
	}
	else if(mobile.length!=10)
	{
		$("#spnregmobile").html('Please enter a valid mobile number');
	}
	else if(price == "")
	{
		$("#spnregprice").html('Please select your ticket price');
	}
	else
	{
		$(".registerResponse").html('<img src="./img/loading.gif" />');
		$(".registerResponse").show();
		
		$.ajax({
		  url: "./ajaxRegister.php",
		  type: "post",
		  data: {"name":name, "email":email, "mobile":mobile, "price":price, "action":"regMe"},
		  success: function(data){
		  data	=	$.trim(data);
		   if(data=='y')
		   {
				$(".registerResponse").html('<p class="white-color text-center wow fadeInDown" data-wow-delay="0.8s" style="font-size:16px; margin-top:10px;">Congratulation! You have been registered. For further processing, our team will get in touch with you or else contact Vinay +91 962 928 9896.</p>');
				
				$("#txtRegName").val('');
				$("#txtRegEmail").val('');
				$("#txtRegPhone").val('');
				$("#selRegPrice").val('');
			}
			else
			{
				
				$(".registerResponse").html('<p class="white-color text-center wow fadeInDown" data-wow-delay="0.8s" style="font-size:16px; margin-top:10px;">Oops! Something went wrong. Please try again or contact Vinay +91 962 928 9896.</p>');
			}
		  },
		  error:function(){
		  }
		});
		
		
		
	}
	
}

function validateEmail(sEmail)
{
	var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
	if (filter.test(sEmail)) {
		return true;
	}
	else {
		return false;
	}
}


function numbersonly(myfield, e, dec)
{
var key;
var keychar;

if (window.event)
   key = window.event.keyCode;
else if (e)
   key = e.which;
else
   return true;
keychar = String.fromCharCode(key);

// control keys
if ((key==null) || (key==0) || (key==8) ||
    (key==9) || (key==13) || (key==27) )
   return true;

// numbers
else if ((("0123456789").indexOf(keychar) > -1))
   return true;

// decimal point jump
else if (dec && (keychar == "."))
   {
   myfield.form.elements[dec].focus();
   return false;
   }
else
   return false;
}

function charatersonly(myfield, e, dec)
{
var key;
var keychar;

if (window.event)
   key = window.event.keyCode;
else if (e)
   key = e.which;
else
   return true;
keychar = String.fromCharCode(key);

// control keys
if ((key==null) || (key==0) || (key==8) ||
    (key==9) || (key==13) || (key==27) || (key==32) )
   return true;

// numbers
else if ((("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-").indexOf(keychar) > -1))
   return true;

// decimal point jump
else if (dec && (keychar == "."))
   {
   myfield.form.elements[dec].focus();
   return false;
   }
else
   return false;
}


function contactUs()
{
	var name	=	$.trim($("#txtName").val());
	var email	=	$.trim($("#txtEmail").val());
	var mobile	=	$.trim($("#txtMobile").val());
	var msg		=	$.trim($("#txtMessage").val());
	
	$("#spnconname").html('');
	$("#spnconmobile").html('');
	$("#spnconemail").html('');
	$("#spnconmsg").html('');

	if(name == "")
	{
		$("#spnconname").html('Please enter your name');
	}
	else if(mobile == "")
	{
		$("#spnconmobile").html('Please enter your mobile number');
	}
	else if(mobile.length!=10)
	{
		$("#spnconmobile").html('Please enter a valid mobile number');
	}
	else if(email == "")
	{
		$("#spnconemail").html('Please enter your email address');
	}
	else if(validateEmail(email) === false)
	{
		$("#spnconemail").html('Please enter a valid email address');
	}
	
	else if(msg == "")
	{
		$("#spnconmsg").html('Please enter your message');
	}
	else
	{
		$(".contactResponse").html('<img src="./img/loading.gif" />');
		$(".contactResponse").show();
		
		$.ajax({
		  url: "./ajaxContact.php",
		  type: "post",
		  data: {"name":name, "email":email, "mobile":mobile, "msg":msg, "action":"contactus"},
		  success: function(data){
		  data	=	$.trim(data);
		   if(data=='y')
		   {
				$(".contactResponse").html('<p class="text-center wow fadeInDown" data-wow-delay="0.8s" style="font-size:16px; margin-top:10px;color:#006600;">Thank you! our team will get in touch with you soon.</p>');
				
				$("#txtName").val('');
				$("#txtEmail").val('');
				$("#txtMobile").val('');
				$("#txtMessage").val('');
			}
			else
			{
				$(".contactResponse").html('<p class="text-red text-center wow fadeInDown" data-wow-delay="0.8s" style="font-size:16px; margin-top:10px;">Oops! Something went wrong. Please try again or contact Vinay +91 962 928 9896.</p>');
			}
		  },
		  error:function(){
		  }
		});
		
	}
	
}