
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', (table) => {
   table.increments();
   table.string('title').notNullable().defaultTo('');
   table.integer('likes').notNullable().defaultTo(0);
   table.timestamps(true, true);
 });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
