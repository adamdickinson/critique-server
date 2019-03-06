import Client from "../models/Client"

export default {

  Mutation: {
    createClient: async (_, { client }) => await Client.query().insert(client),

    deleteClient: async (_, { id }) => {
      const client = await Client.query().first().where({ id })
      await client.$query().delete()
      return client
    },

    updateClient: async (_, { client }) => {
      const existing = await Client.query().first().where({ id: client.id })
      await existing.$query().update(client)
      return existing.$query()
    }
  },

  Query: {
    client: async(_, conditions) => await Client.query().first().where(conditions),
    clients: async () => await Client.query()
  }

}
