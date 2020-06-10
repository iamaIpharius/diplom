$(document).ready(function(){
   
  var owl = $(this).find('.owl-carousel').owlCarousel({
  	loop: true,
  	dots: false
  });

  // При клике по кнопке Влево
  $(this).find('.left-arrow').on('click', function () {
    // Перематываем карусель назад
    owl.trigger('prev.owl.carousel');
  });

  // При клике по кнопке Вправо
  $(this).find('.right-arrow').on('click', function () {
    // Перематываем карусель вперед
    owl.trigger('next.owl.carousel');
  });
});