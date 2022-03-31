const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
	username: { type: String, required: true },
	password: { type: String, required: true },
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	dateOfBirth: { type: Date, required: true },
	email: { type: String, required: true },
	telephone: { type: String },
	gender: {
		type: String,
		enum: ['Male', 'Female', 'Other', 'N/A'],
		default: 'N/A'
	}
});
module.exports = mongoose.model('users', UserSchema);
