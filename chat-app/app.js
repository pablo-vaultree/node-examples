var express = require('express'),
	nowjs = require('now'),
	fs = require('fs');

var app = express.createServer();

app.configure(function(){
	app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res) {
	
	fs.readFile(__dirname + '/public/index.html', function(err, text){
		res.writeHeader(200, {'Content-Type': 'text/html'});
        res.write(text);
		res.close();
    });

});

app.listen((process.env.PORT || 1337), function(){
	console.log('Chat listening at 1337...');
});

var chat = nowjs.initialize(app);

chat.now.toServer = function(message){
	chat.now.toClient(this.now.name, message);
};