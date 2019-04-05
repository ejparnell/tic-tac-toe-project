const store = require('../store')

const signUpSuccess = function (data) {
  $('form').trigger('reset') // resets when action triggers
  $('#pop-up').hide()
  $('.page-mask').hide()
}
const signUpFailure = function (data) {
  console.log(`sign up failure ran:`, data)
}
const signInSuccess = function (data) {
  console.log(`sign in success ran:`, data)
  $('form').trigger('reset')
  store.user = data.user
  $('#pop-up').hide()
  $('.page-mask').hide()
}
const signInFailure = function (data) {
  console.log(`sign in failure ran:`, data)
}
const changePasswordSuccess = function (data) {
  console.log(`change password success ran:`, data)
  $('form').trigger('reset')
  $('#btn-cp').removeClass('btn-outline-primary').addClass('btn-outline-success')
  $('#cp-success').text('Your Password has been changed')
}
const changePasswordFailure = function (data) {
  console.log(`change password failure ran:`, data)
}
const signOutSuccess = function () {
  console.log('sign out works')
  store.user = null
  $('#pop-up').show()
  $('.page-mask').show()
}
const signOutFailure = function () {
  console.log('sign out fails')
}

module.exports = {
  signUpFailure,
  signUpSuccess,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
