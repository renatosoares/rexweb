/*slide*/
$(document).ready(function() {
    $('.slide-initial').slick({
         dots: true,
         infinite: true,
         speed: 300,
         slidesToShow: 1,
         // adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    });
});