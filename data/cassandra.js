const cassandra = require('cassandra-driver');
const async = require('async');

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  keyspace: 'analytics'
});

client.connect( (err, result) => {
  if (err) {
    console.log('ERROR ', err);
  }
});