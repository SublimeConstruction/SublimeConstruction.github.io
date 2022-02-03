$(document).foundation()

$(document).ready(function(){

// slick code

$('.accredslider').slick({
    autoplay: false,
    arrows: false,
    fade: false,
    speed: 1200,
    autoplaySpeed: 5000,
    caption: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1366,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

if($(window).width() < 1025) {
        $('.circles').addClass('circleslider');
};

if($(window).width() < 870) {
    $(".sub").click(function () {
        $('.sub').toggleClass('subup');
    });
};

$('.circleslider').slick({
    autoplay: false,
    arrows: false,
    fade: false,
    speed: 1200,
    autoplaySpeed: 5000,
    caption: false,
    slidesToShow: 1,
    slidesToScroll: 1,
});

// Vegas Code

$(".vegas").vegas({
    slides: [
        { src: "media/images/header1.jpg" },
        { src: "media/images/header2.jpg" },
    ],
    animation: [ 'random' ],
    transition: 'slideLeft',
    autoplay: true,
    timer: false,
    delay: '8000',
    cover: true,
});

//autoheight

var cw = $('.servcircle').width();
$('.servcircle').css({
    'height': cw + 'px'
});

// Nav Code

$(".fa-bars").click(function () {
  $('nav').slideToggle();
  $('.fa-bars').toggleClass('fa-times');
});

$(".sub").click(function () {
  $(this).next('ul').slideToggle();
});

//sticky nav

$(".titleholder").stick_in_parent();

// contentfades

$(function(){  // $(document).ready shorthand
  $('.monster').fadeIn('slow');
});

$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1', 'top':'0'},1200);
                    
            }
            
        }); 
    
    });
    
});



});