var express = require("express");
var app = express();

app.get('/', function(req, res) {
  console.log("This is GET request for the homepage!");
  res.send('Here is the GET Metho!');
}
)
app.post('/', function (req, res) {
  console.log("A POST request for the homepage is accessed.");
  res.send('Here is the POST Method!');
}
)
app.get('/list_user', function(req, res){
  console.log('Got a GET request for /list_user');
  res.send('This is Page Listing');
}
)
app.get('/ab*cd', function (req, res) {
  console.log('Got a GET request for /ab*cd');
  res.send('Pattern Match Page');
}
)
app.get('/juneroute', function (req, res) {
  console.log('Got a GET request for /juneroute');
  res.send('Although its August, I am June :DD');
}
)
var server = app.listen(4000, function(){
  var host = server.address().address
  var port = server.address().port

  console.log('app is listening at ', host, port)
})
