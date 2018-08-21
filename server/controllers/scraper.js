var request = require('request');
var cheerio = require('cheerio');
const Entry  = require('../models/entries');

exports.getTopics = function(req, res, next) {
   
	request('https://en.wikipedia.org/wiki/Frenkie_de_Jong', function(err, resp, html) {
	        if (!err){
	          const $ = cheerio.load(html);
	          // console.log(html); 
	          // console.log($(`a`).html());
	          console.log($('#mw-content-text').find('a').length); //works //output => 123

	          let links = [];
	          
	          $('a').each(function(){ 
	          	// console.log('THIS.ATTR(HREF)', $(this).attr('href'));
	          	let str = $(this).attr('href');

	          	console.log('str', str);
	          	links.push(str);

	          });

	          console.log('section length!@#@#$#$@!$#', $('.mw-parser-output').children().find('a').length); //output => 123
	          res.json({links});
	      } 
	});

}

exports.getdata = function(req, res, next) {
	console.log('DATA IS SHOWING!!!!!!!!', req.user);
	Entry.find({userId:req.user.id})
		.then(entries => { 
			console.log('entries:', entries);
			res.json({links: entries});
		 })

}