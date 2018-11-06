const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const NewsAPI = require('newsapi');
const app = express()
const newsapi = new NewsAPI('********');

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})



app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')



app.get('/', function (req, res) {
  res.render('index', {news: ''});
})

app.post('/', function (req, res) {
  let story = req.body.story;

  	//story({
	  newsapi.articles({
	  source: 'associated-press', // required
	  sortBy: 'top' // optional
	}, function(stories) {
		let storyTitle = story.title;
		res.render('index', {news: storyTitle, error: null});

		console.log(articlesResponse);

	
	

});

})


