// ---бургер ---
$(document).ready(function() {
  $('.js-example-basic-single').select2();


$('.menu-icon').on('click', function(){
    $(this).toggleClass('clicked');
    $('#header').toggleClass('open');
    $('body').toggleClass('fixed');
  });
// ---end  бургер ---
   
});

