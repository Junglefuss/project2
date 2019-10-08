const express = require('express');
const router = express.Router();

const Worker = require('../models/Worker');

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/', (req, res) => {
  Worker.create(req.body).then(worker => {
    res.redirect(`/id/${worker.id}`);
  });
});

router.get('/id/:id', (req, res) => {
  Worker.findOne({ _id: req.params.id }, req.body, { new: true }).then(worker => {
    res.render('profile', { worker });
  });
});

router.get('/edit/:id', (req, res) => {
  Worker.findOne({ _id: req.params.id }, req.body, { new: true }).then(worker => {
    res.render('edit', { worker });
  });
});

router.put('/edit/:id', (req, res) => {
  Worker.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(worker => {
    res.render('profile', { worker });
  });
});

router.get('/delete/:id', (req, res) => {
  Worker.findOneAndRemove({ _id: req.params.id }).then(restaurant => {
    res.redirect('/');
  });
});

module.exports = router;
