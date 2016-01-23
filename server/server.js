var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var userController = require('./postgresql/UserController')

app.use(bodyParser.urlencoded());

app.use(express.static(path.join(__dirname, './../')));
app.get('/', function(){
  res.sendFile(path.join(__dirname, index.html));
})

app.post('/signup', userController.signup);

app.post('/login', function(req, res){
  console.log(req.body)
});

app.listen(3000, function() {
  console.log('Server is lisening on port 3000')
});
