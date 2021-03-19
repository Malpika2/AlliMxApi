const resolvers = {
    Query: {
        async getUser(root, args, { models }){
            return await models.user.findByPk(args.id)
        }
    },
    Mutation: {
        async createUser(root, { nombre, segundo, paterno, materno, fechaNacimiento, email, telefono}, { models }){
            return await models.user.create( {nombre, segundo, paterno, materno, fechaNacimiento, email, telefono} )
        }
    }
}

module.exports = resolvers