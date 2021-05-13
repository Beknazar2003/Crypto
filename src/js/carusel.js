const start = (screen) => {
  console.log('screen ', screen)

  $('.autoplay-carusel')
    .not('.slick-initialized')
    .slick({
      slidesToShow: screen > 900 ? 3 : 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      appendArrows: $('.autoplay-carusel'),
      prevArrow:
        '<i class="fa fa-angle-left btn-carusel" aria-hidden="true"></i>',
      nextArrow:
        '<i class="fa fa-angle-right btn-carusel" aria-hidden="true"></i>',
    })
  $('.card-verlical-list')
    .not('.slick-initialized')
    .slick({
      slidesToShow: screen > 900 ? 4 : 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    })
}

$(document).ready(() => {
  start(window.screen.width)
  $(window).resize(() => {
    start(window.screen.width)
  })
})
