import {ApolloServer, gql} from "apollo-server";
import { typeDefs } from "./schema";
import { Query } from "./resolvers"

const server = new ApolloServer({
    typeDefs,
    resolvers: { 
        Query,
     }
});

server.listen().then(({ url }) => {
    console.log(`Server ready on ${url}`);
});

