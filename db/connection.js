const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/copro_workers', { useNewUrlParser: true });

mongoose.Promise = Promise;

module.exports = mongoose;
