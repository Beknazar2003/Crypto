$(document).ready(() => {
  $('[data-trigger]').click(() => {
    $('#navbar_main').addClass('show navbar-light')
    $('#navbar_main').removeClass('navbar-dark')
    $('.mobile-offcanvas').css('overflow-x', 'visible')
  })
  $('.btn-closer').click(() => {
    $('.mobile-offcanvas.show').removeClass('show')
    $('.mobile-offcanvas').css('overflow-x', 'visible')
  })
})
