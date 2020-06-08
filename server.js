const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});
app.listen(1337, () => {
  console.log('Listening on port 1337');
})