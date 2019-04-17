/**
 * define all your global functions
 * access these functions anywhere in the project
 * use it in the followings (routes, models, views, controller)
 * howToUse globalHelper.sayhellow('param')
 */
exports.sayhellow = function(name){
	return 'Hellow ' + name;
}