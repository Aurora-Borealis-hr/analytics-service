const express = require('express');
// const faking = require('./fakingfunctions.js');
const app = express();

app.get('/', function(req, res) {
  res.send('test');
});

