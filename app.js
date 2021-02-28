const express = require('express');
const app = express();
const path = require('path');

const homeRouter = require('./routes/home-router.js')
const usersRouter = require('./routes/users-router.js');

app.use(express.static(path.join(__dirname, '/public')));

app.use('/', homeRouter);
app.use('/users', usersRouter);

module.exports = app;
