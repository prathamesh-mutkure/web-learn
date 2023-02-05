import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
  type Query {
    cars: [Car!]!
  }

  type Mutation {
    groupDelete(groupId: ID!): Boolean!

    groupPublish(groupId: ID!): Boolean!
    groupUnpublish(groupId: ID!): Boolean!

    groupAddProducts(groupId: ID!, productId: ID!): Boolean!
    groupRemoveProducts(groupId: ID!, productId: ID!): Boolean!

    groupCreate(
        groupInput: GroupInput!
    ): GroupUpdatePayload!

    groupUpdate(
      groupId: ID!
      groupInput: GroupInput!
    ): GroupUpdatePayload!
  }

  input GroupInput {
    name: String, 
    image: ImageInput
    description: String
    # featureSet: GroupFeatureSet
  }

  type GroupUpdatePayload {
    userErrors: [UserError]!
    group: Group
  }

  type UserError {
    message: String!,
    field: [String!]!
  }

  type Car {
    id: ID!
    color: String!
    make: String!
  } 

  type Group {
    id: ID!
    name: String!
    image: Image!
    description: String!
    featureSet: GroupFeatureSet
    cars(skip: Int!, take: Int!): [Car!]!
    hasCar(id: ID!): Boolean!
  }

  type Image {
    id: ID!
    url: String!
  }

  input ImageInput {
    url: String!
  }

  type GroupFeatureSet {
    feature: [GroupFeature!]!
    applyFeaturesSeperately: Boolean!
  }

  type GroupFeature {
    feature: GroupFeatureFields!
  }

  enum GroupFeatureFields {
    INCLINE_ENGINE
    FOUR_CYLINDER_ENGINE
    TWIN_CYLUNDER_ENGINE
    RED_PAINT
    BLACK_PAINT
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      cars: () => [{ id: 1, color: "blue", make: "Toyota" }],
    },
  },
});

const { url } = await startStandaloneServer(server, {});

console.log(`GraphQL server running at: ${url}`);
