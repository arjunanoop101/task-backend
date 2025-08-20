const feathers = require("@feathersjs/feathers");
const express = require("@feathersjs/express");
const cors = require("cors");
require("dotenv").config();

const usersService = require("./services/users.service");

const app = express(feathers());

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.configure(express.rest());

// services
app.use("/users", usersService);

// soft-delete filter hook
app.service("users").hooks({
  before: {
    find: [
      async (context) => {
        if (typeof context.params.query.deleted === "undefined") {
          context.params.query.deleted = false;
        }
        return context;
      },
    ],
    create: [
      async (context) => {
        context.data.created_at = new Date();
        context.data.updated_at = new Date();
        return context;
      },
    ],
    patch: [
      async (context) => {
        context.data.updated_at = new Date();
        return context;
      },
    ],
  },
});

// error handler
app.use(express.errorHandler());

const port = process.env.PORT || 3030;
app.listen(port, () =>
  console.log(`🚀 Feathers running at http://localhost:${port}`)
);
