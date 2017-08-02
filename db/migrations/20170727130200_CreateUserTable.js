
exports.up = function(knex, Promise) {
  return knex.schema.createTable('User', function(t) {
    t.increments().primary();
    t.string('first_name').notNull();
    t.string('last_name').notNull();
    t.string('test').defaultTo(1).notNull();
    t.string('company').notNull();
    t.enu('state', ['pending', 'approved', 'denied']).defaultTo('pending').notNull();
    t.dateTime('createdAt').notNull();
    t.dateTime('updatedAt').nullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('User');
};
