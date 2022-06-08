const express = require('express');

const cors = require('cors');

const logger = require('morgan');
require('dotenv').config();

const transactionRoutes = require('./routes/transaction.route');

const app = express();

app.use(logger('dev'));

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

// allow to parse JSON from ajax request
app.use(express.json());

// routes
app.use('/transactions', transactionRoutes);

module.exports = app;