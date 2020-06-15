$(document).ready(function(){
   $(".owl-carousel").owlCarousel({
   	loop: true,
  	responsiveClass:true,
  	responsiveRefreshRate: 15,
  	responsive: {
  		0: {
  			dots: true,
  			dotsEach: true,
  			items: 1
  		},
  		576: {
  			dots: true,
  			dotsEach: true,
  			items: 2
  		},
  		1024: {
  			dots: false
  		}
  	}
   });

  var owl = $(this).find('.owl-carousel').owlCarousel({
  	
  });


  $(this).find('.left-arrow').on('click', function () {

    owl.trigger('prev.owl.carousel');
  });


  $(this).find('.right-arrow').on('click', function () {

    owl.trigger('next.owl.carousel');
  });
});