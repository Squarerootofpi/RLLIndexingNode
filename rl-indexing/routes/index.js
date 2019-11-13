var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Index = mongoose.model('IndexModel');
/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/

//Gets all indexes currently.
router.get('/getIndex', function (req, res, next) {
  Index.find(function (err, indexes) {
    if (err) { return next(err); }
    console.log(indexes);
    res.json(indexes); //if empty of indexes, returns empty
  });
});

router.post('/index', function (req, res, next) {
  console.log("in post route");
  //var indexed = new IndexModel(req.body);
  //I probably want to do an updateOne() on this.
  //Index.updateOne()
  // indexed.save(function (err, indexed) {
  //   if (err) {
  //     console.log('Error in .save of post');
  //     return next(err);
  //   }
  //   console.log(indexed + " successfully updated/saved");
  //   res.json(indexed);
  res.sendStatus(200);
  //});
});

/**
 * var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');

//Note you model mongoose with "Comment", and then you make a new comment upon 
//users posting to it. 

router.post('/comments', function(req, res, next) {
  var comment = new Comment(req.body);
  comment.save(function(err, comment){
    if(err){ return next(err); }
    console.log(comment);
    res.json(comment);
  });
});

router.param('comment', function(req, res, next, id) {
  var query = Comment.findById(id);
  query.exec(function (err, comment){
    if (err) { return next(err); }
    if (!comment) { return next(new Error("can't find comment")); }
    req.comment = comment;
    return next();
  });
});

router.get('/comments/:comment', function(req, res) {
  console.log(req.comment);
  res.json(req.comment);
});

router.put('/comments/:comment/upvote', function(req, res, next) {
  req.comment.upvote(function(err, comment){
    if (err) { return next(err); }
    console.log(comment);
    res.json(comment);
  });
});

 * 
 */
/*
router.put('/doindex', function(req,res,next)
{
  res.send(status=200);
});
*/


//Last of all...
module.exports = router;
