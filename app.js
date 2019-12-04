var express = require('express');
var fetch = require('node-fetch');
var app = express();
var port = process.env.PORT|| 3000;
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

var image = "";
var title = "";
var date = "";
var desc = "";

app.get('/', function(req, res){
    //getData(true);
});

app.getData(function(){
    //get the actual data
});


app.listen(port, function(){
});

