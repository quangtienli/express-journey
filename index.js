const express = require('express');
const app = express();
const port = 3000;

const users = require('./users');

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send(`Server is running`);
});

app.use('/users', users);

app.listen(port, () => {
  console.log(`Server is running healthily on port ${port}`);
});
