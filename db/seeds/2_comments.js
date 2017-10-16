
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {post_id: 1, content: 'thats awesome'},
        {post_id: 1, content: 'ahahhahaha'},
        {post_id: 1, content: 'wooooo'}
      ]);
    });
};
