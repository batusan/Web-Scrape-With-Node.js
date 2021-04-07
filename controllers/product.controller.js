var Product = require('../models/product.model');
var Scrape = require('../services/Scrape_service');


exports.getProducts = function (req, res) {
    Product.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Products."
            });
        else res.send(data);
    });
};

exports.getProductById = function (req, res) {
    Product.findById(req.params.product_id, (err, data) => {
        if (err) {
            if (err.status === "not_found") {
                res.status(404).send({
                    message: `Not found Product with id ${req.params.product_id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Product with id " + req.params.product_id
                });
            }
        } else res.status(200).send({
            message: `ID : ${req.params.product_id} Product found.`,
            productData: data
        });
    });
};

exports.addProduct = function (req, res) {


    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    var urlAdress = req.body.url;

    Scrape.scrapeData(urlAdress, (err, data) => {
        if (err) {
            res.status(500).send({
                message: 'Error scraping Product with link ' + urlAdress
            })
        } else {
            const product = new Product({
                name: data.name,
                image: data.image,
                price: data.price
            });

            Product.add(product, (err, data) => {
                if (err)
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while adding the Product."
                    });
                else res.send({
                    message: "Product added.",
                    productData: data
                });
            });
        }
    });
};




