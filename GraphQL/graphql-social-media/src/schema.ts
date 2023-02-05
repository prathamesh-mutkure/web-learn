export const typeDefs = `#graphql

type Query {
    posts: [Post!]!
}

type Mutation {
    postCreate(post: PostInput!): PostPayload!
    postUpdate(postId: ID!, post: PostInput!): PostPayload!
    postDelete(postId: ID!): PostPayload!
}

type Post {
    id: ID!
    title: String!
    content: String!
    publish: Boolean!
    createdAt: String!
    user: User!
}

type User { 
    name: String!
    email: String!
    profile: Profile!
    posts: [Post!]!
}

type Profile {
    id: ID!
    bio: String!
    user: User!
}

type UserError {
    message: String!
}

type PostPayload {
    userErrors: [UserError!]!
    post: Post
}

input PostInput {
    title: String
    content: String
}

`;
