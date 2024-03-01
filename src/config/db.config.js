const { Pool } = require('pg');

const { USER, PASS, HOST, DB } = require('./server.config.js');

const pool = new Pool({
  user: USER,
  password: PASS,
  host: HOST,
  database: DB,
  port: 5432,
});

module.exports = pool;