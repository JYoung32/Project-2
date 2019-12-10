require('dotenv').config();
module.exports = {
  "development": {
<<<<<<< HEAD
    "username": process.env.USER,
=======
    "username": process.env.DATABASEUSER,
>>>>>>> dc5e03c34df6df81ee8258d7edec4dcc9f225422
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": "localhost",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
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
