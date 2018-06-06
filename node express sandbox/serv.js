var express = require('express');


var app = express();


app.get('/', function(req, res) {

    res.setHeader('Content-Type', 'text/plain');

    res.send('Vous es à l\'accueil, que puis-je pour vous ?');


});

app.get('/etage/:etagenum/chambre', function(req, res) {
    res.render('chambre.ejs', {etage: req.params.etagenum});
});

app.get('/sous-sol/:numeronum/parking' ,function(req,res){

    res.render('sous-sol.ejs', {numero: req.params.numeronum})
});


app.get('/garage/:garagenum', function(req,res){
    res.render('garage.ejs', { garagenumber :
        req.params.garagenum})
})

app.listen(8080);
