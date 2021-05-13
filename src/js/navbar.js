$(document).ready(() => {
  $('[data-trigger]').click(() => $('#navbar_main').addClass('show'))
  $('.btn-closer').click(() => $('.mobile-offcanvas.show').removeClass('show'))
})