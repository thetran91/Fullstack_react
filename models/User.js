const mongoose = require('mongoose');
const { Schema } = mongoose;

/* Tao Schema for Userdatabase */
const userSchema = new Schema({
  googleID: String,
  credits: { type: Number, default: 0 }
});
// mot model dai dien cho mot collection
mongoose.model('users', userSchema);
