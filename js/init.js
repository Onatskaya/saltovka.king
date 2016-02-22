$(document).ready(function() {

  /* Новости на главной */
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

  /* Навигация */
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
  /*$('#couches').height($(document).height());
  $('#couches').width($(document).width());*/
  $('#theCouch').height($(document).height());
  $('#theCouch').width($(document).width());

  /* Цены */
  $( "#prices_accordion" ).accordion({
      heightStyle: "content",
      collapsible: true
  });

    /* Расписание */
  $( "#schedule_accordion" ).accordion({
      heightStyle: "content",
      collapsible: true,
      active: false
  });
  
  /* Расписание */
  $( ".theCouch-schedule" ).accordion({
      heightStyle: "content",
      collapsible: true,
      active: false
  });
  
  /* Галерея */
  $('#photo_gallery').photobox('a',{ time:0 });

  /* Фото тренировочного процесса */
  $('#theCouch .photos').photobox('a',{ time:0 });

  /* Слайдер тренеров */
  $('#couches_slider').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  });

  /* Гугл карта */
    google_maps(); // Load google maps onload page

    function google_maps() {
      var latlng = new google.maps.LatLng(50.032145, 36.356553);
      var settings = {
          zoom: 16,
          center: latlng,
          mapTypeControl: false,
          mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
          scrollwheel: false,
          disableDoubleClickZoom: true,
          navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
          mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(document.getElementById("map"), settings);
      var myLatlng = new google.maps.LatLng(50.032145, 36.356553);
      
      var myOptions = {
          zoom: 16,
          center: myLatlng,
          scrollwheel: false,
          disableDoubleClickZoom: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      // Создаем и размещаем маркер на карте

      var marker = new google.maps.Marker({  
        position: new google.maps.LatLng(50.032145, 36.356553),  
        map: map,  
        title: 'Фитнес-центр King',  
        clickable: false,  
        scrollwheel: false,
        icon: 'marker_icon.png' 
      }); 
  };

  

})