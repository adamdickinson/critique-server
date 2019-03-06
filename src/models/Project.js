import { Model } from "objection"

export default class Project extends Model {
  static tableName = "project"

  static get relationMappings() {
    return {
      client: {
        relation: Model.BelongsToOneRelation,
        modelClass: require("./Client"),
        join: {
          from: "project.clientId",
          to: "client.id"
        }
      },
      project: {
        relation: Model.HasManyRelation,
        modelClass: require("./Round"),
        join: {
          from: "project.id",
          to: "round.projectId"
        }
      }
    }
  }
}
