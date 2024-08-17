const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "First name is required"]
  },
  lastname: {
    type: String,
    required: [true, "{PATH} is required"]
  },
  email: {
    type: String,
    required: [true, "{PATH} is required"],
    unique: true,
    validate: {
        validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Please enter a valid email"
    }
  },
  password: {
    type: String,
    required: [true, "{PATH} is required"]
  },
  phoneNumber: {
    type: String,
    required: [true, "{PATH} is required"]
  },
  token: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Token',
    required: false,
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
});

userSchema.virtual('confirmPassword')
.get( () => this._confirmPassword )
.set( value => this._confirmPassword = value );

//mideleware  use to validate match between the password and confirm password
userSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
      this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
  });
  
  userSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
      .then(hash => {
        this.password = hash;
        next();
      });
});

const User = mongoose.model('User', userSchema);

module.exports = User;
