var http = require('http');
const _ = require('lodash');
// const _ = require('lodash/score');
const fp = require('lodash/fp');
var array = require('lodash/array');
var object = require('lodash/fp/object');
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');
const express = require('express');
var bodyParser = require('body-parser')


let computerNumber = _.random(0, 10);
let storedRandom = computerNumber
let countdown = 0;
let hint = ""


var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}))

app.get('/', function (req, res) {
  res.render('accueil.ejs', {
    userNumber: "",
    storedRandom: "",
    hint: "",
    countdown: 0
  })
});

app.post('/numberAction', function (req, res) {
  

  let userNumber = req.body.userNumber;
 

  if (userNumber < storedRandom && countdown < 2) {
    hint = "plus grand";
    countdown++

  } else if (userNumber > storedRandom && countdown < 2) {
    hint = "plus petit";
    countdown++
  } else if (userNumber == storedRandom){
    hint = "bravo";
    countdown = 0;
    storedRandom = _.random(0, 10);
    
  } else {
    countdown = 0;
    hint = 'Perdu !';
    storedRandom = _.random(0, 10);
    
  }



  res.render('accueil.ejs', {
    userNumber: userNumber,
    storedRandom: storedRandom,
    hint: hint,
    countdown: countdown
  })
});





app.listen(8080);