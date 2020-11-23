

$('.header__menu-btn').click(function(){
  menu_toggle();
})

var cachedWidth = $(window).width();
$(window).resize(function(){
    var newWidth = $(window).width();
    if(newWidth !== cachedWidth){
      $(window).resize(function() {
        if(document.documentElement.clientWidth > 700) {
          $('.nav-rs__hide-wrp').slideDown();
        }
        if(document.documentElement.clientWidth < 700) {
          $('.nav-rs__hide-wrp').slideUp();
        }
      });

      $(window).resize(function() {
      });
        cachedWidth = newWidth;
    }
});

var i = 0;
function menu_toggle(){
  $('.header__menu-btn').toggleClass('menu-active');
  $('.nav-ls').toggleClass('nav-ls--active');
  if (window.matchMedia('(max-width: 829px)').matches){
    $('.page-main').toggleClass('content--active');
    $('.mobile-bg').toggleClass('mobile-bg--active');
  }else{
    if (i % 2 == 0){
      $(".main-screen").animate({
        width : "80%",
        marginLeft: '20%'
      });
    }else{
      $(".main-screen").animate({
        width : "100%",
        marginLeft: '0%'
      });
    }
  }
  i++;

}

  if (window.matchMedia('(max-width: 700px)').matches){
    $('.nav-rs__hide-wrp').slideUp();
    $('.nav-rs__btn--active').click(function(){
      $('.nav-rs__hide-wrp').slideToggle();
      $('.nav-rs__marker').toggleClass('nav-rs__marker--active');
    });
  }else{
    $('.nav-rs__hide-wrp').slideDown();
  }



/*
var nav_rs_hide = $('.nav-rs__btn--hide');
var nav_rs_active = $('.nav-rs__btn--active');
nav_rs_hide.click(function(){
  var copy_rs_from = $(nav_rs_hide).clone(true);
  var copy_rs_to = $(nav_rs_active).clone(true);
  el = copy_rs_to;
  $('.nav-rs__btn--shops').replaceWith(copy_rs_from);

  
})
*/

/*
$('#tg').click(function(){
  let tg = $('.nav-rs__btn--active').cloneNode(true);
  tg.insertAdjacentHTML('beforebegin', tg);
})*/
/*

*/