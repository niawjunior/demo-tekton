var http = require('http');

http.createServer((_, res) => {
  res.write('Hello World!')
  res.end()
}).listen(3000);