const mongoose = require("mongoose");
const { host, port, dbName } = require('../config/dbConfig')
mongoose.Promise = global.Promise;

var url = `mongodb://${host}:${port}/${dbName}`;




mongoose.connect(url).then((res) => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = mongoose

