// men's clothing carousel
$(document).ready(function() {
    $(".slider").slick({
    slidesToShow: 3,
    autoplay: false,
    speed: 700,
    autoplaySpeed: 700,
    responsive: [
    {
    breakpoint: 768,
    settings: {
    slidesToShow: 2
    }
    },
    {
    breakpoint: 550,
    settings: {
    slidesToShow: 1
    }
    }
    ]
    });
  });
  // women's clothing carousel
  $(document).ready(function() {
    $(".slider_1").slick({
    arrows: true,
    dots: false,
    slidesToShow: 3,
    autoplay: false,
    speed: 700,
    autoplaySpeed: 700,
    responsive: [
    {
    breakpoint: 768,
    settings: {
    slidesToShow: 2
    }
    },
    {
    breakpoint: 550,
    settings: {
    slidesToShow: 1
    }
    }
    ]
    });
  });

