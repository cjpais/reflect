const http = require('http')
const fs = require('fs')

let app = http.createServer((req, res) => {
  fs.readFile(__dirname + req.url, function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
})

app.listen(3000, '127.0.0.1')