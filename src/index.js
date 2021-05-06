import "./utils/env";

import http from "http";
import Knex from "knex";

import knexConfig from "./db/knexfile";

const knex = Knex(knexConfig);

const port = process.env.PORT || 3000;

const server = http.createServer(async (_, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  const users = await knex("users").select();

  res.end(
    `Some random names;\n${users.reduce(
      (str, user) => `${str}\n${user.name} ${user.surname}`,
      "---------------------------------------------------"
    )}`
  );
});

server.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
