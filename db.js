const mongoose = require('mongoose');

//console.log(process.env);

const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;
const DB_HOST = process.env.DB_HOST;
require('dotenv').config();
//const url = `mongodb+srv://user1:${DB_PASS}@backend.itgsk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const url =
	'mongodb+srv://backend.itgsk.mongodb.net/test?retryWrites=true&w=majority, { user: process.env.DB_USER, pass: process.env.DB_PASS })';
//const url =
//'mongodb+srv://user1:bsg0OlVyHUA9igKW@backend.itgsk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const connectdb = async () => {
	try {
		await mongoose.connect(url);
		console.log('MongoDb well connected');
	} catch (err) {
		console.log(err);
	}
};
module.exports = connectdb;
