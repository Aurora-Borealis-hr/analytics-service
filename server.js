const express = require('express');
const bodyParser = require('body-parser');
const faking = require('./data/faking.js');
const seeding = require('./data/db/seeding.js');
const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.listen(3000, () => console.log('port 3000'));

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