require('dotenv').config();
require('./mongoClient/index.js');

const Products = require('./models/Products');

Products.find()