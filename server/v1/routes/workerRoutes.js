var express = require('express');
var route = express.Router();
const {upload} = require("../../utils/FileUploadUtils")
const workderController = require('../controllers/workerController')
let workerRepo = new workderController()

route.post("/signup",upload.single('profilePicture'),  workerRepo.signUp);
route.post('/sendotp', workerRepo.sendOTP)
route.post("/verifynumber", workerRepo.verifyNumber)

module.exports = route;