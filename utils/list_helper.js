const dummy = blogs => {
  return 1
}

const totalLikes = blogs => {
  const reducer = blogs.reduce(function (a, b) {
    return a + b.likes
  }, 0)

  return reducer
}

const favoriteBlog = blogs => {
  if (blogs.length !== 0) {
    const favoriteBlog = Math.max(...blogs.map(item => item.likes))
    const result = {
      title: blogs.find(item => item.likes === favoriteBlog).title,
      author: blogs.find(item => item.likes === favoriteBlog).author,
      likes: blogs.find(item => item.likes === favoriteBlog).likes
    }
    return result
  } else {
    return {}
  }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}
