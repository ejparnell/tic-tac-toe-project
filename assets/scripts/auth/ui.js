const store = require('../store')

const signUpSuccess = function (data) {
  $('form').trigger('reset') // resets when action triggers
}
const signUpFailure = function (data) {
  console.log(`sign up failure ran:`, data)
}
const signInSuccess = function (data) {
  console.log(`sign in success ran:`, data)
  store.user = data.user
}
const signInFailure = function (data) {
  console.log(`sign in failure ran:`, data)
}
const changePasswordSuccess = function (data) {
  console.log(`change password success ran:`, data)
}
const changePasswordFailure = function (data) {
  console.log(`change password failure ran:`, data)
}
const signOutSuccess = function () {
  console.log('sign out works')
  store.user = null
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
