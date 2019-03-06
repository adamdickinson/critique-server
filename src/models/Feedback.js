import { Model } from "objection"

export default class Feedback extends Model {
  static tableName = "feedback"

  $beforeInsert() {
    this.createdAt = new Date().toISOString()
  }

  $beforeUpdate() {
    this.updatedAt = new Date().toISOString()
  }

  static get relationMappings() {
    return {
      round: {
        relation: Model.BelongsToOneRelation,
        modelClass: require("./Round"),
        join: {
          from: "feedback.roundId",
          to: "round.id"
        }
      }
    }
  }

}
