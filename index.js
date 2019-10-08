const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const parser = require('body-parser');
const cors = require('cors');

const workerController = require('./controllers/workers');

const app = express();

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(methodOverride('_method'));
app.use(cors());
mongoose.set('useFindAndModify', false);

app.use('/', workerController);
app.use(express.static('images'));
app.use(express.static('public'));

app.set('view engine', 'hbs');
app.set('views', 'public/views');
app.set('images', 'public/images');
app.set('port', process.env.PORT || 8080);

app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
