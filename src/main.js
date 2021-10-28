

jQuery(function($) {

  $(document).ready(function () {

    $('.burger').on('click', function () {
      $('.header').toggleClass('header-opened');
    });

    var itemContent = $('.conduct-nav__item-content:first');
    $('.conduct-content').html(itemContent.html());

    $('.conduct-nav__item').on('click', function () {
      $('.conduct-nav__item').removeClass('active');
      $(this).addClass('active');
      itemContent = $(this).find('.conduct-nav__item-content');

      if (window.matchMedia("(max-width: 767.98px)").matches) {
        $('.popup__insert').html(itemContent.html());
        $('.popup_adv').fadeIn();
      } else {
        $('.conduct-content').html(itemContent.html());
      }
    });

    // --- mask ---

    $("input[type=tel]").mask("+7 (999)999-99-99");

    // --- page nav ---

    var headerH = $("header").innerHeight();

    $(window).scroll(function(){
      var $sections = $('section');
      $sections.each(function(i,el){
        var top  = $(el).offset().top-200;
        var bottom = top +$(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
        if( scroll > top && scroll < bottom){
          $('li.active').removeClass('active');
          $('a[href="#'+id+'"]').closest('li').addClass('active');
        }
      })
    });

    $(".header__menu, .header__logo, .footer__logo").on("click","a", function (event) {
      // исключаем стандартную реакцию браузера
      event.preventDefault();
      // получем идентификатор блока из атрибута href
      var id  = $(this).attr('href'),
        // находим высоту, на которой расположен блок
        top = $(id).offset().top;
      // анимируем переход к блоку, время: 800 мс
      $('body,html').animate({scrollTop: top - headerH}, 800);

      setTimeout(function(){
        $('.header').removeClass('header-opened');
      }, 900);

    });

    // --- popups ---

    $('body').on('click','.popup__close, .popup__back', function () {
      $('.popup').fadeOut();
    });

    $('.first-top .def-button').on('click', function () {
      $('.popup_quiz').fadeIn();
    });

    // --- arrow up ---

    $(window).on('scroll', function () {
      if (pageYOffset > 90) {
        $('.arrow').fadeIn();
      } else {
        $('.arrow').fadeOut();
      }
    });
    $('.arrow').on('click', function () {
      $('html, body').animate({scrollTop:0}, '300');
    });

    // --- sliders ---

    if (window.matchMedia("(max-width: 1199.98px)").matches){
      $('.context-slider').slick({
        slidesToShow: 1,
        dots: false,
        arrows: true,
        mobileFirst: true,

      });
    }

    $('.cases-slider').slick({
      slidesToShow: 1,
      dots: false,
      arrows: true,
      adaptiveHeight: true,
      //nextArrow: $('.cases-slider__arrows .next'),
      //prevArrow: $('.cases-slider__arrows .prev'),
    });

    // POPUP FORM ON

    $(".popup_quiz form").submit(function (e) {
      var formData = new FormData($(this)[0]);
      //var data = new FormData();
      $.ajax({
        url: 'scripts/mail.php',
        type: "POST",
        data: formData,
        async: false,
        success: function (msg) {
          console.log('YEP');
          $('.popup_quiz').fadeOut();
        },
        error: function (msg) {
          alert('Ошибка!');
        },
        cache: false,
        contentType: false,
        processData: false
      });
      e.preventDefault();
    });

    // POPUP FORM OFF

  });

});


