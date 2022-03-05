require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const Tweet = require('./models/tweet');
const PORT = process.env.PORT;

const app = express();
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx');

app.use(morgan('tiny'));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(express.static('public'));

app.listen(PORT, () => console.log('connected'));