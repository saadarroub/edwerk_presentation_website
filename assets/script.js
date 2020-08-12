/* ❤saad❤ */
(function($) { "use strict";
	$(function() {
		var header = $(".start-style");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();	
			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});			
  })(jQuery); 

  (function($) {
	"use strict";
	$('#customers-testimonials').owlCarousel({
		loop: true,
		center: true,
		items: 3,
		margin: 0,
		autoplay: true,
		dots:true,
		autoplayTimeout: 8500,
		smartSpeed: 450,
		responsive: {
		  0: {
			items: 1
		  },
		  768: {
			items: 2
		  },
		  1170: {
			items: 3
		  }
		}
	});
})(jQuery); 

(function($){ "use strict";
	$('#testimonial-slider').owlCarousel({
		loop: true,
		center: false,
		items: 3,
		margin: 0,
		autoplay: true,
		autoplayTimeout: 4500,
		smartSpeed: 450,
		responsive: {
			0: {
			  items: 1
			},
			768: {
			  items: 2
			},
			1170: {
			  items: 3
			}
		  }
	});
})(jQuery);






