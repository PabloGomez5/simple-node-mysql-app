const express = require('express')
const mysql = require('mysql');
const fs = require('fs');
const yaml = require('js-yaml');
const config = require('./config/config');

let app_config = config.getConfig();
console.log(app_config);

const app = express()
const port = app_config['port']

const host = app_config['mysql_host']
const user = app_config['mysql_user']
const password = app_config['mysql_password']
const database = app_config['mysql_database']


app.get('/', (req, res) => res.send("Hola!"))

app.get('/data', (req, res) => {

  const con = mysql.createConnection({
    host, user, password, database,
  });

  const query = "SELECT * FROM test_table";

  // make a connection to the database.
  con.connect(function(err) {
    if (err) throw err;

    // if connection is successful
    con.query(query, (err, result, fields) => {
      // if any error while executing above query, throw error
      if (err) throw err;

      // if there is no error, you have the result
      console.log(result);
      res.json({result});
   });
  });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
