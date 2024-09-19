const service = require('../services/consumerService')
let consumerService = new service()

class consumerController {
    signUp(req, res) {
        consumerService.signUp(req, res).then(result => {
            return res.success(result.code, '', result.data)
        }).catch(error => {
            return res.reject(error.code, error.message)
        });
    }



   sendOTP(req, res) {
    consumerService.sendOTP(req, res).then(result => {
            return res.success(result.code, result.message, result?.data)
        }).catch(error => {
           // console.log('errr', error)
            return res.reject(error.code ,error.message)
        });
    }

    
verifyNumber(req, res) {
    consumerService.verifyNumber(req, res).then(result => {
        return res.success(result.code, result.message, result?.data)
    }).catch(error => {
       // console.log('errr', error)
        return res.reject(error.code ,error.message)
    });
}

}

module.exports = consumerController