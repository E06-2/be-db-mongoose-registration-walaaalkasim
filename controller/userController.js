const User = require('../models/User');

exports.register = async (req, res) => {
	try {
		const newUser = await User({ ...req.body });

		newUser.save((err, doc) => {
			if (err) {
				console.log('there is an error', err);
			} else {
				console.log(doc);
				console.log('document saved !!');
				res.send('done!');
			}
		});
	} catch (e) {
		console.log(e, 'error');
		res.send('there is an error');
	}
};
