exports.up = async function(knex) {
  await knex.schema.createTable("user", table => {
    table.increments("id").primary()
    table.string("username").notNullable()
    table.string("password").notNullable()
    table.string("firstName").notNullable()
    table.string("lastName").notNullable()
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable("user") 
}
