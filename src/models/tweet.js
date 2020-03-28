const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema(
  {
    body: {
      type: String,
      required: true,
      trim: true
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
);

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;
