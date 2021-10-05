const dummy = blogs => {
  return 1
}

const totalLikes = blogs => {
  const reducer = blogs.reduce(function (a,b) { return a + b.likes; }, 0)

  return reducer
}

module.exports = {
  dummy,
  totalLikes
}
