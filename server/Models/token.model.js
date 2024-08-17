const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Token = mongoose.model('Token', tokenSchema);

module.exports = {Token};