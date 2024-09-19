const multer = require("multer");

const upload = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "server/uploads/files");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname +
        "-" +
        Date.now() +
        `.${file.originalname.split(".").pop()}`
    );
  },
});

let uploads = {
  upload: multer({ storage: upload }),
};

module.exports = uploads;
