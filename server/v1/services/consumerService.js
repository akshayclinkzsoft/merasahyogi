const Worker = require("../../models/worker.js");
const Util = require("../../utils/commonUtils.js");
const errorUtil = require("../../utils/errorHandler.js");
const CONFIG = require("../../config/appConfig.js");
const OTP = require("../../models/otp.js");
const Consumer = require("../../models/consumer.js")

class consumerService {
  signUp(req, res) {
    return new Promise(async function (resolve, reject) {
      try {
        const body = req.body;

        // if (!body.email) {
        //   return reject({
        //     code: CONFIG.ERROR_CODE,
        //     message: CONFIG.ERR_MISSING_EMAIL,
        //   });
        // }
        if (!body.name) {
          return reject({
            code: CONFIG.ERROR_CODE,
            message: CONFIG.ERR_NAME_MISSING,
          });
        }
        if (!body.phoneNumber) {
          return reject({
            code: CONFIG.ERROR_CODE,
            message: CONFIG.ERR_PHONE_MISSING,
          });
        }

        if (req.file && req.file.filename) {
          body.profilePicture = `/static/files/` + req.file.filename
        }

        if (body.latitude && body.longitude) {
          let cordinates = {
            type: "Point",
            coordinates: [parseFloat(body.longitude), parseFloat(body.latitude)]
          }
          body.location = cordinates
        }


        if(body.email){

          const emailExist = await Consumer.findOne({
            email: body.email.toLowerCase(),
            status: CONFIG.ACTIVE_STATUS,
          })
          if (emailExist) {
            return reject({
              code: CONFIG.ERROR_CODE,
              message: CONFIG.ERR_EMAIL_ALREADY_TAKEN,
            });
          }
          
        }
       

        const PhoneExist = await Consumer.findOne({
          phoneNumber: body.phoneNumber,
          status: CONFIG.ACTIVE_STATUS,
        })
        if (PhoneExist) {
          return reject({
            code: CONFIG.ERROR_CODE,
            message: CONFIG.ERR_PHONE_ALREADY_TAKEN,
          });
        }

        let consumer = new Consumer(body)
        let result = await consumer.save();

        var data = JSON.parse(JSON.stringify(result));
        data.token = consumer.jwtToken();

        return resolve({
          code: CONFIG.SUCCESS_CODE,
          message: CONFIG.SIGNUP_SUCCESSFULLY,
          data: data,
        });
      } catch (err) {
        return reject({ code: CONFIG.ERROR_CODE, message: err.message });
      }
    });
  }

  sendOTP(req, res) {
    return new Promise(async function (resolve, reject) {
      try {
        const body = req.body;
        if (!body.phoneNumber) {
          return reject({
            code: CONFIG.ERROR_CODE,
            message: CONFIG.ERR_PHONE_MISSING,
          });
        }

        let findOTP = await OTP.findOne({ phoneNumber: body.phoneNumber , type : 2})
        let otp = "2345"

        let result;
        if (findOTP) {
          result = await OTP.findByIdAndUpdate(findOTP._id, { otp: otp }, { new: true })
        } else {
          let newOtp = new OTP({
            phoneNumber: body.phoneNumber,
            otp: otp,
            type : 2
          })
          result = await newOtp.save();

        }

          return resolve({
            code: CONFIG.SUCCESS_CODE,
            message: CONFIG.OTP_SEND_SUCCESSFULLY,
          });

        

      } catch (err) {
        return reject({ code: CONFIG.ERROR_CODE, message: err.message });
      }
    });
  }


  verifyNumber(req, res) {
    return new Promise(async function (resolve, reject) {
      try {
        let body = req.body
        if (!body.phoneNumber) {
          return reject({
            code: CONFIG.ERROR_CODE,
            message: CONFIG.ERR_PHONE_MISSING,
          });
        }
        if (!body.otp) {
          return reject({
            code: CONFIG.ERROR_CODE,
            message: CONFIG.ERR_OTP_MISSING,
          });
        }
        
        let matchOtP = await OTP.findOne({phoneNumber : body.phoneNumber , otp:body.otp , type : 2})
        if(!matchOtP) {
          return reject({
            code: CONFIG.ERROR_CODE,
            message: CONFIG.ERR_OTP_INCORRECT,
          });
        }
        await OTP.findByIdAndDelete(matchOtP._id)

        let checkConsumer = await Consumer.findOne({phoneNumber:body.phoneNumber})

        if(checkConsumer){
      let data =    JSON.parse(JSON.stringify(checkConsumer));
      data.token = checkConsumer.jwtToken();

          // let data = {
          //   ...result.toJSON(),
          //   token: result.token,
          // };

          return resolve({
            code: CONFIG.SUCCESS_CODE,
            message: CONFIG.LOGIN_SUCCSSFULLY,
            data:data
          });
        }else{
          return resolve({
            code: CONFIG.SUCCESS_CODE,
            message: CONFIG.PLEASE_REGISTER,
          //  data:checkWorker
          });
        }

      } catch (err) {
        return reject({ code: CONFIG.ERROR_CODE, message: err.message });
      }
    })
  }
}

module.exports = consumerService