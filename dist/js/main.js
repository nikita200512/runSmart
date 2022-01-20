$(document).ready(function () {
  $('.carousel__inner').slick({
    speed: 300,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/left.svg" alt="left"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/right.svg" alt="right"></button>',
    responsive: [
      {
        // breakpoint: 768px,
        settings: {
          dots: true,
          arrows: false
        }
      }
    ]
  });
});