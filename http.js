const PORT = 8888;

const http = require('http');
const url = require('url');
const fs = require('fs');
const mine = require('./mine').types;
const path = require('path');
const StringDecoder = require('string_decoder').StringDecoder;

const server = http.createServer(function (request, response) {
  if (request.url.includes('/smallstore/detail?=')) {
    console.log(request.url);
    var options = {
      host: 't-new.wangcaio2o.com',
      port: 80,
      path: '/smallstore/detail?id=35505',
      method: 'GET',
      headers: {
      'Content-Type': 'application/json'
      }
    };
    var req = http.get(options, function(res) {
      console.log('STATUS: ' + res.statusCode);
      console.log('HEADERS: ' + JSON.stringify(res.headers));
      var bodyChunks = [];
      res.on('data', function(chunk) {
        bodyChunks.push(chunk);
      }).on('end', function() {
        var body = Buffer.concat(bodyChunks);
        body = body.toString();
        console.log(body);
        fs.readFile(path.join(__dirname, '/pages/items/10000.json'), "binary", function (err, file) {
          if (err) {
            response.writeHead(500, {
              'Content-Type': 'text/plain'
            });
            response.end(err);
          } else {
            var contentType = mine[ext] || "text/plain";
            response.writeHead(200, {
              'Content-Type': contentType
            });
            file = file.replace(/}$/,',');
            body = body.replace('{','');
            file = file + body;
            console.log(file);
            response.write(file, "binary");
            response.end();
          }
        });
      })
      req.on('error', function(e) {
        console.log('ERROR: ' + e.message);
      });
    });
  } else {
    var pathname = url.parse(request.url).pathname;
    var realPath = path.join(__dirname, pathname);
    var ext = path.extname(realPath);
    ext = ext ? ext.slice(1) : 'unknown';
    fs.exists(realPath, function (exists) {
      if (!exists) {
        response.writeHead(404, {
          'Content-Type': 'text/plain'
        });
        response.write("This request URL " + realPath + " was not found on this server.");
        response.end();
      } else {
        fs.readFile(realPath, "binary", function (err, file) {
        if (err) {
          response.writeHead(500, {
            'Content-Type': 'text/plain'
          });
          response.end(err);
        } else {
          var contentType = mine[ext] || "text/plain";
          response.writeHead(200, {
            'Content-Type': contentType
          });
          response.write(file, "binary");
          response.end();
        }
      });
      }
    });
  }
});
server.listen(PORT);
console.log("Server runing at port: " + PORT + ".");