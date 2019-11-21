const express = require('express');
const app = express();

app.listen(8080);
console.log('Listening on localhost:8080...');

app.use(express.static('client/dist/'));