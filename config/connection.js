require('dotenv').config();

const Sequelize = require('sequelize');

const fs = require('fs')

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'db.stippled.art',
    dialect: 'mysql',
    dialectOptions: {
      decimalNumbers: true,
      ssl: {
        key: fs.readFileSync('./certs/client-key.cer'),
        cert: fs.readFileSync('./certs/client-cert.cer'),
        ca: fs.readFileSync('./certs/server-ca.cer')
      },
    },
  });

module.exports = sequelize;