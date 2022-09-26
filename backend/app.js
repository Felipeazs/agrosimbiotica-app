const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

app.get('/', (req, res, next) => {
	console.log('Hello World!');
	res.send('Hello World!');
});

//Serve Frontend
if (process.env.NODE_ENV === 'production') {
	//create static build folder for the frontend
	app.use(express.static(path.join(__dirname, '../frontend/build')));

	//serve index.html for all routes
	app.get('*', (req, res) => res.sendFile(__dirname, '../', 'frontend', 'build', 'index.html'));
} else {
	app.get('/', (req, res) => {
		res.status(200).send('API is running...');
	});
}

app.listen(5001, () => {
	console.log('Listening on port 5001');
});
