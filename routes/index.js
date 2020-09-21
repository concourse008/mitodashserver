var express = require('express');
var router = express.Router();
const Post = require('./post');

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { title: 'Expres' });
  console.log('index.js');
});

router.post('/', function (req, res) {
  res.set('Access-Control-Allow-Origin', '*');

  let reqscore = Number(req.body.score);
  //名前とスコアをデータベースに
  Post.create({
    name:res.body.name,
    score:reqscore
  }).then(()=>{
    console.log('post to DB');
//    handleRedirectPosts(req,res);
  });
  console.log(req.body.name);
  console.log(score);
});

module.exports = router;
