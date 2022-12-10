const express = require('express');
const cors = require('cors')
const path = require('path');
require('dotenv').config();

const PORT = process.env.PORT || 8000;

const app = express();
app.use(cors({
    origin: ['http:localhost:3000']
}))

app.get('/api', (req, res, next) => {
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

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
