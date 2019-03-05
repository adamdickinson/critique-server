import Client from "../models/Client"

export default {

  Mutation: {
    addClient: async (_, { client }, { database }) => await Client.query().insert(client)
  },

  Query: {
    clients: async () => await Client.query()
  }

}
