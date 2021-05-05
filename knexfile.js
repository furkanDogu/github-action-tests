require("./utils/env");

const connection = process.env.DATABASE_URL
  ? { connectionString: process.env.DATABASE_URL }
  : {
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT
        ? Number.parseInt(process.env.DATABASE_PORT, 10)
        : 5432,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
    };

module.exports = {
  client: "pg",
  connection,
  migrations: {
    directory: "./db/migrations",
  },
  pool: {
    max: 1,
    min: 1,
  },
};
