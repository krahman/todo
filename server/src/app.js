/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const router = require('./router');

const app = express();
const port = process.env.PORT || 8081;

// Mongodb connection
mongoose.connect('mongodb://localhost:27017/todos', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connection Succeeded'));

// Morgan logger
app.use(morgan('combined'));

// Parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/json' }));
app.use(cors());

// Application routes
router(app);

app.listen(port);
console.log(`Listening on port ${port}`);

module.exports = app;
