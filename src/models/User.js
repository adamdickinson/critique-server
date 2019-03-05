import { Model } from "objection"
import configurePasswordClass from "objection-password"

const Password = configurePasswordClass()

export default class User extends Password(Model) {
  static tableName = "user"
}
