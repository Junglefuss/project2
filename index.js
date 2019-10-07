const express = require('express');
const mongoose = require('mongoose');
const parser = require('body-parser');
const methodOverride = require('method-override');
const cors = require('cors');

const workerController = require('./controllers/workers');
// const companyController = require('./controllers/company');

const app = express();

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(methodOverride('_method'));
app.use(cors());
app.use('/', workerController);
app.use('/images', express.static('images'));
app.use(express.static('views'));

app.set('view engine', 'hbs');

app.listen(3000, () => console.log('{{{{{  INDEX.JS FILE IS RUNNING }}}}}'));
