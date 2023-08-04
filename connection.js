const mysql = require('mysql');

// MySQL database connection configuration
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fair_price_shop',
};

// Create a MySQL connection pool
const pool = mysql.createPool(dbConfig);

// Handle MySQL connection errors
pool.on('error', (err) => {
  console.error('MySQL connection error:', err);
});

module.exports = pool;
  