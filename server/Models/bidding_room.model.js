const mongoose = require('mongoose');

const biddingRoomSchema = new mongoose.Schema({
  car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Car',
    required: true,
  },
  users: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }],
  currentBid: {
    type: Number,
    default: 0,
  },
  bids: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      bidAmount: {
        type: Number,
        required: true,
      },
      bidTime: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  auctionEndTime: {
    type: Date,
    required: true,
  },
},{timestamps : true});

const BiddingRoom = mongoose.model('BiddingRoom', biddingRoomSchema);

module.exports = {BiddingRoom};
