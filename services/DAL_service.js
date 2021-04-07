const mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'YOUR_DATABASE_USERNAME',
    password: 'YOUR_DATABASE_PASSWORD',
    database: 'YOUR_DATABASE_NAME',
});

connection.connect(function (err) {
    if (err) throw err;
    //console.log('MySQL succesfully connected.');
});

module.exports = connection;
