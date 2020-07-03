$(document).ready(function(){
   $(".owl-carousel").owlCarousel({
    margin: 30,
   	loop: true,
  	responsiveClass:true,
  	responsiveRefreshRate: 15,
  	responsive: {
  		0: {
  			dots: true,
  			dotsEach: true,
  			items: 1
  		},
  		750: {
  			dots: true,
  			dotsEach: true,
  			items: 2
  		},
  		1300: {
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

  $(".callback").click(function(){
    $("#modal-callback").addClass("opened")
    $(".modal-overlay").addClass("opened")
    $("body").addClass("hidden")
  });
  $(".regular").click(function(){
    $("#modal-more").addClass("opened")
    $(".modal-overlay").addClass("opened")
    $("body").addClass("hidden")
  });
  $("#close-button-more").click(function(){
    $("#modal-more").removeClass("opened")
    $(".modal-overlay").removeClass("opened")
    $("body").removeClass("hidden")
  });
  $("#close-button-callback").click(function(){
    $("#modal-callback").removeClass("opened")
    $(".modal-overlay").removeClass("opened")
    $("body").removeClass("hidden")
  });
  $(".modal-overlay").click(function(){
    $(this).removeClass("opened")
    $("body").removeClass("hidden")
    $("#modal-callback").removeClass("opened")
    $("#modal-more").removeClass("opened")
    $(".aside-menu").removeClass("aside-menu-opened")
  })
  $(".menu-btn").click(function(){
    $(".aside-menu").addClass("aside-menu-opened")
    $(".modal-overlay").addClass("opened")
  })
  $(".aside-nav__link").click(function(){
    $(".aside-menu").removeClass("aside-menu-opened")
    $(".modal-overlay").removeClass("opened")
  })
});