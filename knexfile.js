require("./utils/env");

module.exports = {
  client: "pg",
  connection: {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT
      ? Number.parseInt(process.env.DATABASE_PORT, 10)
      : 5432,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  },
  migrations: {
    directory: "./db/migrations",
  },
  pool: {
    max: 1,
    min: 1,
  },
};
