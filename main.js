
var player = require('play-sound')(opts = {})
var express = require("express")()
var hash = require('string-hash')

express.get("/", function(req, res) {
    res.sendfile('index.html')
});

express.post("/play", function(req, res) {
    var drum = hash(req.ip) % 9 + 1
    //var drum = 'run'
    var pathToSound = './sounds/' + drum +  '.wav'
    player.play(pathToSound, function(err){})
    console.log("should have played " + pathToSound)
    res.redirect("/")
})

var port = process.env.PORT || 5000;
express.listen(port, function() {
    console.log("Helios listening on " + port);
});
