const mongoose = require('mongoose');

/*
    - Ticket
        -subtotal (number)
        -IVA (number)
        -total (number)
        -articulos (articulo)
*/

const ticketSchema = new mongoose.Schema({
  subtotal: {
    type: Number,
    default: 0,
  },
  taxes: {
    type: Number,
    default: 0,
  },
  total: {
    type: Number,
    default: 0,
  },
  products: {
    type: mongoose.Types.ObjectId,
    ref: 'Products',
  },
});

const Tickets = mongoose.model('Tickets', ticketSchema);

module.exports = Tickets;