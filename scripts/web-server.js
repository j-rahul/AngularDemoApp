var express = require('express');
var path = require('path');
var app = express();
var rootPath = path.normalize(__dirname + '/../');
var events  = require('./eventsController');

/*var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json);*/

app.use(express.static(rootPath + '/app'));

app.get('/data/event/:id', events.get);
app.post('/data/event/:id', events.save);

//redirect all the requests to index.hrml; necessary for html 5 routing.
app.get('*', function(req, res){
    res.sendFile(rootPath + '/app/index.html');
});

app.listen(8000);



console.log("listening on port 8000....");