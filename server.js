require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const PORT = process.env.PORT;
const tweets = require('./controllers/tweet');
const UserRouter = require('./controllers/user');

const app = express();
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx');

app.use(morgan('tiny'));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(express.static('public'));

app.use(
    session({
        secret: process.env.SECRET,
        store: MongoStore.create({mongoUrl: process.env.MONGO_URI}),
        saveUninitialized: true,
        resave: false
    })
);

app.use('/tweets', tweets);
app.use('/user', UserRouter);

app.get('/', (req,res) => {
    res.render('Index');
})

app.listen(PORT, () => console.log('connected'));