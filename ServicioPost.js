const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
var cowsay = require('cowsay')

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/txt');
  
  req.on('data', (chunk) => {
    const data = JSON.parse(chunk);
    res.end(
      cowsay.say({
        text: data.text,
        e: "oO",
        T: "U "
      })
    );
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});