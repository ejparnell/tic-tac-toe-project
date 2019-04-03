let player = 1

const addXOrO = function () {
  if (player === 1) {
    player = 0
    return 'x'
  } else {
    player = 1
    return 'o'
  }
}

const onClickSuccess = function (box) {
  $(box).text(addXOrO)
}

module.exports = {
  onClickSuccess
}
