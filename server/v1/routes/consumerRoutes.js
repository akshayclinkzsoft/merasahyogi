var express = require('express');
var route = express.Router();
const {upload} = require("../../utils/FileUploadUtils")
const consumerController = require('../controllers/consumerController')
let consumerRepo = new consumerController()

route.post("/signup",upload.single('profilePicture'),  consumerRepo.signUp);
route.post('/sendotp', consumerRepo.sendOTP)
route.post("/verifynumber", consumerRepo.verifyNumber)

module.exports = route;