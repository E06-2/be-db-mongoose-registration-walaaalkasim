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
		password
		// firstName,
		// lastName,
		// dateOfBirth,
		// email,
		// telephone,
		// gender
	} = req.body;
	console.log('body', req.body);
	//console.log('req-body', req.body);
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

	newUser.save((err, doc) => {
		if (err) {
			console.log(err);
			res.send('there is an error');
		} else {
			console.log(doc);

			res.send('data saved !!');
		}
	});

	if (newUser) {
		console.log('the promise is successful');
	} else {
		console.log(' the promise is unsuccessful');
	}
});

const port = 8082;
//const port = process.env.PORT;
app.get('/test', (req, res) => {
	res.send('testing : get is working');
});
app.listen(port, () => console.log(`server started on port ${port}`));
