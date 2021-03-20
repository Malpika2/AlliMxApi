const { gql } = require('apollo-server-express')

const typeDefs = gql`

type User{
    id: Int!
    nombre: String!
    segundo: String
    paterno: String
    materno: String
    fechaNacimiento: String
    email: String
    telefono: String
}
type Query{
    getUser(id: Int!): User
}
type Mutation{
    createUser(nombre: String!,segundo: String, paterno: String,materno: String, fechaNacimiento: String,email: String, telefono: String): User!
}
`
module.exports = typeDefs