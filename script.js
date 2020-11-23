

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
          tab_site.style.gridTemplateColumns = "1fr 1fr"
        }
        if(document.documentElement.clientWidth > 799) {
          tab_site.style.gridTemplateColumns = "1fr 1fr 1fr"
        }
        if(document.documentElement.clientWidth > 999) {
          tab_site.style.gridTemplateColumns = "1fr 1fr 1fr 1fr"
        }
        if(document.documentElement.clientWidth > 1200) {

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

//фиксация левого меню на 1200пкс
if (window.matchMedia('(min-width: 1200px)').matches){
  $('.nav-ls').toggleClass('nav-ls--active'); 
  $(".main-screen").animate({
    width : "85%",
    marginLeft: '15%'
  });
  $(".header__menu-btn").removeAttr("style").hide();
}

var i = 0;
var tab_site = document.querySelector('.tab--site');
//Левое меню и кнопка
function menu_toggle(){
  $('.header__menu-btn').toggleClass('menu-active'); //кнопка
  $('.nav-ls').toggleClass('nav-ls--active');  //левое меню
  if (window.matchMedia('(max-width: 829px)').matches){
    //для мобильной
    $('.page-main').toggleClass('content--active'); //контент
    $('.mobile-bg').toggleClass('mobile-bg--active'); //затемнение на мобилке
  }else{
    //для десктоп версии
    if (i % 2 == 0){
      tab_site_grid('less');
      $(".main-screen").animate({
        width : "80%",
        marginLeft: '20%'
      });
    }else{
      tab_site_grid('more');
      $(".main-screen").animate({
        width : "100%",
        marginLeft: '0%'
      });
    }
    
  }
  i++;
}

function tab_site_grid(x){
  //позиционирование элементов внутри tab--site в зависимости от ширины экрана и левого меню
  var tab_site_width = tab_site.offsetWidth;
  if (x == 'less'){
    if (tab_site_width < 690){
      tab_site.style.gridTemplateColumns = "1fr 1fr"
    }
    if ((tab_site_width > 769)&&(tab_site_width < 960)){
      tab_site.style.gridTemplateColumns = "1fr 1fr 1fr"
    }
   
  }
  if (x == 'more'){
    if (tab_site_width < 690){
      tab_site.style.gridTemplateColumns = "1fr 1fr 1fr"
    }
    if (tab_site_width > 569){
      tab_site.style.gridTemplateColumns = "1fr 1fr 1fr 1fr"
    }
  }
    
}

if (window.matchMedia('(max-width: 700px)').matches){
  //правое меню для мобилки
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