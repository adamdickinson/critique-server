import FeedbackRevision from "../models/FeedbackRevision"

export default {

  Query: {
    feedbackRevisions: async (_, { orderBy, order, ...conditions }) => {
      if( !order ) order = "ASC"
      if( !orderBy ) orderBy = "id"

      return await FeedbackRevision.query()
        .orderBy(orderBy, order)
        .where(conditions)
    }
  }

}
