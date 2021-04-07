const express = require("express");
var cors = require('cors');

const products = require('./routes/products');

const port = 3000;
var app = express();



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => {
    res.json({ message: 'welcome to web service , try to /api/ !' });
});

app.use('/api/', products);

app.listen(port, () => console.log('API listening on port ' + port));