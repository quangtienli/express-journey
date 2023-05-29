const express = require('express');
const app = express();
const port = 3000;

const users = require('./users');

app.use(express.static('public'));
app.use(express.json());
app.use((req, res, next) => {
  console.log('Time: ', Date.now());
  console.log('Request method: ', req.method);
  console.log('Request URL: ', req.originalUrl);
  next();
});

app.get('/', (req, res) => {
  res.send(`Server is running`);
});

app.use('/users', users);
app.use((err, req, res, next) => {
  res.status(200).send('Something broke');
});

app.listen(port, () => {
  console.log(`Server is running healthily on port ${port}`);
});
