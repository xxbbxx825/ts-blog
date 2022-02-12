const PostTypeDef = /* GraphQL */ `
  type Post {
    _id: ID!
    id: String
    title: String
  }

  # the schema allows the following query:
  type Query {
    post(id: String): Post
  }

  # this schema allows the following mutation:
  type Mutation {
    createPost(title: String!): Post
    updatePost(id: String!): Post
    removePost(id: String!): Post
  }

  # we need to tell the server which types represent the root query
  # and root mutation types. We call them RootQuery and RootMutation by convention.
  schema {
    query: Query
    mutation: Mutation
  }
`

export default PostTypeDef