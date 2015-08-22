var express = require('express'); //express module
var apiRouter = express.Router(); //route will only deal with API
var articlesController = require('../controllers/articlesController');

apiRouter.route('/articles')
	
	// dont put a ; here so that you may continue to chain onto this...
	.post(articlesController.create)

	.get(articlesController.index);

apiRouter.route('/article/:article_id')

	.get(articlesController.show)

	.patch(articlesController.update);


module.exports = apiRouter;