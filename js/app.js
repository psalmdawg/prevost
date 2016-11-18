
$( document ).ready(function() {
  console.log( "ready!");
  $(".trigger").addClass('hidden');
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
      $( ".hidden" ).fadeToggle( "slow", "linear" );

      $('.outer-home').removeClass( "opaque" );
      $('.navo').removeClass("hide-right")
      $('.menu-icon').removeClass("rotate")
      $('.social-media').removeClass("hide-left");
      $(".trigger").addClass('hidden');
      $(".home").removeClass("hide");
    } else {
      $( ".hidden" ).fadeToggle( "slow", "linear" );

      $('.outer-home').addClass( "opaque" );
      $(".trigger").removeClass("hidden");
      $(".home").addClass("hide");
      $('.navo').addClass( "hide-right" );
      $('.social-media').addClass("hide-left");
    }
  })

});
