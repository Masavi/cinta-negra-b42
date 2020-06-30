require('dotenv').config();
require('./mongoClient/index.js');
const express = require('express');
const api = express();
const PORT = process.env.PORT || 3000;

api.use(express.urlencoded({ extended: true }));
api.use(express.json({ extended: true }));

const Products = require('./models/Products');

api.get('/', (req, res) => res.json({ message: "It's alive!" }));

// CRUD Products
api.use(require('./routes/ProductRoutes'));

api.listen(PORT, () => console.log(`Listening on ${PORT}`));