const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// User Schema
const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    // required: true
  },
  lastName: {
    type: String,
    // required: true
  },
  insName: {
    type: String
    // required: true
  },
  branch: {
    type: String
    // required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  active: {
    type: Boolean,
    required: true,
    default: true
  },
  temptoken: {
    type: String,
    required: true
  },
  phone: {
    type: Number
    // required: true
  },
  username: {
    type: String,
    unique: true,
    // required: true
  },
  password: {
    type: String,
    required: true,
    // select: false
  },
  status: {
    type: String,
    default: 'Inactive'
  },
  state: {
    type: String,
    enum: ['draft', 'archived'],
    default: 'draft'
  },
  sourceApp: {
    type: String
  },
  resettoken: {
    type: String,
    require: false
  },
  gender: {
    type: String,
  },
  dob: {
    type: Date
  },
  image: {
    type: String
  },
  pincode: {
    type: Number
  },
  address: {
    type: String
  },
  UG: {
    percent: Number,
    passYear: Number,
    Univ: String
  },
  Twelfth: {
    percent: Number,
    passYear: Number,
    Univ: String
  },
  Tenth: {
    percent: Number,
    passYear: Number,
    Univ: String
  },
  progLang: {
    type: String
  },
  DB: {
    type: String
  },
  software: {
    type: String
  },
  OS: {
    type: String
  },
  MobileDev: {
    type: String
  },
  WebDeve: {
    type: String
  },
  FCMtoken: {
    type: String
  }

});

const User = (module.exports = mongoose.model('User', UserSchema));

module.exports.getUserById = function (id, callback) {
  User.findById(id, callback);
};

module.exports.getUserByEmail = function (email, sourceApp, callback) {
  const query = { email: email, sourceApp: sourceApp }
  User.findOne(query, callback);
};

module.exports.addUser = function (newUser, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) callback(err);
      else {
        newUser.password = hash;
        newUser.save(callback);
      }
    });
  });
};

// module.exports.getUsers = function (sourceApp, callback) {
//   User.find({ sourceApp: sourceApp }, function (err, users) {
//     if (err) callback(err);
//     if (users) callback(null, users);
//     else callback();
//   });
// };

module.exports.setState = function (request, callback) {
  User.findByIdAndUpdate(
    { _id: request.userid },
    { status: request.status },
    { new: true },
    function (err, user) {
      if (err) {
        callback(err);
      } else {
        // console.log(user.status);
        callback(null, user.status);
      }
    }
  );
};

module.exports.delete = function (request, callback) {
  User.findByIdAndUpdate(
    { _id: request.userId },
    {
      status: 'Inactive',
      state: 'archived'
    },
    function (err, status) {
      if (err) {
        callback(err);
      } else {
        callback(null, status);
      }
    }
  );
};
