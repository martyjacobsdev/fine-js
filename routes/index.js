var express = require('express');
var router = express.Router();
const beautify = require('beautify');

router.get('/', function(req, res){
  res.render('index', {
    bookmark: 'Bookmark This Page',
    title: 'Home',
    beautify: require('beautify'),
    fs: { formatCode:function(input){
             console.log(input);
         }}
  });
});

router.post('/', (request, response) => {
  const postBody = request.body;
  var target = postBody.oldCode;
  var newCode = beautify(target, {format: 'js'});
    response.render('index', {
      fineJS: newCode
  });
});

module.exports = router;
