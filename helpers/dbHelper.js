/**
 * define all your global functions
 * access these functions anywhere in the project
 * use it in the followings (routes, models, views, controller)
 * howToUse globalHelper.sayhellow('param')
 */
var mongoClient = require('mongodb').MongoClient;
var mysqlClient = require('mysql');

function dbCloudMapping(dbConfig={}){
	var username = dbConfig.username;
	var password = dbConfig.password;
	var database = dbConfig.database;
	var host = dbConfig.host;
	var port = dbConfig.port;
	var cloud = dbConfig.cloud;
	var response = {};
	if(!username || typeof username=='undefined'){
		return {'message':'cloud username required','status':0}
	}
	if(!password || typeof password=='undefined'){
		return {'message':'cloud password required','status':0}
	}
	if(!host || typeof host=='undefined'){
		return {'message':'cloud host required','status':0}
	}
	if(!port || typeof port=='undefined'){
		return {'message':'cloud port required','status':0}
	}
	if(!database || typeof database=='undefined'){
		return {'message':'cloud database name required','status':0}
	}
	return {'message':'All paramaters are fine','status':1}
}
exports.dbMongoConnection = function(dbConfig={}){
	var username = dbConfig.username;
	var password = dbConfig.password;
	var database = dbConfig.database;
	var host = dbConfig.host;
	var port = dbConfig.port;
	var cloud = dbConfig.cloud;
	var response = {};
	if(!host || typeof host=='undefined'){
		return {'message':'cloud host required','status':0}
	}
	if(!port || typeof port=='undefined'){
		return {'message':'cloud port required','status':0}
	}
	if(!database || typeof database=='undefined'){
		return {'message':'cloud database name required','status':0}
	}
	var url = 'mongodb://'+host+':'+port+'/'+database;
	if(cloud===true){
		var cloud = dbCloudMapping(dbConfig);
		if(cloud.status==0){
			return {'message':cloud.message,'status':cloud.status}
		}
		var url = 'mongodb://'+username+':'+password+'@'+host+':'+port+'/'+database;
	}
	try{
		mongoClient.connect(url,{ useNewUrlParser: true })
		return {'message':'success: db connected to '+database,'status':1}
	} catch(e){
		return {'message':'database connection error '+e,'status':0}
	}
}

exports.dbMysqlConnection = function(dbConfig={}){
	var username = dbConfig.username;
	var password = dbConfig.password;
	var database = dbConfig.database;
	var host = dbConfig.host;
	var port = dbConfig.port;
	var cloud = dbConfig.cloud;
	var response = {};
	if(!host || typeof host=='undefined'){
		return {'message':'host required','status':0}
	}
	if(!username || typeof username=='undefined'){
		return {'message':'username required','status':0}
	}
	if(!database || typeof database=='undefined'){
		return {'message':'database name required','status':0}
	}
	var connection = mysqlClient.createConnection({
		host: host,
		user: username,
		password: password,
		database: database
	});
	try{
		connection.connect();
		return {'message':'success: db connected to '+database,'status':1}
	}catch(e){
		return {'message':e.stack,'status':0}
	}
}