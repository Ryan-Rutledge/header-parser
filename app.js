var app = require('express')();

app.get('/', function(req, res) {
    res.json({
        ipaddress: null,
        language: null,
        software: null
    });
});

app.listen(process.env.PORT, function() {
    console.log('Listening on port', process.env.PORT);
});