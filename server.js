const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express')


//Models:
const db = require("./app/models");
// models.sequelize.authenticate().then(() =>{//Conexion a la BD
//     console.log("Estas conectado a la BD")
// });
// models.sequelize.sync()//Sincronizacion de los modelos con la BD
//--------------------
db.sequelize.sync({ force: false }).then(() => {
    console.log("Drop and re-sync db.");
    // run();
  });

//GraphQL
//Resolvers
import resolvers from './graphql/resolvers/resolvers';

//Schemas
import typeDefs from './graphql/typeDefs/typeDefs'
//------------------

const server = new ApolloServer({ typeDefs, resolvers, context: { db }})
const app = express();
server.applyMiddleware( {app} );

app.listen({ port: 4000 }, () => {
    console.log("Corriendor Servidor Apollo en http://localhost:4000")
})