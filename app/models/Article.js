var mongoose = require('mongoose');
var Schema = mongoose.Schema; //invoking schema and setting it (mongoose.Schema) to a new variable of Schema

var ArticleSchema = new Schema({
	title: String,
	created_date: Date,
	votes: Number,
	author: String
}) //new instance of schema

// first argument "how do we want to refer to this in other files"  - second argument "what defines this or what is it's value"
module.exports = mongoose.model('Article', ArticleSchema);