import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { categories, products, reviews } from "./data.js";
import { typeDefs } from "./schema.js";
import { Product } from "./resolvers/product.js";
import { Query } from "./resolvers/query.js";
import { Category } from "./resolvers/category.js";

const resolvers = {
  Query,
  Product,
  Category,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  context: async () => ({
    products,
    categories,
    reviews,
  }),
});

console.log(`Server running on URL: ${url}`);
