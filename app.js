var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoClient = require('mongodb').MongoClient;
var mysqlClient = require('mysql');

var indexRouter = require('./routes/index');
globalHelper = require('./helpers/globalHelper');

globalDbStatus='';
globaldbHelper = require('./helpers/dbHelper');
globalDbFile = require('./config/database');
globalDb = globalDbFile.defaultDbClient();
var dbConfig = globalDbFile.getDbConfigruation();
var username = dbConfig.username;
var password = dbConfig.password;
var database = dbConfig.database;
var host = dbConfig.host;
var port = dbConfig.port;
var cloud = dbConfig.cloud;
if(globalDb=='mysql'){
	var connection = globaldbHelper.dbMysqlConnection(dbConfig);
	globalDbStatus = connection.message;
}
else{
	var connection = globaldbHelper.dbMongoConnection(dbConfig);
	globalDbStatus = connection.message;

}

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
