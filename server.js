var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, './../')));
app.get('/', function(){
  res.sendFile(path.join(__dirname, index.html));
})

app.listen(3000, function() {
  console.log('Server is lisening on port 3000')
}); 
