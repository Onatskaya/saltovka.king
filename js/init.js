$(document).ready(function() {

  $('#home_news').slick({
  	responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '0'
      }
    }
  ]
  });

  $('#home').height($(window).height());
  $('#home').width($(window).width());
})