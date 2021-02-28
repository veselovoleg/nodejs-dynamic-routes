const express = require('express');
const app = express();

const homeRouter = require('./routes/home.js')
const usersRouter = require('./routes/users.js');

app.use('/', homeRouter);
app.use('/users', usersRouter);

module.exports = app;
