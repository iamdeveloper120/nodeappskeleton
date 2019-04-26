module.exports = {
	index: function(req, res) {
		var data={};
		var tagline = "Any code of your own that you haven't looked.";
		var drinks = [
			{ name: 'Bloody Mary', drunkness: 3 },
			{ name: 'Martini', drunkness: 5 },
			{ name: 'Charli', drunkness: 10 }
		];
		data.drinks=drinks;
		data.tagline=tagline;
		data.content_view='index';
		data.title='node app skeleton';
		res.render('content', data);
	},
	documentation: function(req, res){
		var data={};
		data.content_view='documentation';
		data.title='node app skeleton';
		res.render('content', data);
	}
}