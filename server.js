var express = require('express')
  , io = require('socket.io').listen(server)
  , http = require('http')
  , twitter = require('ntwitter')
  , cronJob = require('cron').CronJob
  , _ = require('underscore')
  , path = require('path')
  ,bodyParser = require("body-parser");


var app = express();

var server = http.createServer(app);

////Instantiate the twitter component
var t = new twitter({
    consumer_key: 'XHt82KR3OHnFr03oVCGFal85d',
    consumer_secret: 'gbJObOVe4yftDLT4OrspjycOGbKmoCnOepxMgVzutSCflZSMtv',
    access_token_key: '2936332038-xfFZw4Qp6xIKmSX8LHF89qgwJ8IdnPt8YEwjyin',
    access_token_secret: 'LfLh0YqH5nGCb31qJ3j1S4zDY7JaOwa6OtV75vCjpLXhp'
});

//Set the sockets.io configuration.
//THIS IS NECESSARY ONLY FOR HEROKU!
// sockets.configure(function() {
//   sockets.set('transports', ['xhr-polling']);
//   sockets.set('polling duration', 10);
// });

//Express set-up
server.listen(process.env.PORT || 3000);
app.set('views', __dirname + '/client');
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Twitter symbols array
var watchSymbols = ['ebola'];
//This structure will keep the total number of tweets received and a map of all the symbols and how many tweets received of that symbol
var watchList = {
    total: 0,
    symbols: {}
};
//Set the watch symbols to zero.
_.each(watchSymbols, function(v) { watchList.symbols[v] = 0; });




t.stream('statuses/filter', { track: watchSymbols}, function(stream) {
  stream.on('data', function (data) {
    console.log(data);
  });
});
