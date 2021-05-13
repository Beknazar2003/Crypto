$(document).ready(() => {
  $('.autoplay-carusel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    appendArrows: $('.autoplay-carusel'),
    prevArrow:
      '<i class="fa fa-angle-left btn-carusel" aria-hidden="true"></i>',
    nextArrow:
      '<i class="fa fa-angle-right btn-carusel" aria-hidden="true"></i>',
    centerPadding: 0,
    customPaging: 0,
  })
})
