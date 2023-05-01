const express = require('express');
const app = express();
const port = process.env.PORT || 2000;
const cors = require('cors');
app.use(cors());


app.get('/', (req, res) => {
  res.send('assignment 10 is starting');
});
app.listen(port);
