//equire('dotenv').config();
const express = require('express');
const app = express();
const db = require('./db');
const dotenv = require('dotenv');
app.use(express.json());
dotenv.config();
const userRoute = require('./routes/userRoute');
db();
//app.use('/user', userRoute);

app.post('/user/register', (req, res) => {
	console.log('body', req.body);
	res.send('post is not working');
});

const port = 8082;
//const port = process.env.PORT;
app.get('/test', (req, res) => {
	res.send('testing : get is working');
});
app.listen(port, () => console.log(`server started on port ${port}`));
