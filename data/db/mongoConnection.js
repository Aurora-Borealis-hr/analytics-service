const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/analytics_service');
mongoose.connection.once('open', () => console.log('Conntected to DB') );