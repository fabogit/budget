const express = require('express');

const cors = require('cors');
const logger = require('morgan');
require('dotenv').config();

const { node } = require('./config/config');
const transactionRoutes = require('./routes/transaction.route');

const app = express();

app.use(logger('dev'));
// allow js calls from f/end
app.use(cors({ origin: node.host, credentials: true }));
// allow to parse JSON from ajax request
app.use(express.json());

// routes
app.use('/transactions', transactionRoutes);

module.exports = app;