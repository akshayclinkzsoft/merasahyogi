require('dotenv').config()

let dbConfig = {
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    dbName: process.env.DBNAME
}

module.exports = dbConfig