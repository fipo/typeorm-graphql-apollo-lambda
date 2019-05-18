import 'reflect-metadata';
import * as path from 'path';
import { config } from 'dotenv';
import * as express from 'express';
import * as cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
// import { createConnection } from 'typeorm';
import { importSchema } from 'graphql-import';
import * as process from 'process';

import resolvers from './resolvers';

config()

const app = express();
app.use(cors());

app.listen(process.env.PORT || 4000, () =>
  console.log(`ApolloServer on: http://localhost:${process.env.PORT}/graphql`),
);

const typeDefs = importSchema(
  path.resolve(__dirname, process.env.GRAPHQL_SCHEMA_PATH)
)

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: process.env.APOLLO_PLAYGROUND === 'true'
})

server.applyMiddleware({app})
export default app;
