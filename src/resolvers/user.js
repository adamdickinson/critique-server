import User from "../models/User"
import jwt from "jsonwebtoken"

export default {

  Mutation: {
    addUser: async (_, { user }) => await User.query().insert(user)
  },

  Query: {
    logIn: async (_, { username, password }) => {
      const user = await User.query().first().where({ username })
      if( await user.verifyPassword(password) )
        return jwt.sign(user.toJSON(), "secret")
    }
  }

}
