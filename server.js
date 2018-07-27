const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const faking = require('./data/faking.js');
const seeding = require('./data/db/seeding.js');
const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.listen(3000, () => console.log('listening on port 3000'));

mongoose.connect('mongodb://admin:a12345@ds255451.mlab.com:55451/analytics-service');
mongoose.connection.once('open', () => console.log('Conntected to DB'));

app.get('/', (req, res) => {
  res.send('test');
});

//accepts user object from user service and inserts it into db
app.post('/userobjects', (req, res) => {

  async function insert(req, res) {
    let obj = await faking.createSchemaEntry(req.body);
    seeding.insertArrays([obj])
    .then(res.end('insertion complete'));
  }

  insert(req, res);
}); 