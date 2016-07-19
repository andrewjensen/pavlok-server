const express = require('express');

const app = express();
module.exports = app;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/fail', (req, res) => {
  res.send('build failed!');
});

app.get('/pass', (req, res) => {
  res.send('build passed!');
});
