const express = require('express');
const app = express();
const port = 8010;

app.get('/', (req, res, next) => res.send('Hello world! You are now connected :)'));

app.listen(port, () => console.log('server is running'));