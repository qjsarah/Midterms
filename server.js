var express = require("express");
var app = express();

app.get("/", function(req, res){
  res.send("Hello!! Welcome to express June Sarah.")
});

app.listen(3000, function(){
  console.log('Server is running');
});
