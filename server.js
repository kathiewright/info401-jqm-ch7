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

app.get("/test3.html", function (request, response) {
  response.sendFile(__dirname + '/public/test3.html');
});

app.get("/test5.html", function (request, response) {
  response.sendFile(__dirname + '/public/test5.html');
});

app.get("/test6.html", function (request, response) {
  response.sendFile(__dirname + '/public/test6.html');
});

app.get("/test8.html", function (request, response) {
  response.sendFile(__dirname + '/public/test8.html');
});

app.get("/test_resp_adv_table.html", function (request, response) {
  response.sendFile(__dirname + '/public/test_resp_adv_table.html');
});

app.get("/test_panel_display.html", function (request, response) {
  response.sendFile(__dirname + '/public/test_panel_display.html');
});

app.get("/test_filter.html", function (request, response) {
  response.sendFile(__dirname + '/public/test_filter.html');
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
