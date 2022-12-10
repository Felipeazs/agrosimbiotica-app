const express = require('express');
const cors = require('cors')
const path = require('path');
require('dotenv').config();

const PORT = process.env.PORT || 8000;
const ENV = process.env.NODE_ENV
const origins = ENV === 'production' ? process.env.ORIGIN : 'http://localhost:3000'

const app = express();
app.use(cors({
    origin: [origins]
}))

app.get('/api', (req, res, next) => {
    res.send({ msg: 'API up and running...' });
});

//Serve Frontend
// if (process.env.NODE_ENV === 'production') {
//     //create static build folder for the frontend
//     app.use(express.static(path.join(__dirname, '../frontend/build')));
//
//     //serve index.html for all routes
//     app.get('*', (req, res) => res.sendFile(__dirname, '../', 'frontend', 'build', 'index.html'));
// } else {
//     app.get('/', (req, res) => {
//         res.status(200).send('API is running...');
//     });
// }

app.listen(PORT, () => {
    console.log('origin:', origins)
    console.log('env:', ENV)
    console.log(`Listening on port ${PORT}`);
});
