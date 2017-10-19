$(document).ready(function () {
    svg4everybody({});
    $("input[name=phone]").mask("+7(999) 999-99-99", {
        noAutoClear: ''
    });

    $(window).scroll(function () {
        var $sections = $('section');
        $sections.each(function (i, el) {
            var top = $(el).offset().top - 100;
            var bottom = top + $(el).height();
            var scroll = $(window).scrollTop();
            var id = $(el).attr('id');
            if (scroll > top && scroll < bottom) {
                $('.main-nav-list__link.main-nav-list__link--active').removeClass('main-nav-list__link--active');
                $('a[href="/#' + id + '"]').addClass('main-nav-list__link--active');

            }
        })
    });

    $('.banner-play').magnificPopup();

    $('.h-popup-link').magnificPopup({
        showCloseBtn: false
    });
    $('.popup-link').magnificPopup({
        showCloseBtn: false,
        callbacks: {
            open: function () {
                var pop = $.magnificPopup.instance.index;
                $('.js-advantage-info__slider').slick('setPosition');
                $('.js-advantage-info__slider').slick('slickGoTo', pop);
            }
        }
    });
    $('.popup-close').on("click", function () {
        $.magnificPopup.close();
    });
    $(document).on("click", ".sandwich", function () {
        $(this).toggleClass('sandwich--active');
        $('.wrapper-inn').toggleClass('wrapper-inn--menu-show');
        $('.main-nav-mobile').toggleClass('main-nav-mobile--show');
        $('header').toggleClass('header-mobile--show');
    });
    $('.js-advantage-info__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '.advantage-slider-prev',
        nextArrow: '.advantage-slider-next',
    });

    $('.js-gallery-slider').each(function (idx, item) {
        var gallerySlider = "carousel" + idx;
        this.id = gallerySlider;
        $(this).slick({
            slide: "#" + gallerySlider + " .gallery-slider-item",
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            dots: true,
            customPaging: function () {
                return '<a class="slider-dot gallery-dot"></a>';
            },
            appendArrows: "#" + gallerySlider + " .gallery-controls",
            prevArrow: '<div class="slider-controls slider-controls--prev gallery-prev"> <svg class="icon icon-arrow-left "> <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/bitrix/templates/ollila/static/img/svg/symbol/sprite.svg#arrow-left"></use> </svg> </div>',
            nextArrow: '<div class="slider-controls slider-controls--next gallery-next"> <svg class="icon icon-arrow-right "> <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/bitrix/templates/ollila/static/img/svg/symbol/sprite.svg#arrow-right"></use> </svg> </div>',
            responsive: [
                {
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: 2,
                    }
                }, {
                    breakpoint: 700,
                    settings: {
                        arrows: false,
                        slidesToShow: 1
                    }
                }
            ]
        });
    });


    function headerScroll() {
        if ($(window).scrollTop() > 150) {
            $('header').addClass('slicky');
        } else {

            $('header').removeClass('slicky');
        }
    }

    if ($(window).width() < 850) {
        $('.advantages-block').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false,
            arrows: false,
            dots: true,
            customPaging: function () {
                return '<a class="slider-dot gallery-dot"></a>';
            },
            responsive: [
                {
                    breakpoint: 500,
                    settings: {
                        centerMode: true,
                        centerPadding: '30px',
                        slidesToShow: 1
                    }
                }
            ]
        })
    }

    function bannerScroll() {
        var banner = $('.banner'),
            advantages = $('.s-advantages'),
            wScroll = $(window).scrollTop();
        if (wScroll > 150) {
            banner.addClass('banner-half-opacity');
            advantages.addClass('adv-half-opacity');
        } else {
            banner.removeClass('banner-half-opacity');
            advantages.removeClass('adv-half-opacity');
        }
    }

    headerScroll();
    bannerScroll();

    $(window).scroll(function () {
        headerScroll();
        bannerScroll();
    });

    $('.tabs-list li').click(function () {
        var tabName = $(this).attr('show-tab');
        $(this).addClass('tabs-list__item--active').siblings().removeClass('tabs-list__item--active');
        $('.tabs-content .' + tabName).addClass('tab--active').siblings().removeClass('tab--active');
        if ($(this).attr('show-tab') === 'tab-choose-list') {
            $('.choose-actions').addClass('choose-actions--black');
        } else if ($(this).attr('show-tab') === 'tab-choose-map') {
            $('.choose-actions').removeClass('choose-actions--black');
        }
        if ($('div').is('.js-gallery-slider')) {
            $('.js-gallery-slider').slick('setPosition');
        }
    });


    $('.js-house-tab__link').click(function () {
        var tabName = $(this).attr('show-tab');
        $(this).addClass('js-house-tab__link--active').siblings().removeClass('js-house-tab__link--active');
        $('.js-house-tabs-content .' + tabName).addClass('js-house-tab--active').siblings().removeClass('js-house-tab--active');
    });

    $(document).on('click', '.main-nav-list__link', function () {
        $('.main-nav-list__link').removeClass('main-nav-list__link--active');
        $(this).addClass('main-nav-list__link--active');

    });

    if ($('video').is('#top-video')) {
        window.addEventListener('load', function () {
            var video = document.querySelector('#top-video'),
                videoPlaceholder = document.querySelector('.banner-video__placeholder');

            function checkLoad() {
                if (video.readyState === 4) {
                    $(videoPlaceholder).hide();
                } else {
                    setTimeout(checkLoad, 100);
                }
            }

            checkLoad();
        }, false);
    }

    $('.scroll-link')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            $('.main-nav-mobile').removeClass('main-nav-mobile--show');
                            $('.wrapper-inn').removeClass('wrapper-inn--menu-show');
                            $('.slicky').removeClass('header-mobile--show');
                            $('.sandwich').removeClass('sandwich--active');
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        }
                    });
                }
            }
        });

    $(document).on('click', '.house-list__title', function () {
        var el = $(this).parent(),
            hideList = el.find('.house-list__content');
        if (el.hasClass('house-list__item--active')) {
            el.removeClass('house-list__item--active');
        } else {
            $('.house-list__item').removeClass('house-list__item--active');
            el.addClass('house-list__item--active');
        }

        if (hideList.is(':visible')) {
            hideList.slideUp();
        } else {
            $('.house-list__content').slideUp();
            hideList.slideDown();
        }
    });

    $('.house-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {}
    });

    function gallery(elem) {

        $(elem).magnificPopup({
            delegate: '.gallery-slider__link',
            type: 'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            },
            image: {}
        });
    }

    gallery('.tab-gallery-ext');
    gallery('.tab-gallery-int');
    gallery('.tab-gallery-territory');

    $(document).on('click', '.map-popup-nav-link:not(.house-info-close)', function () {
        var el = $(this).closest('.map-popup'),
            nav = $(this).data('nav');
        el.removeClass().addClass('map-popup map-popup--show map-popup--' + nav);
    });

    $(document).on('click', '.map-popup__close, .map-popup-close-mobile', function () {
        var el = $(this).closest('.map-popup');
        el.removeClass().addClass('map-popup--housing map-popup').children().removeClass('show');
    });

    $('.house-info-close').on('click',function(e){
        var el = $(this).closest('.map-popup');
        el.removeClass().addClass('map-popup--housing map-popup').children().removeClass('show');
        $(this).closest('.map-p-screen--house-info').removeClass('show');

    })

    $('.map-popup-back').on('click',function(e){
        var par = $(this).closest('.map-p-screen');
        par.removeClass('show');
        if(par.hasClass('map-p-screen--house-info') || par.hasClass('map-p-screen--house-book')){
            var id = par.attr('id');
            id = id.slice(0, -1);
            console.log(id);
            $('#'+id).addClass('show');
        }
    })
    $('.house-list__line').on('click',function(e){
        var h = $(this).data('house');
        var korp = h.slice(0,-2);
        $('.tabs-list__item').eq(0).addClass('tabs-list__item--active').siblings().removeClass('tabs-list__item--active');
        $('.choose-actions').removeClass('choose-actions--black');
        $('.tab-choose-map').addClass('tab--active').siblings().removeClass('tab--active');
        $('.map-popup').removeClass('map-popup--show');
        $('#housing'+korp).addClass('map-popup--show').find('.sections[data-house='+h+']').trigger('click');
    })


    $(document).on('click', '.map-compass', function () {
        var el = $('.map-popup');
        el.addClass('map-popup--show');
    });

    $(document).on('click','.sections:not(.sold)',function(e){
        var el = $(this).closest('.map-popup'),
            id = $(this).data('house');
        el.removeClass().addClass('map-popup map-popup--show map-popup--house');
        el.find('.map-p-screen--house').removeClass('show');
        $('#t'+id).addClass('show');
    })

    $('.house-prev-img').on('click',function(e){
        var el = $(this).closest('.map-p-screen--house');
        var id = el.attr('id');
        el.removeClass('show');
        $('#'+id+'i').addClass('show');
    })
    $('.map-popup-nav-link.g-btn').on('click',function(e){
        var par = $(this).closest('.map-p-screen');
        var id = par.attr('id');
        var korp = id.slice(-1);
        par.removeClass('show').siblings('.map-p-screen--house-book').attr('id',id+'b').find('.house-book__descr').html('Таунхаус '+korp);

    })

});


