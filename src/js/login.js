const Switch = (para) => {
  switch (para) {
    case 'isLogin':
      $('.islogin').css('display', 'block')
      $('.isfogot').css('display', 'none')
      $('.isregist').css('display', 'none')
      $('title').text('Login Page')
      break
    case 'isRegist':
      $('.isregist').css('display', 'block')
      $('.islogin').css('display', 'none')
      $('title').text('Register Page')
      break
    case 'isFogot':
      $('.isfogot').css('display', 'block')
      $('.islogin').css('display', 'none')
      $('title').text('Fogot Page')
      break
    default:
      break
  }
}
