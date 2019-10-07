const express = require('express');
const router = express.Router();

const Worker = require('../models/Worker');

// router.get('/', (req, res) => {
//   Worker.find({}).then(workers => res.json(workers));
// });

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/', (req, res) => {
  Worker.create(req.body).then(worker => {
    res.redirect(`/id/${res.body._id}`);
  });
});

router.get('/id/:id', (req, res) => {
  Worker.findOne({ _id: req.params.id }, req.body, { new: true })
    // .then(worker => res.json(worker))
    .then(worker => {
      res.render('profile', { worker });
    });
});

// router.get('/name/:name', (req, res) => {
//   Worker.findOne({ name: req.params.name }).then(worker => res.json(worker));
// });

// router.post('/new', (req, res) => {
//   Worker.create(req.body).then(worker => res.json(worker));
// });

// router.put('/id/:id', (req, res) => {
//   Worker.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(worker =>
//     res.json(worker)
//   );
// });

// router.delete('/id/:id', (req, res) => {
//   Worker.findOneAndDelete({ _id: req.params.id }).then(worker => res.json(worker));
// });

module.exports = router;
