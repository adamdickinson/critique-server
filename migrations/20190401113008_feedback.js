exports.up = async function(knex) {
  await knex.schema.createTable("feedback", table => {
    table.increments("id").primary()
    table.string("summary")
    table.string("detail")
    table.boolean("completed")
    table.string("with")
    table.string("createdAt")
    table.string("updatedAt")
    table.integer("revisions").unsigned()
    table.integer("roundId").unsigned()
      .references("id").inTable("round")
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable("feedback") 
}
