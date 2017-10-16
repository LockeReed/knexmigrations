
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {first_name: 'john', last_name: "armbuster", email:"john@galvanize.com", age:30},
        {first_name: 'brian', last_name: "brianson", email:"brian@galvanize.com", age:32},
        {first_name: 'Andi', last_name: "z", email:"andi@galvanize.com", age:25}
      ]);
    });
};
