
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {content: 'thats awesome'},
        {content: 'ahahhahaha'},
        {content: 'wooooo'}
      ]);
    });
};
