import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  server.applyMiddleware({ app });

  try {
    await mongoose.connect("mongodb://localhost:27017/test3", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.warn("db connected");
  } catch (err) {
    console.error("Error connecting to the database:", err);
  }
  
  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();
