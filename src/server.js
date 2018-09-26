import { ApolloServer, graphql } from 'apollo-server';
import { typeDefs, resolvers } from './schema';
import { logger } from './providers';
import config from './config';

// Init server with provided type definitions and their resolvers
const server = new ApolloServer({ typeDefs, resolvers });

// Run server on specified port
server.listen(config.server.port).then(({ url }) => {
    logger.info(`🚀  Server ready at ${url}`);
});