const sql = require('../services/DAL_service');

const Product = function (product) {
  this.product_name = product.name;
  this.product_image = product.image;
  this.product_price = product.price;
};

Product.add = (newProduct, result) => {
  sql.query("INSERT INTO products SET ?", newProduct, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("New Product Added: ", { id: res.insertId, ...newProduct });
    result(null, { id: res.insertId, ...newProduct });
  });
};

Product.getAll = result => {
  sql.query("SELECT * FROM products", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Products: ", res);
    result(null, res);
  });
};

Product.findById = (product_id, result) => {
  sql.query(`SELECT * FROM products WHERE product_id = ${product_id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found product: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found product with the id
    result({ status: "not_found" }, null);
  });
};



module.exports = Product;