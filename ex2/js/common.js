$(document).ready(function() {

// SIDEBAR PAGE LAYOUT

var sideColHeight = $('.side-colM').parent('.container').height();
$('.side-colM').height(sideColHeight);

/* Back to Top */
		var offset = 220;
		var duration = 500;
		$(window).scroll(function() {
			if ($(this).scrollTop() > offset) {
				$('.back-to-top').fadeIn(duration);
				$('header').addClass('scrollING');
			} else {
				$('.back-to-top').fadeOut(duration);
				$('header').removeClass('scrollING');
			}
		});
		
		$('.back-to-top').click(function(event) {
			event.preventDefault();
			$('html, body').animate({scrollTop: 0}, duration);
			return false;
		})

		
		
		// OWL
		
		$("#owl-carousel").owlCarousel({
	  	
		autoplay:false,
		
		loop:false, 
		itemsMobile : true,
		//nav:true,
		
	  	responsive:{  0:{ items:1}, 600:{items:2}, 960:{ items:3 },  1200:{items:5} }	
		
	  	});
		
		
		
		$("#owl-demo-3").owlCarousel({
	  	
		loop:true, 
		nav:true,
		responsive:{  0:{ items:1}, 600:{items:3}, 960:{ items:3 },  1200:{items:5} }		
		
	  	});
		
		$("#owl-demo-4").owlCarousel({
	  	
		loop:true, 
		nav:true,
		items:1	
		
	  	});
		
		
		
		

	}); 
	



//WOW ANimation
	$(document).ready(function(){
	    wow = new WOW (
	      {
	        animateClass: 'animated',
	       	mobile: false,
	        offset: 150
	      }
	    );
	    wow.init();
	});


//Navigation Animation

$(document).ready(function(){
	
	
//Pop Up Scripts//
/*
$('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
*/
	
	
	
	
	
	
$('#menu li').mouseenter(function(){	
		
		$(this).find('.main-a').addClass('bounceIn');
		//$(this).find('.span').addClass('fadeInUp');
		
		});
		
		
		$('#menu li').mouseleave(function(){	
		
		$('#menu li').find('.main-a').removeClass('animated, bounceIn');
		//$('#menu li').find('.span').removeClass('animated, fadeInUp');
		
		});
});		


//SCROLL HEADER TO FIXED POSITION


$(document).ready(function() {
    
	$('header').scrollToFixed({minWidth: 650});
	
	$('.page-tabs').scrollToFixed({                
		minWidth: 650,
		marginTop: $('header').outerHeight(true)				
	});
	
	
//-------------- PAGE SCROLL TABS------------------//	
	
	$('.page-tabs li').click(function(){
		$('.page-tabs li').removeClass('active');
		$(this).addClass('active');
		
	});
	
	
	$('.page-tabs li:nth-child(1)').click(function(){
		$('html, body').animate({scrollTop: $("#section1").offset().top - 150}, 500);
	});
	
	$('.page-tabs li:nth-child(2)').click(function(){
		$('html, body').animate({scrollTop: $("#section2").offset().top - 150}, 500);
	});
	
	$('.page-tabs li:nth-child(3)').click(function(){
		$('html, body').animate({scrollTop: $("#section3").offset().top - 100}, 500);
	});
		
});