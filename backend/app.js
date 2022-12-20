const express = require('express');
const cors = require('cors')
require('dotenv').config();

const PORT = process.env.PORT || 8000;
const NODE_ENV = process.env.NODE_ENV
const ORIGIN = process.env.ORIGIN
const origins = NODE_ENV === 'production' ? ORIGIN : 'http://localhost:3000'

const app = express();
app.use(cors({
    origin: [origins]
}))

app.get('/api', (req, res, next) => {
    res.send({ msg: 'API up and running...' });
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
