const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');

const app = express();
const hbs = handlebars.create({
  defaultLayout: 'layout',
  extname: 'hbs',
  layoutsDir: path.join(__dirname, 'views'),
  partialsDir: path.join(__dirname, 'views'),
});

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

app.engine('hbs', hbs.engine);

app.get('/', (req, res) => {
  res.render('map', req.query);
});

module.exports = app;
