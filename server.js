const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});
app.get('/about', (req, res) => {
  res.sendFile('about.html');
});
app.listen(1337, () => {
  console.log('Listening on port 1337');
})