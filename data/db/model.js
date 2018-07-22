const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  interactions: [ {
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

const User = mongoose.model('User', userSchema);

module.exports = User;