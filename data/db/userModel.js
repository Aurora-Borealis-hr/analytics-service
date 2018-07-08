const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: String,
  interactions: [ {
    interactionId: String,
    interactionScore: Number,
    adType: String,
    subscribedUser: Boolean,
    interactionDate: Date,
    playerOS: String,
    country: String,
    state: String,
    city: String
  } ]
});