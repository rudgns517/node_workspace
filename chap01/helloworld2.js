var http = require('http');

http.createServer(function(req, response){ 
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<h1>Hello world!!</h1>');
}).listen(3000);