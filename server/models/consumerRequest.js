var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const CONFIG = require('../config/appConfig')
const Schema = mongoose.Schema;

consumerRequestSchema = new mongoose.Schema({

   type :{
    type :String ,
    required :true
   },
   userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
   
  numberOfPerson:{
    type:String
  },
    address :{
        type:String
    },
  
    location: {
        type: { type: String },
        coordinates: [], // Define as an array to store [longitude, latitude] pairs
      },
      experience :{
        type :String
      },
     
    date :{type :Date ,
        default : Date.now()
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

    consumerRequestSchema.index({ location: "2dsphere" });

module.exports = mongoose.model('ConsumerRequest', consumerRequestSchema);