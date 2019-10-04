const mongoose = require('./connection');

const Worker = require('../models/Worker');

const seedWorkers = require('./workers.json');

Worker.deleteMany({})
  .then(() => {
    return Worker.collection.insert(seedWorkers);
  })
  .then(() => {
    console.log('success');
    process.exit();
  });
