exports.up = async function(knex) {
  await knex.schema.createTable("round", table => {
    table.increments("id").primary()
    table.integer("number").unsigned().notNullable()
    table.datetime("openAt")
    table.datetime("closeAt")
    table.integer("projectId").unsigned()
      .references("id").inTable("project")
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable("round") 
}
