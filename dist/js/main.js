    $(function () {

        $('.top-slider').slick({
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: '<button type="button" class="slick-next slick-arrow"><img src="../dist/img/next.svg" alt=""></button>',
            prevArrow: '<button type="button" class="slick-prev slick-arrow"><img src="../dist/img/prev.svg" alt=""></button>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        arrows: false

                    }
                },
            ]
        });
    });




    //  Projects, hover img


        $('.projects__item').hover(function () {
            $(this).toggleClass('active-visible');

        });

        $('.projects__item').hover(function () {
            $(this).find('.projects__active').fadeIn(500);
        }, function () {
            $('.projects__active').fadeOut(300);
        });




    //

    $(function () {

        $('.quote-slider').slick({
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                    }
                },
                {
                    breakpoint: 640,
                    settings: {

                    }
                },
            ]
        });



    //    кнопка ВВЕРХ

        $('#up__btn').click(function (e) {
            e.preventDefault();
            $('html, body').animate({scrollTop:0}, 3000);

        });

    });