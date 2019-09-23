require('dotenv').config();

module.exports = {

    // If using online database
  // development: {
  //   use_env_variable: 'DATABASE_URL'
  // },

  development: {
    username: "postgres",
    password: null,
    database: "travis_ci_boilerplate",
    host: "127.0.0.1",
    dialect: "postgres",
    operatorsAliases: false
  },
  test: {
    username: "postgres",
    password: null,
    database: "travis_ci_boilerplate_test",
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
