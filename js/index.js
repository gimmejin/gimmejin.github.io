$(window).load(function(){
  var scrollPX = $(this).scrollTop();
  console.log(scrollPX);
  if (scrollPX > 150){
    console.log('hello');
    $('#p2 .content .content-title').css('visibility', 'visible');
    $('#p2 .content .content-title').addClass('animated fadeInLeft');
  }
  $(window).scroll(function(){
    var scrollPX = $(this).scrollTop();
    if (scrollPX > 150){
      $('#p2 .content .content-title').css('visibility', 'visible');
      $('#p2 .content .content-title').addClass('animated fadeInLeft');
    }
    if (scrollPX > 600){
      $('#p2 #circle_1').css('visibility', 'visible');
      $('#p2 #circle_1').addClass('animated fadeInLeft');
      $('#p2 #circle_2').css('visibility', 'visible');
      $('#p2 #circle_2').addClass('animated fadeInLeft delay-350ms');
      $('#p2 #circle_3').css('visibility', 'visible');
      $('#p2 #circle_3').addClass('animated fadeInLeft delay-700ms');
    }
    if (scrollPX > 1100){
      $('#p3 .content .sol-content').css('visibility', 'visible');
      $('#p3 .content .sol-content').addClass('animated fadeInRight');
    }
    if (scrollPX > 1400){
      $('#p3 .content .str-content').css('visibility', 'visible');
      $('#p3 .content .str-content').addClass('animated fadeInRight');
    }
    if (scrollPX > 2300){
      $('#p4 .content .divice-img').css('visibility', 'visible');
      $('#p4 .content .divice-img').addClass('animated fadeIn');
      $('#p4 .content .device-title').css('visibility', 'visible');
      $('#p4 .content .device-title').addClass('animated fadeInRight');
      $('#p4 .content .device-dec').css('visibility', 'visible');
      $('#p4 .content .device-dec').addClass('animated fadeInRight delay-350ms');
    }
    if (scrollPX > 5200){
      $('#p8 .content .content-title').css('visibility', 'visible');
      $('#p8 .content .content-title').addClass('animated fadeInLeft');
    }
    if (scrollPX > 6500){
      $('#p9 .content .content-title').css('visibility', 'visible');
      $('#p9 .content .content-title').addClass('animated fadeInLeft');
    }

  });

});
