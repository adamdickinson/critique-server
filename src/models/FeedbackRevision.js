import { Model } from "objection"

export default class FeedbackRevision extends Model {
  static tableName = "feedbackRevision"

  $beforeInsert() {
    this.createdAt = new Date().toISOString()
  }

  static get relationMappings() {
    return {
      feedback: {
        relation: Model.BelongsToOneRelation,
        modelClass: require("./Feedback"),
        join: {
          from: "feedbackRevision.feedbackId",
          to: "feedback.id"
        }
      }
    }
  }

}
