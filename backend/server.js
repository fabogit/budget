const express = require('express');

const logger = require('morgan');
require('dotenv').config();

const transactionRoutes = require('./routes/transaction.route');

const app = express();

app.use(logger('dev'));

// routes
app.use('/test', transactionRoutes);

module.exports = app;