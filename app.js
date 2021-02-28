const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const homeRouter = require('./routes/home-router.js')
const usersRouter = require('./routes/users-router.js');
const addNewCategoriesRouter = require('./routes/add-new-categories-router');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public')));

app.use('/', homeRouter);
app.use('/users', usersRouter);
app.use('/api/categories', addNewCategoriesRouter);

module.exports = app;
