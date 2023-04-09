$(function () {
    $('.intro__slider').slick({
        autoplay: true,
        dots: true,
        nextArrow: '<button type="button" class="slick-next"><img class="slick__img" src="images/next.svg" alt="back"></button>',
        prevArrow: '<button type="button" class="slick-prev"><img class="slick__img" src="images/back.svg" alt="back"></button>',
    })
    $('.clients__slider').slick({
        dots: true,
        nextArrow: '<button type="button" class="slick2-next"><img class="slick__img" src="images/next.svg" alt="back"></button>',
        prevArrow: '<button type="button" class="slick2-prev"><img class="slick__img" src="images/back.svg" alt="back"></button>',
    })
    $('.reviews__slider').slick({
        dots: true,
        nextArrow: '<button type="button" class="slick2-next"><img class="slick__img" src="images/next.svg" alt="back"></button>',
        prevArrow: '<button type="button" class="slick2-prev"><img class="slick__img" src="images/back.svg" alt="back"></button>',
    })
    let burger = $(".burger");
    let burger_window = $(".burger_window");
    burger.click(function(){
        burger_window.toggleClass("active");
    })
})