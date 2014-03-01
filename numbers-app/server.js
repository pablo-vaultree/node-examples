var http = require("http"),
     url = require("url");

http.createServer(function(request, response) {
     
     response.writeHead(200, {"Content-Type": "text/plain"});

     var parameters = url.parse(request.url, true).query;
     var input = (parameters.number) ? parameters.number : 10;
          
     console.log("the number: " + input);

     var numInput = new Number(input);
     var numOutput = new Number(Math.random() * numInput).toFixed(0);
     
     response.write(numOutput);

     response.end();

}).listen(1337);

console.log("Random Number Generator Running at 1337...");