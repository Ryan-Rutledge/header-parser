var app = require('express')();

app.enable('trust proxy');

app.get('/', function(req, res) {
    var software = /\((.*?)\)/.exec(req.headers['user-agent'] || '');
    var language = (req.headers['accept-language'] || '').split(/[,;]/);
    
    res.json({
        ipaddress: req.ip,
        language: language[0],
        software: software && software[1]
    });
});

app.listen(process.env.PORT, function() {
    console.log('Listening on port', process.env.PORT);
});