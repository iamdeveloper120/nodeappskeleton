exports.index = function(req, res) {
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
};

exports.page2 = function(req, res){
	var data={};
	data.content_view='page2';
    data.title='node app skeleton';
	res.render('content', data);
}