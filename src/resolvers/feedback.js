import Feedback from "../models/Feedback"
import FeedbackRevision from "../models/FeedbackRevision"
import Round from "../models/Round"

export default {

  Feedback: {
    round: feedback => Round.query().where({ id: feedback.roundId }).first()
  },

  Mutation: {
    createFeedback: async (_, { feedback }) => {
      feedback.revisions = 1
      feedback = await Feedback.query().insert(feedback)

      const { summary, detail } = feedback
      const revision = await FeedbackRevision.query().insert({ feedbackId: feedback.id, summary, detail })

      return feedback
    },

    deleteFeedback: async (_, { id }) => {
      const feedback = await feedback.query().first().where({ id })
      await FeedbackRevision.query().delete().where({ feedbackId: id })
      await Feedback.query().delete().where({ id })
      return feedback
    },

    updateFeedback: async (_, { feedback }) => {
      const existing = await Feedback.query().first().where({ id: feedback.id })

      // Only add a revision if detail revised
      if( feedback.detail !== existing.detail && (feedback.detail || feedback.detail === "") ) {
        const { summary, detail } = { ...existing, ...feedback }
        const revision = await FeedbackRevision.query()
          .insert({ 
            feedbackId: feedback.id, 
            summary, 
            detail
          })

        const { revisions } = await FeedbackRevision.query().first()
          .where({ feedbackId: feedback.id })
          .count("* as revisions")

        feedback.revisions = revisions
      }

      await existing.$query().update(feedback)
      return existing.$query()
    }
  },

  Query: {
    feedback: async(_, conditions) => await Feedback.query().first().where(conditions),
    feedbacks: async (_, conditions) => await Feedback.query().where(conditions),
  }

}
