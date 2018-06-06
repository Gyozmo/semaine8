var http = require('http');
const express = require('express');
var app = express();
app.get('/', function(req,res){
  res.render('accueil.ejs')
});

app.listen(8080);
