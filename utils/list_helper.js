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

const mostBlogs = blogs => {
  if (blogs.length !== 0) {
    const authorsWithBlogAmount = blogs.reduce((acc, currentBlog) => {
      if (!acc.map(blog => blog.author).includes(currentBlog.author)) {
        acc.push({ author: currentBlog.author, blogs: 1 })
        return acc
      }
      acc.find(blog => blog.author === currentBlog.author).blogs += 1
      return acc
    }, [])
    return authorsWithBlogAmount.sort((a, b) => b.blogs - a.blogs)[0]
  } else {
    return {}
  }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs
}
