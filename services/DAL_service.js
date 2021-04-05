const mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sociality'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log('MySQL succesfully connected.');
});

module.exports = connection;