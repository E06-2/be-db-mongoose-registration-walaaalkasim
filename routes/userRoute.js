const express = require('express');
const User = require('../models/User');
const router = express.Router();
router.post('/register', async (req, res) => {
	// let {
	// 	username,
	// 	password,
	// 	firstName,
	// 	lastName,
	// 	dateOfBirth,
	// 	email,
	// 	telephone,
	// 	gender
	// } = req.body;

	const newUser = await User.create({
		username: 'francsmit',
		password: '1234',

		firstName: 'franco',
		lastName: 'smith',
		dateOfBirth: new Date(),
		email: 'test@test.com',
		telephone: '0123456789',
		gender: 'Male'
	});

	if (newUser) {
		newUser.save((err, doc) => {
			if (err) {
				console.log(err);
				res.send('there is an error');
			} else {
				console.log(doc);
				res.send('data saved !!');
			}
		});
	}

	//console.log('user created');
});

module.exports = router;
