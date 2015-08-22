// "how are we going mess around with article if we don't have article" - Alex. "We need to require it."
var Article = require('../models/Article');

function index(request, response){
	Article.find(function(error, articles){
		if (error) console.error('could not get articles b/c', error);

		response.json(articles);
	})
}

function create(request, response){
	console.log(request.body);
	var article = new Article(request.body);

	article.save(function(error) {
		if (error) console.error('Could not create b/c:', error);

		response.json({message: 'Article successfully created'});
	})
}

function show(request, response){
	Article.findById(request.params.article_id, function(error, article){
		if(error) console.error('could not get article');

		response.json(article);
	})
}

function update(request, response){
	var id = request.params.article_id
	var data = request.body

	Article.findById(id, function(error, article){
		if (error) console.error('could not update article');

		Object.keys(data).forEach(function(key){
			article.set(key, data[key]); // replaces the keys value in update
		});

		article.save(function(error){
			if (error) console.error('could not patch');

			response.json({message: 'article was successfully updated'});
		});
	})
}

module.exports = {
	index: index, //calling function named index above and setting it to index in exports so it can be used elsewhere
	create: create,
	show: show,
	update: update
}
