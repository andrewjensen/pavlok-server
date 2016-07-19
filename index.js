const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/fail', (req, res) => {
  res.send('build failed!');
});

app.get('/pass', (req, res) => {
  res.send('build passed!');
});

app.listen(PORT, function () {
  console.log(`Server running on port ${PORT}`);
});
