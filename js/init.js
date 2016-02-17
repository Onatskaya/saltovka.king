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

  $('#navbar').scrollspy();
  
  $('#home').height($(window).height());
  $('#home').width($(window).width());
  $('#about').height($(document).height());
  $('#about').width($(document).width());
  $('#news').height($(document).height());
  $('#news').width($(document).width());
  $('#vacancy').height($(document).height());
  $('#vacancy').width($(document).width());
  $('#rulls').height($(document).height());
  $('#rulls').width($(document).width());

  $( "#prices_accordion" ).accordion({
    heightStyle: "content",
    collapsible: true
  });
  
})