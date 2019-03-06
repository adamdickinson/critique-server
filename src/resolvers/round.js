import Project from "../models/Project"
import Round from "../models/Round"

export default {

  Round: {
    project: round => Project.query().where({ id: round.projectId }).first()
  },

  Mutation: {
    createRound: async (_, { round }) => {
      const { highest } = await Round.query().first().where({ projectId: round.projectId }).max("number as highest")
      round.number = highest ? highest + 1 : 1
      return await Round.query().insert(round)
    },

    deleteRound: async (_, { id }) => {
      const round = await Round.query().first().where({ id })
      await round.$query().delete()
      return round
    },

    updateRound: async (_, { round }) => {
      const existing = await Round.query().first().where({ id: round.id })
      await existing.$query().update(round)
      return existing.$query()
    }
  },

  Query: {
    round: async(_, conditions) => await Round.query().first().where(conditions),
    rounds: async (_, conditions) => await Round.query().where(conditions)
  }

}
