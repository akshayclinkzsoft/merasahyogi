require('dotenv').config()

let appConfig = {
    PORT: process.env.APIPORT,
    JWT_ENCRYPTION: 'iAmMeraSahyogi#2024',
    CRYPT_SECRET_KEY: 'iAmMeraSahyogiEncrypt_&&^^(())',

    SUCCESS_CODE: 200,
    ERROR_CODE_UNAUTHORIZED: 401,
    ERROR_CODE_FORBIDDEN: 403,
    ERROR_CODE: 422,
    ERROR_CODE_BLOCKED_USER: 450,
    ERROR_CODE_DELETED_USER: 451,
    ERROR_CODE_TOO_MAY_ATTEMPTS: 300,


    ACTIVE_STATUS: 1,
    INACTIVE_STATUS: 0,
    DELETED_STATUS: 2,
    DENIED_STATUS: 2,
    PENDING_STATUS: 0,
    ACCEPTED_STATUS: 1,
    USER_IMAGE: 'static/files/',

    // Auth 
    ERR_SERVER_MSG: 'ERR_SERVER_MSG',
    TOKENNOTCORRECT: 'TOKENNOTCORRECT',
    TOKEN_MISSING: 'TOKEN_MISSING',
    DISABLED_AUTHORIZATION: 'DISABLED_AUTHORIZATION',

    //user

    ERR_EMAIL_ALREADY_TAKEN: 'ERR_EMAIL_ALREADY_TAKEN',
    ERR_PHONE_ALREADY_TAKEN: 'ERR_PHONE_ALREADY_TAKEN',
    USERID_NOT_CORRECT: 'USERID_NOT_CORRECT',
    USER_NOT_EXISTS: 'USER_NOT_EXISTS',
    ERR_MISSING_PASSWORD: 'ERR_MISSING_PASSWORD',
    ERR_MISSING_EMAIL: 'ERR_MISSING_EMAIL',
    ERR_NAME_MISSING:"ERR_NAME_MISSING",
    ERR_PHONE_MISSING:"ERR_PHONE_MISSING",
    ERR_OTP_MISSING :"ERR_OTP_MISSING",
    ERR_OTP_INCORRECT:"ERR_OTP_INCORRECT",

    SIGNUP_SUCCESSFULLY :"SIGNUP_SUCCESSFULLY",
    OTP_SEND_SUCCESSFULLY:"OTP_SEND_SUCCESSFULLY",
    LOGIN_SUCCSSFULLY :"LOGIN_SUCCESSFULLY",
    PLEASE_REGISTER :"PLEASE_REGISTER",
    ID_NOT_CORRECT: 'ID_NOT_CORRECT',



}

module.exports = appConfig