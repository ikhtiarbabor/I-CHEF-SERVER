const express = require('express');
const app = express();
const port = process.env.PORT || 2000;
const cors = require('cors');
const allChef = require('./data/allChef.json');
const food = require('./data/Food.json');
app.use(cors());

app.get('/', (req, res) => {
  res.send(allChef);
});
app.listen(port);
