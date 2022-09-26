const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
	console.log('Hello World!');
	res.send('Hello World!');
});

app.listen(5001, () => {
	console.log('Listening on port 5001');
});
