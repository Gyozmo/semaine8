var http = require('http');
const _ = require('lodash');
const _ = require('lodash/score');
const fp = require('lodash/fp');

const express = require('express');
var app = express();
app.get('/', function(req,res){
  res.render('accueil.ejs')
});



app.listen(8080);
