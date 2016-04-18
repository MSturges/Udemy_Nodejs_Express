var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')['development']);

// line 3: requires knex and the file path for your knex file and the enviornment of our data base

/* GET home page. */
router.get('/', function(req, res, next) {
  //line 11: selecting * from the table people, then passing all results into the promise(then) as the parameter
  //results(which will be an array of objects - unless the table is empty, then it will return an empty array)
  knex('people').then(function (results) {
    console.log(results);
    // Will render index.hbs view - passing the results of the database query along with it into handlebars.
    res.render('index', { people: results });
    // res.json(results);
  });
});




router.get('/new', function(req,res,next){
  res.render('new');
});
//This will render view/new.hbs to the DOM



router.post('/people/add', function(req,res,next){
  

  //the input fields on the form each have their own name
  //when the form is submitted, the data within the input fields will packaged into an objext
  //and sent over to this route. That objext will be available as req.body
  //req.body : is the data that was typed into the form which lines up with this route

knex('people').insert({name: req.body.name, hobby: req.body.hobby}).then(function(results){
  res.redirect('/');
  })

});

module.exports = router;
