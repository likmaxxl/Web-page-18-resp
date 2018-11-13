///Data Aos anim
AOS.init();

//
var m=0;
var lg=new String("M-TAL group");
var logo=document.getElementsByClassName('navbar-brand')[0];
setInterval(run,150);
function run () {
  if(m<lg.length){
    logo.innerHTML+=lg[m];
    m++
  }

}


$(document).ready(function() {
  $('.navbar-default .navbar-toggle').on('click', function() {
    $('#tog').slideToggle()
  })
  $('#tog').on('click', function() {
    $(this).hide()
  })
  //sadrzaj navigacija anim
  $('nav ul li a').on('click', function() {
    var ova = $(this).attr('href');
    var sp = $(ova).offset().top;
    $('html,body').animate({
      scrollTop: sp
    }, 500)
  })

  //procitaj vise dugme
  var procitajVise = $('.btn-custom').eq(0);
  var txt = $('.pp').eq(0);
  procitajVise.on('click', function() {
    $(txt).slideToggle(600);

  })

  //anim on scroll

  //#get touch (animation phone,animation text on blue backgrround),
  $(window).scroll(function() {
    var fromTop = $(window).scrollTop();
    var phone = $('.sv');
    var getTouch = $('.bltxt1');
    console.log(fromTop);
    if (fromTop > 100) {
      $(phone).addClass('sv1');
      $(getTouch).addClass('bltxt');

    }
  });
});
