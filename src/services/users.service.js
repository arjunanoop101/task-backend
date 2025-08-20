const { KnexService } = require("@feathersjs/knex");
const db = require("../db");

class UsersService extends KnexService {}

const options = {
  Model: db,
  name: "users",
  paginate: false, // disable pagination for simplicity
};

module.exports = new UsersService(options);
