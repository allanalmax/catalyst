const http = require('http');
const ip = require('ip');

const server = http.createServer(function (req, resp) {
  if (req.url == '/') {
    resp.writeHead(200, { 'Content-Type': 'text/html' });

    resp.write('<html><body><p>This is the home page.</p></body></html>');
    resp.end();
  } else if (req.url === '/student') {
    console.log('Accessing student page');
    resp.writeHead(200, { 'Content-Type': 'application/json' });
    resp.write('{"name":"John", "age":30}');
    resp.end();
  } else if (req.url == '/content') {
      resp.writeHead(200, {'Content-Type': 'text/hrml'});
      console.log(ip.address());
      resp.write(
          `<html><body><p>My ip adress is $(ip.address()}.</p></body></html>`
      );
      resp.end();
  } 
});

server.listen(5000);

console.log('hello webserver');
