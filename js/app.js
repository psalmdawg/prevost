
$( document ).ready(function() {
  console.log( "ready!");
  // $(".trigger").addClass('hidden');
  $(".home").removeClass("hide");

  $('.trigger').click(function(){
    $('.menu-icon').toggleClass("rotate")
    $('.navo').toggleClass( "hide-right" );
    $('.social-media').toggleClass("hide-left");
  });

  $('.nav-ul>li').click(function(){
    console.log(this + ' was clicked')
    $('.menu-icon').removeClass("rotate")
  })

  $(document).scroll(function() {
    var scrollPosition = $(document).scrollTop()
    if(scrollPosition < 50){
      // $( ".hidden" ).fadeOut( "slow", "linear" );

      $('.navo').removeClass("hide-right")
      $('.menu-icon').removeClass("rotate")
      $('.social-media').removeClass("hide-left");
      $(".trigger").addClass('hidden');
      $(".home").removeClass("hide");
    } else {
      // $( ".hidden" ).fadeIn( "slow", "linear" );
      $('.menu-icon').removeClass("rotate")
      $(".trigger").removeClass("hidden");
      $(".home").addClass("hide");
      $('.navo').addClass( "hide-right" );
      $('.social-media').addClass("hide-left");
    }
  })


  $(document).scroll(function() {
    var scrollPosition = $(document).scrollTop()
    // console.log(scrollPosition)
    if(scrollPosition > 310){
      // $( ".main-image" ).fadeOut( "slow", function() {
          $(".main-image img").addClass('opaque');
      // });
    };
    if(scrollPosition < 310){
      // $( ".main-image" ).fadeIn( "slow", function() {
      $(".main-image img").removeClass('opaque');      // });
    };
    // if(scrollPosition < 256){
    //   $( ".main-image" ).fadeIn( "slow", function() {
    //       show();
    //   });
    // }
  });

});
