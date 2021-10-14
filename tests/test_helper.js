const Blog = require('../models/blog')

const initialBlogs = [
  {
    title: 'Canonical string reduction',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
    likes: 12
  },
  {
    title: 'First class tests',
    author: 'Robert C. Martin',
    url:
      'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll',
    likes: 10
  }
]

const nonExistingLike = async () => {
  const blog = new Blog({
    title: 'Writing a Sokoban Puzzle Game in JavaScript',
    author: 'Tania Rascia',
    url: 'https://www.taniarascia.com/sokoban-game/'
  })
  await blog.save()
}

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

module.exports = {
  initialBlogs,
  nonExistingLike,
  blogsInDb
}
