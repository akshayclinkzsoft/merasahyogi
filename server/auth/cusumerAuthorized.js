const CONSTANT = require("../config/appConfig");
const jwtUtil = require("../utils/JwtUtils");
const Consumer = require("../models/consumer")

module.exports = (req, res, next) => {

  if (!req.headers.authorization) {
    return res.reject(
      CONSTANT.ERROR_CODE_UNAUTHORIZED,
      CONSTANT.TOKENNOTCORRECT
    );
  }

  const parts = req.headers.authorization.split(" ");
  const token = parts[1];

  jwtUtil.verify(token, (error, userdata) => {
    if (error)
      return res.reject(
        CONSTANT.ERROR_CODE_UNAUTHORIZED,
        CONSTANT.TOKENNOTCORRECT
      );

      Consumer.findOne({ _id: userdata._id })
      .lean()
      .then(async (user) => {
        if (!user)
          return res.reject(
            CONSTANT.ERROR_CODE_UNAUTHORIZED,
            CONSTANT.TOKENNOTCORRECT
          );

        if (user.status !== CONSTANT.ACTIVE_STATUS)
          return res.reject(
            CONSTANT.ERROR_CODE_UNAUTHORIZED,
            CONSTANT.DISABLED_AUTHORIZATION
          );

       
        req.user = user;
        next();
      });
  });
};
