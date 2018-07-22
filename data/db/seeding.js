const mongoose = require('mongoose');
const fakingFunctions = require('../faking.js');

mongoose.connect('mongodb://localhost/analytics');
mongoose.connection.once('open', () => console.log('Conntected to DB'));

const User = require('./model');

const insertArrays = (arrOfInteractions) => {
  return new Promise( (resolve, reject) => {
    User.insertMany(arrOfInteractions, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

async function insertIneractions(numberOfUsers) {
  let arr = await fakingFunctions.createSchemasPlural(numberOfUsers);
  insertArrays(arr);
  console.log(`Inserted ${numberOfUsers} records`);
}

// insertIneractions(10)

module.exports = {
  insertArrays,
  insertIneractions,
}