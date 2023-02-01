export const typeDefs = `#graphql
type Query {
  hello: String,

  products(filter: ProductsFilterInput): [Product!]!,
  product(id: ID!): Product,
  
  categories: [Category!]!,
  category(id: ID!): Category,

  reviews: [Review!]!,
}

type Product {
  name: String!,
  description: String!,
  quantity: Int!,
  image: String!,
  price: Float!,
  onSale: Boolean!
  categoryId: ID!,

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
`;
