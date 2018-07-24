const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// User Schema
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  insName: {
    type: String,
    // required: true
  },
  branch: {
    type: String,
    // required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'Inactive'
  },
  state: {
    type: String,
    enum: ['draft', 'archived'],
    default: 'draft'
  }
});


const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function (id, callback) {
  User.findById(id, callback);
}

module.exports.getUserByUsername = function (username, sourceApp, callback) {
  const query = { username: username, sourceApp: sourceApp }
  User.findOne(query, callback);
};