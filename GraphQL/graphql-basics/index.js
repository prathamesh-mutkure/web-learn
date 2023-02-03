import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { db } from "./data.js";
import { typeDefs } from "./schema.js";
import { Product } from "./resolvers/product.js";
import { Query } from "./resolvers/query.js";
import { Mutation } from "./resolvers/mutation.js";
import { Category } from "./resolvers/category.js";

const resolvers = {
  Query,
  Mutation,
  Product,
  Category,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  context: async () => ({
    db,
  }),
});

console.log(`Server running on URL: ${url}`);
