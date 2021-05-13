const start = () => {
  $('.autoplay-carusel')
    .not('.slick-initialized')
    .slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      appendArrows: $('.autoplay-carusel'),
      prevArrow:
        '<i class="fa fa-angle-left btn-carusel" aria-hidden="true"></i>',
      nextArrow:
        '<i class="fa fa-angle-right btn-carusel" aria-hidden="true"></i>',
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    })
  $('.card-verlical-list')
    .not('.slick-initialized')
    .slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
          },
        },
      ]
    })
}

$(document).ready(() => {
  start()
})
