const mysql = require('mysql');

var connection = initializeConnection({
    host: "mysql",
    user: "root",
    password: "password",
    database: "etsy"
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



function initializeConnection(config) {
    function addDisconnectHandler(connection) {
        connection.on("error", function (error) {
            if (error instanceof Error) {
                if (error.code === "PROTOCOL_CONNECTION_LOST") {
                    console.error(error.stack);
                    console.log("Lost connection. Reconnecting...");
                    initializeConnection(connection.config);
                } else if (error.fatal) {
                    throw error;          
                }
            }
        });
    }

    var connection = mysql.createConnection(config);

    // Add handlers.
    addDisconnectHandler(connection);

    connection.connect();
    return connection;
}




module.exports = connection;
