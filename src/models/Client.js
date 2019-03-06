import { Model } from "objection"

export default class Client extends Model {
  static tableName = "client"

  static get relationMappings() {
    return {
      client: {
        relation: Model.HasManyRelation,
        modelClass: require("./Project"),
        join: {
          from: "client.id",
          to: "project.clientId"
        }
      }
    }
  }
}
