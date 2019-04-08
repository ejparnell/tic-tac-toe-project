const store = require('../store')

const signUpSuccess = function (data) {
  $('form').trigger('reset')
  $('.welcome-message').text('Sign up Success! Sign In.')
  $('#sign-up').hide(500)
  $('.or').hide()
}
const signUpFailure = function (data) {
  $('.welcome-message').text('Sign up Failure. Please try again.')
  $('.sign-up').removeClass('btn-outline-info').addClass('btn-outline-danger')
  $('form').trigger('reset')
}
const signInSuccess = function (data) {
  $('form').trigger('reset')
  store.user = data.user
  $('#pop-up').hide()
  $('.page-mask').hide()
  $('.sign-in-success').show()
  $('.game-update').text(`Welcome ${store.user.email}`).show()
}
const signInFailure = function (data) {
  $('.welcome-message').text('Invalid password or email')
  $('.sign-in').removeClass('btn-outline-info').addClass('btn-outline-danger')
  $('form').trigger('reset')
}
const changePasswordSuccess = function (data) {
  $('form').trigger('reset')
  $('.game-update').text(`${store.user.email} has changed password`)
}
const changePasswordFailure = function (data) {
  $('.game-update').text('Change Password has failed. Please try again.')
  $('form').trigger('reset')
}
const signOutSuccess = function () {
  $('.welcome-message').text(`${store.user.email} has Sign Out. Please Sign In.`)
  store.user = null
  $('#pop-up').show()
  $('.page-mask').show()
}
const signOutFailure = function () {
  $('.game-update').text('Sign out Failed. Please try again.')
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
