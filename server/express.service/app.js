const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const idsRouter = require('./routes/ids');
const usersRouter = require('./routes/users');


const User = require('./models/persistedUser');
const {v4} = require('uuid');

const app = express();

// initialize datastore with initialUser info
let storage = app.locals
let initialUser = new User(v4(), 'Samson', 'Maconi', 'Solutions provider');
initialUser.saveToStorage(storage)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/id', idsRouter);
app.use('/user', usersRouter);

module.exports = app;
