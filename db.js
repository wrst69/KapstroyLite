const Pool = require('pg').Pool;

const pool = new Pool({
  user: "postgres",
  password: "root"
});

module.exports = pool();

