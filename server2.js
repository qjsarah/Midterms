var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hello June, You have successfully created your second app!")
});

 var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("app is running", host, port)
});
