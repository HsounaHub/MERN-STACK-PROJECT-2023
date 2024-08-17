// carModel.js

const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  mileage: {
    type: Number,
    required: true,
  },
  startingBid: {
    type: Number,
    required: true,
  },
  carImage: {
    type: String,
    required: true,
  },
});

const Car = mongoose.model('Car', carSchema);

module.exports = {Car};
