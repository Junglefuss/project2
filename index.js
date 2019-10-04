const express = require('express');
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
app.use('/sign-up', workerController);

app.listen(3000, () => console.log('{{{{{  INDEX.JS FILE IS RUNNING }}}}}'));
