require('dotenv').config();

module.exports = {
    // If using online database
  // development: {
  //   use_env_variable: 'DATABASE_URL'
  // },
  development: {
    username: "postgres",
    password: null,
    database: "cra_travis_ci_express",
    host: "127.0.0.1",
    dialect: "postgres",
    operatorsAliases: false
  },
  test: {
    username: "postgres_test",
    password: null,
    database: "cra_travis_ci_express_test",
    host: "127.0.0.1",
    dialect: "postgres",
    operatorsAliases: false
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres",
    operatorsAliases: false
  }
};
