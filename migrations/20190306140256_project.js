exports.up = async function(knex) {
  await knex.schema.createTable("project", table => {
    table.increments("id").primary()
    table.string("name").notNullable()
    table.integer("clientId").unsigned()
      .references("id").inTable("client")
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable("project") 
}
