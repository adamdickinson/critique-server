exports.up = async function(knex) {
  await knex.schema.createTable("feedbackRevision", table => {
    table.increments("id").primary()
    table.string("summary")
    table.string("detail")
    table.string("createdAt")
    table.integer("feedbackId").unsigned()
      .references("id").inTable("feedback")
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable("feedbackRevision") 
}
