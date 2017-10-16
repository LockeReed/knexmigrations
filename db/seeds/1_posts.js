
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {title: 'thing', likes:43},
        {title: 'do', likes: 25},
        {title: 'the', likes:80}
      ]);
    });
};
