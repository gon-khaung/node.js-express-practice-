const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  //lodash
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].length;
  console.log(num);

  //set headers
  res.setHeader("Content-Type", "text/html");

  let path = "./view/";

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      //   res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end();
    } else {
      res.statusCode = 200;
      res.end();
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("server is listening on port 3000");
});
