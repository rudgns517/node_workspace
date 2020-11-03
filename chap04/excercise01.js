var http = require("http");
var url = require("url");
var querystring = require("querystring");

//server port 8080 define
const port = 8080;

//server function
const server = http.createServer((req, res) => {
  if (req.method.toUpperCase() === "POST") {
    sum(req, res);
  } else {
    sum(res);
  }
});

//server port open
server.listen(port, () => {
  console.log(`${port} is listening`);
});
