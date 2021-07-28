import { ApolloServer } from "apollo-server-micro";
import typeDefs from "../../lib/schema";
import resolvers from "../../lib/resolvers";

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = apolloServer.createHandler({ path: "/api/graphql" });

export default handler;
