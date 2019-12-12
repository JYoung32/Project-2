require('dotenv').config();
module.exports = {
  "development": {
    "username": process.env.DATABASEUSER,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": "localhost",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "DukeGio0817!",
    "database": "testdb",
    "host": "localhost",
    "dialect": "mysql",
    "logging": false
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
}
