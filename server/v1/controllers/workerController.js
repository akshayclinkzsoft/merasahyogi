const service = require('../services/workerService')
let workerService = new service()

class workderController {
    signUp(req, res) {
        workerService.signUp(req, res).then(result => {
            return res.success(result.code, '', result.data)
        }).catch(error => {
            return res.reject(error.code, error.message)
        });
    }



   sendOTP(req, res) {
        workerService.sendOTP(req, res).then(result => {
            return res.success(result.code, result.message, result?.data)
        }).catch(error => {
           // console.log('errr', error)
            return res.reject(error.code ,error.message)
        });
    }

    
verifyNumber(req, res) {
    workerService.verifyNumber(req, res).then(result => {
        return res.success(result.code, result.message, result?.data)
    }).catch(error => {
       // console.log('errr', error)
        return res.reject(error.code ,error.message)
    });
}

}

module.exports = workderController