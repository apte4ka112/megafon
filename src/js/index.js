$(document).ready(function () {
    $('.accordion__head').on('click', function (e) {
        var parent = $(this).parent();
        $('.accordion__content', parent).slideToggle(parent.is('.accordion__item-collapsed'));
        parent.toggleClass('accordion__item-collapsed');
    });
    $('.accordion__item').on('click', function (e) {
        $('.accordion__item').removeClass('accordion__item_active');
        var image = $(this).attr('data-image');
        var animate = $('.accordion_theme_image').attr('data-duration'); // Скорость анимации 
        $('.accordion_theme_image').css('backgroundImage', 'url(' + image + ')');
        $(this).addClass('accordion__item_active');
        //Даём первой анимации дойти до конца
        $('.accordion_theme_image').addClass('disabled');
        setTimeout(function () {
            $('.accordion_theme_image').removeClass('disabled');
        }, animate);
    })
    //Добавляем фон при первой загрузки
    $('.accordion__item_active').each(function (i) {
        var image = $(this).attr('data-image');
        $(this).parent().parent().css('backgroundImage', 'url(' + image + ')')
    });
    //tabs
    $(".tabs .tabs__item").on('click', function (event) {
        event.preventDefault();
        $(".tabs .tabs__item").removeClass("tabs__item_active");
        $(this).addClass("tabs__item_active");
        var tab = $(this).attr("href");
        console.log(tab)
        $(".tabs  .tabs__content").not(tab).css("display", "none");
        $(tab).show();
        return false;
    });
 
    //slider
    $(window).on('resize', function () {
        if ($(window).width() <= 1019) {
            $('.sliderTrif , .sliderCard').addClass('owl-carousel');
            
            $('.sliderTrif').owlCarousel({
                loop:false,
                margin:0,
                nav:false,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2,
                        stagePadding: 50,
                    }
                }
            });
        }
        else {
            $('.sliderTrif , .sliderCard').removeClass('owl-carousel');
            $('.sliderTrif , .sliderCard').owlCarousel('destroy');
        }
        if ($(window).width() <= 767) {
            $('.accordion_theme_image .container').addClass('owl-carousel');
            $('.accordion__item').addClass('accordion__item_active');

            $('.accordion_theme_image .container').on('dragged.owl.carousel', function(event) {
                $('.accordion__item').addClass('accordion__item_active');
                var image =  $('.accordion_theme_image .container').find('.owl-item.active .accordion__item').attr('data-image');
                $('.accordion_theme_image').css('backgroundImage', 'url(' + image + ')');
            })
            $('.accordion_theme_image .container').owlCarousel({
                loop:false,
                margin:0,
                dots: true,
                nav:false,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1,
                    }
                }
            });
        }
        else{
            $('.accordion_theme_image .container').owlCarousel('destroy');
            $('.accordion_theme_image .container').removeClass('owl-carousel');
            $('.accordion__item:not(:first-child)').removeClass('accordion__item_active');
        }
        if ($(window).width() <= 640) {
            $('.sliderCard').addClass('owl-carousel');
            
            $('.sliderCard ').owlCarousel({
                loop:false,
                margin:0,
                nav:false,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2,
                        stagePadding: 50,
                    }
                }
            });
        }
        else{

        }
        
    }).trigger('resize');
});
