import Client from "../models/Client"
import Project from "../models/Project"
import Round from "../models/Round"

export default {

  Project: {
    client: project => Client.query().where({ id: project.clientId }).first(),
    rounds: project => Round.query().where({ projectId: project.id }),
  },

  Mutation: {
    createProject: async (_, { project }) => await Project.query().insert(project),

    deleteProject: async (_, { id }) => {
      const project = await Project.query().first().where({ id })
      await project.$query().delete()
      return project
    },

    updateProject: async (_, { project }) => {
      const existing = await Project.query().first().where({ id: project.id })
      await existing.$query().update(project)
      return existing.$query()
    }
  },

  Query: {
    project: async(_, conditions) => await Project.query().first().where(conditions),
    projects: async (_, conditions) => await Project.query().where(conditions)
  }

}
