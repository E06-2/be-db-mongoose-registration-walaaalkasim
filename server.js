//equire('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./db');
const dotenv = require('dotenv');
const User = require('./models/User');

dotenv.config();
app.use(express.json());
app.use(cors());

const userRoute = require('./routes/userRoute');
db();
//app.use('/user', userRoute);

app.post('/user/register', async (req, res) => {
	let {
		username,
		password,
		firstName,
		lastName,
		dateOfBirth,
		email,
		telephone,
		gender
	} = req.body;
	try {
		const newUser = await User.create({
			username: 'sara512',
			password: '1234',
			firstName: 'sarah',
			lastName: 'dir',
			dateOfBirth: new Date(),
			email: 'test@test.com',
			telephone: '0123456789',
			gender: 'Female'
		});

		req.body = newUser;
		console.log('body', req.body.username);
		res.send('200');

		if (newUser) {
			console.log('the promise is successful');
			console.log(newUser);
		} else {
			console.log(' the promise is unsuccessful');
		}

		newUser.save((err, doc) => {
			if (err) {
				console.log(err);
				//res.send('there is an error');
			} else {
				console.log(doc);

				//res.send('data saved !!');
			}
		});
	} catch (e) {
		console.log(e, 'error');
		res.send('400');
	}
});

const port = 8082;
//const port = process.env.PORT;
app.get('/user/list', (req, res) => {
	res.send('testing : get is working');
	try {
		const user = User.find();
		console.log(user.username);
	} catch (e) {
		console.log('error', e);
	}
});
app.listen(port, () => console.log(`server started on port ${port}`));
