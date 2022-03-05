require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const Tweet = require('./models/tweet');
const PORT = process.env.PORT;

const app = express();

app.listen(PORT, () => console.log('connected'));