/*
Theme: Industry Company KZ
Author: Andrey Galkin
Version: 1.0
*/

//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    //////////////////////////////////////////////////////////////////
    // [ Слайдер на странице index.html ]

    const heroSwiper = new Swiper('.heroSwiper', {
        spaceBetween: 24,
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '#heroSwiper-next',
            prevEl: '#heroSwiper-prev',
        },
    });

});