const dotenv = require('dotenv');
const db = require('./db');
dotenv.config();

console.log(process.env.DB_NAME);
