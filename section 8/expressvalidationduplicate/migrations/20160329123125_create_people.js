
exports.up = function(knex, Promise) {
  return knex.schema.createTable('people', function (table) {
    table.increments();
    table.string('name');
    table.string('hobby');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('people')
};


//this is creating my table schema 
