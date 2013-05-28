var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("123");
    res.end('Hello, world!');
}).listen(process.env.PORT || 9999);


