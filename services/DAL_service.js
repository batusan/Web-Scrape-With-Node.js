const mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'mysql',
    user: 'dbconn',
    password: 'password',
    database: 'etsy',
});

/*
 *Database schema for product
    CREATE TABLE IF NOT EXISTS products (
        product_id INT AUTO_INCREMENT,
        product_name VARCHAR(500),
        product_image VARCHAR(500),
        product_price VARCHAR(50),
        PRIMARY KEY(product_id)
    ); 
*/



function handleDisconnect() {                                                  // the old one cannot be reused.

    connection.connect(function (err) {              // The server is either down
        if (err) {                                     // or restarting (takes a while sometimes).
            console.log('error when connecting to db:', err);
            setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
        }                                     // to avoid a hot loop, and to allow our node script to
    });                                     // process asynchronous requests in the meantime.
    // If you're also serving http, display a 503 error.
    connection.on('error', function (err) {
        console.log('db error', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
            handleDisconnect();                         // lost due to either server restart, or a
        } else {                                      // connnection idle timeout (the wait_timeout
            throw err;                                  // server variable configures this)
        }
    });
}

handleDisconnect();


module.exports = connection;
