$(document).ready(() => {
  $('[data-trigger]').click(() => {
    $('#navbar_main').addClass('show navbar-light')
    $('#navbar_main').removeClass('navbar-dark')
  })
  $('.btn-closer').click(() => $('.mobile-offcanvas.show').removeClass('show'))
})