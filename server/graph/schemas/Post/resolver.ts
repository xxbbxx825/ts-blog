import Post from './model'

const PostResolver = {
  Query: {
    post (_, { id, }) {
      Post.findOne({ id, })
    },
  },
  Mutation: {
    createPost (_, { title, }) {
      const post = new Post({
        title,
      })
      post.id = post._id.toString()
      return post.save()
    },
    updatePost (_, args) {
      const updatedPost = Post.findByIdAndUpdate(
        args.id,
        {
          $set: {
            title: args.title,
          },
        },
        { new: true, }
      )
      return updatedPost
    },
    removePost (_, args) {
      const updatedPost = Post.findByIdAndUpdate(
        args.id,
        {
          $set: {
            title: args.title,
          },
        },
        { new: true, }
      )
      return updatedPost
    },
  },
}

export default PostResolver
