var express = require('express');
var route = express.Router();
const {upload} = require("../../utils/FileUploadUtils")
const consumerController = require('../controllers/consumerController')
let consumerRepo = new consumerController()

const auth = require("../../auth/cusumerAuthorized");


route.post("/signup",upload.single('profilePicture'),  consumerRepo.signUp);
route.post('/sendotp', consumerRepo.sendOTP)
route.post("/verifynumber", consumerRepo.verifyNumber)
route.post("/findworkers", auth ,consumerRepo.consumerRequest)
route.get("/getrequests", auth ,consumerRepo.getconsumerRequests)



module.exports = route;