if ($('div').is('#office-map')) {
    ymaps.ready(function () {
        var myMap = new ymaps.Map('office-map', {
                center: [59.934632, 30.299339],
                zoom: 15
            }, {
                searchControlProvider: 'yandex#search'
            }),
            myPlacemark = new ymaps.Placemark([59.934632, 30.299339], {
                hintContent: '',
                balloonContent: ''
            }, {
                iconLayout: 'default#image',
                iconImageHref: '/bitrix/templates/ollila/static/img/general/map-dot.png',
                iconImageSize: [30, 42]
            });

        myMap.geoObjects
            .add(myPlacemark);
        myMap.behaviors.disable('scrollZoom');
        myMap.controls.remove('trafficControl').remove('searchControl').remove('typeSelector').remove('geolocationControl').remove('fullscreenControl').remove('rulerControl');
    });
}
if ($('div').is('#sell-map')) {
    ymaps.ready(function () {
        var myMap = new ymaps.Map('sell-map', {
                center: [59.934632, 30.299339],
                zoom: 15
            }, {
                searchControlProvider: 'yandex#search'
            }),
            myPlacemark = new ymaps.Placemark([59.934632, 30.299339], {
                hintContent: '',
                balloonContent: ''
            }, {
                iconLayout: 'default#image',
                iconImageHref: '/bitrix/templates/ollila/static/img/general/map-dot.png',
                iconImageSize: [30, 42]
            });

        myMap.geoObjects
            .add(myPlacemark);
        myMap.behaviors.disable('scrollZoom');
        myMap.controls.remove('trafficControl').remove('searchControl').remove('typeSelector').remove('geolocationControl').remove('fullscreenControl').remove('rulerControl');
    });
}
if ($('div').is('#location-map')) {
    ymaps.ready(function () {
        var myMap = new ymaps.Map('location-map', {
                center: [60.16352, 29.22874],
                zoom: 14
            }, {
                searchControlProvider: 'yandex#search'
            }),
            myPlacemark = new ymaps.Placemark([60.16352, 29.22874], {
                hintContent: '',
                balloonContent: ''
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'img/map-dot.png',
                iconImageSize: [30, 42]
            });

        myMap.geoObjects
            .add(myPlacemark);
        myMap.behaviors.disable('scrollZoom');
        myMap.controls.remove('trafficControl').remove('searchControl').remove('typeSelector').remove('geolocationControl').remove('fullscreenControl').remove('rulerControl');
    });
}
if ($('div').is('#location-near')) {
    ymaps.ready(function () {
        var myMap = new ymaps.Map('location-near', {
                center: [60.16352, 29.22874],
                zoom: 14
            }, {
                searchControlProvider: 'yandex#search'
            });
            myPlacemark = new ymaps.Placemark([60.16352, 29.22874], {
                hintContent: '',
                balloonContent: ''
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'img/map-dot.png',
                iconImageSize: [30, 42]
            });
            myPlacemark1 = new ymaps.Placemark([60.149678, 29.945622], {
                hintContent: 'Частный детский сад',
                balloonContent: 'Частный детский сад'
            }, {
                preset: 'islands#blueFamilyIcon'
            });
            myPlacemark2 = new ymaps.Placemark([60.152085, 29.937661], {
                hintContent: 'Теннисный корт',
                balloonContent: 'Теннисный корт'
            }, {
                preset: 'islands#blueRunIcon'
            });
            myPlacemark3 = new ymaps.Placemark([60.148557, 29.935813], {
                hintContent: 'Продукты',
                balloonContent: 'Продукты'
            }, {
                preset: 'islands#blueShoppingIcon'
            });
            myPlacemark4 = new ymaps.Placemark([60.152180, 29.951022], {
                hintContent: 'Продукты',
                balloonContent: 'Продукты'
            }, {
                preset: 'islands#blueShoppingIcon'
            });
            myPlacemark5 = new ymaps.Placemark([60.146670, 29.962587], {
                hintContent: 'Продукты',
                balloonContent: 'Продукты'
            }, {
                preset: 'islands#blueShoppingIcon'
            });
            myPlacemark6 = new ymaps.Placemark([60.147056, 29.962094], {
                hintContent: 'Продукты',
                balloonContent: 'Продукты'
            }, {
                preset: 'islands#blueShoppingIcon'
            });
            myPlacemark7 = new ymaps.Placemark([60.146617, 29.959927], {
                hintContent: 'Волейбольная площадка',
                balloonContent: 'Волейбольная площадка'
            }, {
                preset: 'islands#blueRunIcon'
            });
            myPlacemark8 = new ymaps.Placemark([60.140587, 29.930818], {
                hintContent: 'Ласковый пляж',
                balloonContent: 'Ласковый пляж'
            }, {
                preset: 'islands#blueBeachIcon'
            });
        myPlacemark9 = new ymaps.Placemark([60.140748, 29.948729], {
                hintContent: 'Школа',
                balloonContent: 'Школа'
            }, {
                preset: 'islands#blueFamilyIcon'
            });
           myPlacemark10 = new ymaps.Placemark([60.159238, 29.925098], {
                hintContent: '',
                balloonContent: ''
            }, {
                iconLayout: 'default#image',
                iconImageHref: '/bitrix/templates/ollila/static/img/general/map-dot.png',
                iconImageSize: [30, 42]
            });

        myMap.geoObjects
            .add(myPlacemark);
        myMap.geoObjects
            .add(myPlacemark1);
        myMap.geoObjects
            .add(myPlacemark2);
        myMap.geoObjects
            .add(myPlacemark3);
        myMap.geoObjects
            .add(myPlacemark4);
        myMap.geoObjects
            .add(myPlacemark5);
        myMap.geoObjects
            .add(myPlacemark6);
        myMap.geoObjects
            .add(myPlacemark7);
        myMap.geoObjects
            .add(myPlacemark8);
        myMap.geoObjects
            .add(myPlacemark9);
           myMap.geoObjects
            .add(myPlacemark10);
        myMap.behaviors.disable('scrollZoom');
        myMap.controls.remove('trafficControl').remove('searchControl').remove('typeSelector').remove('geolocationControl').remove('fullscreenControl').remove('rulerControl');
    });
}

$("form").on("submit", function (e) {
    e.preventDefault();
    //var formID = '#' + $(this).attr("id");
    $(this).validate({
        rules: {
            name: 'required',
            mail: 'required',
            phone: 'required'
        },
        messages: {
            name: 'Заполните поле, пожалуйста',
            mail: 'Заполните поле, пожалуйста',
            phone: 'Заполните поле, пожалуйста'
        }
    });
    if ($(this).valid()) {
        var form = $(this);
        var id = form.closest('.map-p-screen--house-book').attr('id');
        var full = id.split('_'),
            korp = full[0].slice(1),
            ths = full[1].slice(0,-1),
            name = form.find('input[name=name]').val(),
            mail = form.find('input[name=mail]').val(),
            phone = form.find('input[name=phone]').val();
        var request = 'korp='+korp+'&ths='+ths+'&name='+name+'&mail='+mail+'&phone='+phone;
        $.post('/bitrix/templates/ollila/nks/forms.php', request, function(data){
            form.html('<h3>Спасибо за заявку. <br> Наши менеджеры свяжутся с Вами в ближайшее время</h3>')
        })
    } else {
    }
    return false;
});