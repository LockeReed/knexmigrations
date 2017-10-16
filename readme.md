## migrations
make sure you have knex installed globally.

Then npm install the following packages:
 - knex
 - pg
 - express

Here's some command shortcuts:

To make a new migration:
`knex migrate:make name`

To migrate the current migration(s):
`knex migrate:latest`

To make a new seed:
`knex seed:make name`

To populate the db with your seeds:
`knex seed:run`
