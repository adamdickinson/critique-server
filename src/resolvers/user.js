import jwt from "jsonwebtoken"

import omit from "lodash/omit"

import User from "../models/User"

export default {

  Mutation: {
    addUser: async (_, { user }) => await User.query().insert(user)
  },

  Query: {
    logIn: async (_, { username, password }) => {
      const user = await User.query().first().where({ username })
      if( user && await user.verifyPassword(password) )
        return jwt.sign(omit(user.toJSON(), ["password"]), "secret")
    }
  }

}
