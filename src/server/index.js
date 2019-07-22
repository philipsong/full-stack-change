const express = require('express');
const os = require('os');
const primeNumbersController = require('./controllers/primeNumbersController');

const app = express();

app.use(express.static('dist'));
app.get('/api/median-primes/:num', primeNumbersController.getMedianPrimesUnderN)

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
