import { ApolloServer } from "apollo-server"
import { Model } from "objection"
import Knex from "knex"

import resolvers from "./resolvers"
import typeDefs from "./types"

async function main() {

  const knex = Knex({
    client: "sqlite3",
    useNullAsDefault: true,
    connection: { filename: "dev.sqlite3" }
  })

  Model.knex(knex)

  const server = new ApolloServer({ typeDefs, resolvers })
  server.listen({ port: 8080 }, () => {
    console.log("Yeaboiii listening")
  })

}


main()
