var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/index',function(req,res){
  res.render('index',{title : 'new'})
})
router.get('/new',function(req,res){
  res.render('new',{title : 'new'})
})

router.get('/menu',function(req,res){
  res.render('menu',{title : 'menu'})
})

router.get('/about',function(req,res){
  res.render('about',{})
})
router.get('/access',function(req,res){
  res.render('access',{})
})
module.exports = router;
