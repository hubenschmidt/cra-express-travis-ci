require('dotenv').config();

module.exports = {

    // If using online database
  // development: {
  //   use_env_variable: 'DATABASE_URL'
  // },

  development: {
    username: "postgres",
    password: null,
    database: "travis-ci-boilerplate",
    host: "127.0.0.1",
    dialect: "postgres",
    operatorsAliases: false
  },
  test: {
    username: "root",
    password: null,
    database: "travis-ci-boilerplate_test",
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

// require('dotenv').config(); // this is important!

// module.exports = {
// "development": {
//     "username": process.env.DB_USERNAME,
//     "password": process.env.DB_PASSWORD,
//     "database": process.env.DB_DATABASE,
//     "host": process.env.PUBLIC_DATABASE_URL,
//     "dialect": "postgres"
// },
// "production": {
//     "username": process.env.PRODUCTION_DB_USERNAME,
//     "password": process.env.PRODUCTION_DB_PASSWORD,
//     "database": process.env.PRODUCTION_DB_DATABASE,
//     "host": process.env.PRODUCTION_DB_HOST,
//     "URI": process.env.PRODUCTION_DATABASE_URL,
//     "port": 5432,
//     "dialect": "postgres"
// }
// };
