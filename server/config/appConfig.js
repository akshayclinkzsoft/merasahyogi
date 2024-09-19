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
    MERGE_STATUS: 3,

    USER_IMAGE: 'static/files/',

    // Auth 
    ERR_SERVER_MSG: 'ERR_SERVER_MSG',
    TOKENNOTCORRECT: 'TOKENNOTCORRECT',
    TOKEN_MISSING: 'TOKEN_MISSING',
    DISABLED_AUTHORIZATION: 'DISABLED_AUTHORIZATION',

    //user

    ERR_INVALID_EMAIL: 'ERR_INVALID_EMAIL',
    ERR_INVALID_PASSWORD: 'ERR_INVALID_PASSWORD',
    ERR_EMAIL_ALREADY_TAKEN: 'ERR_EMAIL_ALREADY_TAKEN',
    ERR_PHONE_ALREADY_TAKEN: 'ERR_PHONE_ALREADY_TAKEN',
    USERID_NOT_CORRECT: 'USERID_NOT_CORRECT',
    USER_NOT_EXISTS: 'USER_NOT_EXISTS',
    USER_CREATED_MSG: 'USER_CREATED_MSG',
    USER_UPDATED_MSG: 'USER_UPDATED_MSG',
    USER_DELETED_MSG: 'USER_DELETED_MSG',
    ERR_MISSING_PASSWORD: 'ERR_MISSING_PASSWORD',
    ERR_MISSING_EMAIL: 'ERR_MISSING_EMAIL',
    EMAIL_NOT_CORRECT: 'EMAIL_NOT_CORRECT',
    BOTH_PASS_NOT_MATCH: 'BOTH_PASS_NOT_MATCH',
    FORGOT_EMAIL_NOT_CORRECT: 'FORGOT_EMAIL_NOT_CORRECT',
    PASSWORD_UPDATED_MSG: 'PASSWORD_UPDATED_MSG',
    ERR_NAME_MISSING:"ERR_NAME_MISSING",
    ERR_PHONE_MISSING:"ERR_PHONE_MISSING",
    ERR_OTP_MISSING :"ERR_OTP_MISSING",
    ERR_OTP_INCORRECT:"ERR_OTP_INCORRECT",

    SIGNUP_SUCCESSFULLY :"SIGNUP_SUCCESSFULLY",
    OTP_SEND_SUCCESSFULLY:"OTP_SEND_SUCCESSFULLY",
    LOGIN_SUCCSSFULLY :"LOGIN_SUCCESSFULLY",
    PLEASE_REGISTER :"PLEASE_REGISTER",

    CREATED_MSG: 'CREATED_MSG',
    UPDATED_MSG: 'UPDATED_MSG',
    DELETED_MSG: 'DELETED_MSG',
    SAVE_MSG: 'SAVE_MSG',
    SEND_MSG: 'SEND_MSG',
    ADD_MSG: 'ADD_MSG',
    REMOVE_MSG: 'REMOVE_MSG',
    ARCHIVE_MSG: 'ARCHIVE_MSG',
    UNARCHIVE_MSG: 'UNARCHIVE_MSG',

    ID_NOT_CORRECT: 'ID_NOT_CORRECT',



}

module.exports = appConfig