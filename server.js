// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/test2.html", function (request, response) {
  response.sendFile(__dirname + '/public/test2.html');
});

app.get("/test3.html", function (request, response) {
  response.sendFile(__dirname + '/public/test3.html');
});

app.get("/test5-custom.html", function (request, response) {
  response.sendFile(__dirname + '/public/test5-custom.html');
});

app.get("/test6.html", function (request, response) {
  response.sendFile(__dirname + '/public/test6.html');
});

app.get("/test7.html", function (request, response) {
  response.sendFile(__dirname + '/public/test7.html');
});

app.get("/test8.html", function (request, response) {
  response.sendFile(__dirname + '/public/test8.html');
});

app.get("/test9.html", function (request, response) {
  response.sendFile(__dirname + '/public/test10.html');
});

app.get("/test10.html", function (request, response) {
  response.sendFile(__dirname + '/public/test10.html');
});

app.get("/test13.html", function (request, response) {
  response.sendFile(__dirname + '/public/test13.html');
});

//IMPORTANT!  Note that I am using the POST method instead of the GET method for this one....
app.post("/echo.html", function (request, response) {
  response.sendFile(__dirname + '/public/echo.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

