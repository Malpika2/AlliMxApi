const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express')


//Models:
const models = require("./app/models/index")
models.sequelize.sync({ force: false }).then(() => {
    console.log("Drop and re-sync db.");
});

//GraphQL
//Resolvers
import resolvers from './graphql/resolvers/resolvers';

//Schemas
import typeDefs from './graphql/typeDefs/typeDefs'
//------------------

const server = new ApolloServer({ typeDefs, resolvers, context: { models }})

const app = express();
server.applyMiddleware( {app} );

app.listen({ port: 4000 }, () => {
  console.log("Corriendor Servidor Apollo en http://localhost:4000" + server.graphqlPath)
})