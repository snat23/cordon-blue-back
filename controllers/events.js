const express = require('express');
const router = express.Router();

router.get('/download/:id', async (req, res) => {
	const file = await filesService.downloadById(req.params.id)

	res.download(`${file.path}`);
});

router.post('/login', async (req, res) => {
	try {
		console.log(req.body);
		const user = await authService.authUser(req.body);

		if (!user) {
			res.status(404).send('user is not found');
		} else {
			res.send(user);
		}
	} catch (error) {
		res.status(500).send(error);
	}
});

module.exports = router;
