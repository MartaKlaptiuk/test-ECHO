$(document).ready(function () {
    $('.slider-wrapper').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        nextArrow: '<div class="prev"></div>',
        prevArrow: '<div class="next"></div>',
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 755,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});