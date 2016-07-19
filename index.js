const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/fail', (req, res) => {
  res.send('build failed!');
});

app.get('/pass', (req, res) => {
  res.send('build passed!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
