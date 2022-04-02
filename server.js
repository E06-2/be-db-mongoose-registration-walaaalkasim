const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./db');
const dotenv = require('dotenv');
const User = require('./models/User');

dotenv.config();
app.use(express.json());
app.use(cors());

//const userRoute = require('./routes/userRoute');
db();

app.post('/user/register', async (req, res) => {
	console.log(req.body);
	try {
		const newUser = await User({ ...req.body });
		newUser.save();
	} catch (e) {
		console.log(e, 'error');
		res.send('there is an error');
	}
});

const port = 8082;

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
