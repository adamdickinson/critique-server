import { Model } from "objection"
import moment from "moment"

export default class Round extends Model {
  static tableName = "round"

  active() {
    const now = moment()
    const open = !this.openAt || now.isAfter(this.openAt)
    const closed = this.closedAt && now.isBefore(this.closedAt)
    return open && !closed
  }

  static get relationMappings() {
    return {
      project: {
        relation: Model.BelongsToOneRelation,
        modelClass: require("./Project"),
        join: {
          from: "round.projectId",
          to: "project.id"
        }
      }
    }
  }

  static get virtualAttributes() {
    return ["active"]
  }

}
