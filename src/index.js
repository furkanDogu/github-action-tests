import "./utils/env";

import http from "http";
import Knex from "knex";

import knexConfig from "./db/knexfile";

const knex = Knex(knexConfig);

const port = process.env.PORT || 3000;

const server = http.createServer(async (_, res) => {
  console.log("Request received");
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  const users = await knex("users").select();
  console.log("Data from db received");

  setTimeout(() => {
    console.log("Sending response after 35s");
    res.end(
      `Some random names;\n${users.reduce(
        (str, user) => `${str}\n${user.name} ${user.surname}`,
        "---------------------------------------------------"
      )}`
    );
  }, 35000);
});

server.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
