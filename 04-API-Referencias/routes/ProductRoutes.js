const express = require('express');
const router = express.Router();

const Products = require('../models/Products');

router.post('/api/products', (req, res) => {
  const { body } = req;
  const newProduct = new Products(body);
  newProduct.save()
    .then(mongoRes => res.status(201).json(mongoRes))
    .catch(err => res.status(400).json(err));
});

router.get('/api/products', (req, res) => {
  Products.find()
    .then(mongoRes => res.status(201).json(mongoRes))
    .catch(err => res.status(400).json(err));
});

router.get('/api/products/:id', (req, res) => {
  const { id } = req.params;
  Products.findById(id)
    .then(mongoRes => res.status(200).json(mongoRes))
    .catch(err => res.status(400).json(err));
});

router.patch('/api/products/:id', (req, res) => {
  const { id } = req.params;
  const { body } = req;
  Products.findByIdAndUpdate(id, body, { new: true })
    .then(mongoRes => res.status(200).json(mongoRes))
    .catch(err => res.status(400).json(err));
});

router.delete('/api/products/:id', (req, res) => {
  const { id } = req.params;
  Products.findByIdAndDelete(id)
    .then(() => res.status(204).json())
    .catch(err => res.status(400).json(err));
});

module.exports = router;