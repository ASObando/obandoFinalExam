var express = require('express');
var fetch = require('node-fetch');
var app = express();
var port = process.env.PORT|| 3000;
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


app.listen(port, function(){
});


