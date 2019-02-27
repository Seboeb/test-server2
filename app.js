const express = require('express');
const fs = require('fs');
const app = express();
const port = 8010;

app.get('/', (req, res, next) => {
  const filename = new Date().toLocaleTimeString() + '.txt';
  fs.writeFile('./test-data/' + filename, 'Hello content! This is the date: ' + filename, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
  res.send('Hello world! You are now connected :)')
});

app.listen(port, () => console.log('server is running'));