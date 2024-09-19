var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const CONFIG = require('../config/appConfig')
const Schema = mongoose.Schema;

otpSchema = new mongoose.Schema({
    dialCode: {
        type: String
    },
    countryCode: {
        type: String,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    otp :{
        type : String
    },
   type : {
    type :Number
   },
    status: {
        type: Number,
        default: CONFIG.ACTIVE_STATUS,  // 0 = inactive, 1 = active, 2 = deleted
        index: true
    }
 
  
},
    {
        timestamps: true,
        toObject: { virtuals: true },
        toJSON: { virtuals: true }
    });


module.exports = mongoose.model('otp', otpSchema);