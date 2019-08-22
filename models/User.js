const mongoose = require('mongoose');
const { Schema } = mongoose;

/* Tao Schema for Userdatabase */
const userSchema = new Schema({
  googleID: String
});
// mot model dai dien cho mot collection
mongoose.model('users', userSchema);
