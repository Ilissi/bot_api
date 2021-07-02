let createError = require('http-errors');
let express = require('express')
let helmet = require('helmet');
let logger = require('morgan');
let compression = require('compression')
let path = require('path')
let fs = require('fs')

let ideasRoutes = require('../bot_api/routes/ideas')

let app = express();
let accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

app.use(logger('dev', { stream: accessLogStream }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(compression());

app.use('/api/ideas', ideasRoutes);

app.use(function(req, res, next) {
    next(createError(404));
});


app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;