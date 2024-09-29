var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const CONFIG = require('../config/appConfig')
const Schema = mongoose.Schema;

consumerSchema = new mongoose.Schema({
    name: {
        type: String,
    },

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
    email: {
        type: String,
        lowercase: true,
       
    },
 
    password: {
        type: String,
        select: false
    },
    profilePicture: {
        type: String
    },
 
    permanentAddress :{
        type :String
    },
   
    currentLocation :{
        type:String
    },
    
    isPhoneVerified : {
       type:Boolean ,
       default : false
    },
    location: {
        type: { type: String },
        coordinates: [], // Define as an array to store [longitude, latitude] pairs
      },

    myReferraCode :{
        type:String
    },
    otherReferralCode :{
        type:String
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

    consumerSchema.methods.setPassword = async function (password) {
    return new Promise(async function (resolve, reject) {
        // generate a salt
        bcrypt.genSalt(parseInt(CONFIG.CRYPT_SECRET_KEY)).then(salt => {
            // hash the password using our new salt
            bcrypt.hash(password, salt).then(hash => {
                resolve(hash)
            })
        });
    });
};

consumerSchema.methods.comparePassword = async function (bodyPass) {
    let pass = await bcrypt.compare(bodyPass, this.password)
    return pass;
};

consumerSchema.methods.jwtToken = function () {
    return (jwt.sign({ email: this.email, _id: this._id,  profilePicture: this.profilePicture , name:this.name , phoneNumber :this.phoneNumber }, CONFIG.JWT_ENCRYPTION)
    );
};
consumerSchema.index({ location: "2dsphere" });

module.exports = mongoose.model('consumer', consumerSchema);