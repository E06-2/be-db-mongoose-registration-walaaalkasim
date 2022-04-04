const mongoose = require('mongoose');
require('dotenv').config();
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;
const DB_HOST = process.env.DB_HOST;

//const url =
//	'mongodb+srv://backend.itgsk.mongodb.net?retryWrites=true&w=majority,{user:process.env.DB_USER,pass:process.env.DB_PASS,name:process.env.DB_NAME})';
const url = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}.itgsk.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

const connectdb = async () => {
	try {
		await mongoose.connect(url);
		console.log('MongoDb well connected');
	} catch (err) {
		console.log(err);
	}
};
module.exports = connectdb;
