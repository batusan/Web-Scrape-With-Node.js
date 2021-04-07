const mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'YOUR_DATABASE_USERNAME',
    password: 'YOUR_DATABASE_PASSWORD',
    database: 'YOUR_DATABASE_NAME',
});
/*
 *Database schema for product
    CREATE TABLE IF NOT EXISTS products (
	    product_id INT AUTO_INCREMENT PRIMARY KEY,
	    product_name VARCHAR(500),
	    product_image VARCHAR(500),
	    product_price VARCHAR(50)
    ); 
*/
connection.connect(function (err) {
    if (err) throw err;
    //console.log('MySQL succesfully connected.');
});

module.exports = connection;
