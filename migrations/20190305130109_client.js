exports.up = async function(knex) {
  await knex.schema.createTable("client", table => {
    table.increments("id").primary()
    table.string("name").notNullable()
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable("client") 
}
