export const typeDefs = `#graphql

type Query {
  hello: String,

  products(filter: ProductsFilterInput): [Product!]!,
  product(id: ID!): Product,
  
  categories: [Category!]!,
  category(id: ID!): Category,

  reviews: [Review!]!,
}

type Mutation {
  addCategory(input: AddCategoryInput!): Category!,
  addProduct(input: AddProductInput!): Product!,
  addReview(input: AddReviewInput!): Review!,

  deleteCategory(id: ID!): Boolean!,
  deleteProduct(id: ID!): Boolean!,
  deleteReview(id: ID!): Boolean!,

  updateCategory(id: ID!, input: UpdateCategoryInput!): Category!,
  updateProduct(id: ID!, input: UpdateProductInput!): Product!,
  updateReview(id: ID!, input: UpdateReviewInput!): Review!,
}

type Product {
  id: ID!,
  name: String!,
  description: String!,
  quantity: Int!,
  image: String!,
  price: Float!,
  onSale: Boolean!
  categoryId: ID,

  category: Category,

  reviews: [Review!]!,
}

type Category {
  id: ID!,
  name: String!,
  products(filter: ProductsFilterInput): [Product!],
}

type Review {
  id: String!,
  date: String!,
  title: String!,
  comment: String!,
  rating: Int!,
  productId: ID!,
}

input ProductsFilterInput {
  onSale: Boolean,
  avgRating: Float,
}

input AddCategoryInput {
  name: String!,
}

input AddProductInput {
  name: String!,
  description: String!,
  quantity: Int!,
  image: String!,
  price: Float!,
  onSale: Boolean!
  categoryId: ID!,
}

input AddReviewInput {
  date: String!,
  title: String!,
  comment: String!,
  rating: Int!,
  productId: ID!,
}

input UpdateCategoryInput {
  name: String,
}

input UpdateProductInput {
  name: String,
  description: String,
  quantity: Int,
  image: String,
  price: Float,
  onSale: Boolean
  categoryId: ID,

}

input UpdateReviewInput {
  date: String,
  title: String,
  comment: String,
  rating: Int,
  productId: ID,
}
`;
