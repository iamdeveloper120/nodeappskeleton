/**
| -------------------------------------------------------------------
| DATABASE CONNECTIVITY SETTINGS
| -------------------------------------------------------------------
| This file will contain the settings needed to access your database.
| -------------------------------------------------------------------
| EXPLANATION OF VARIABLES
| -------------------------------------------------------------------
|	['dsn']      The full DSN string describe a connection to the database.
|	['hostname'] The hostname of your database server.
|	['username'] The username used to connect to the database
|	['password'] The password used to connect to the database
|	['database'] The name of the database you want to connect to
| -------------------------------------------------------------------
| DEFAULT DATABASE `mongodb`
| -------------------------------------------------------------------
*/
var defaultdb ='mysql';

module.exports = {
	defaultDbClient: function(){
		return defaultdb;
	},
	getDbConfigruation: function(){
		return {
			'username':'',
			'password':'',
			'host':'',
			'port':'',
			'database':'',
			'cloud':false
		}
	},

}