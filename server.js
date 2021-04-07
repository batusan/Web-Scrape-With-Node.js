const express = require("express");
const path = require('path');
const cors = require('cors');


const products = require('./routes/products');

const port = process.env.PORT || 8080;
var app = express();



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', express.static(path.join(__dirname, 'frontend')))


app.use('/api/', products);

app.listen(port, () => console.log('API listening on port ' + port));