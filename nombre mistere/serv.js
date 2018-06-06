var http = require('http');
const _ = require('lodash');
const _ = require('lodash/score');
const fp = require('lodash/fp');
var array = require('lodash/array');
var object = require('lodash/fp/object');
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');
const express = require('express');

var app = express();
app.get('/', function(req,res){
  res.render('accueil.ejs')
});



app.listen(8080);
