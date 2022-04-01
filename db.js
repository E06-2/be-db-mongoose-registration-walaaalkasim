const mongoose = require('mongoose');

const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;
const DB_HOST = process.env.DB_HOST;
require('dotenv').config();
//const url =
//	'mongodb+srv://backend.itgsk.mongodb.net?retryWrites=true&w=majority,{user:process.env.DB_USER,pass:process.env.DB_PASS,name:process.env.DB_NAME})';
//const url = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}.itgsk.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
const url = `mongodb+srv://user1:oZlR3eb41GdTa8bp@backend.itgsk.mongodb.net/demodb?retryWrites=true&w=majority,{password:process.env.DB_PASS}`;

const connectdb = async () => {
	try {
		await mongoose.connect(url);
		console.log('MongoDb well connected');
	} catch (err) {
		console.log(err);
	}
};
module.exports = connectdb;
