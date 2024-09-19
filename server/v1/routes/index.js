var express = require('express');
var route = express.Router();

route.get('/', function (req, res) {
    res.status(200).send('Welcome to Mera Sahyogi v1 APIs...');
});

route.use('/worker', require('./workerRoutes'))
route.use('/consumer', require('./consumerRoutes'))



module.exports = route;