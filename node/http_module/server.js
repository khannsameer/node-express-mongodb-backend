const http = require("http");

//web server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome to dynamic home page");
    res.end(); //send the data
  }

  if (req.url === "/source-code") {
    res.write("Source code is available");
    res.end(); //send the data
  }

  if (req.url === "/contact") {
    res.setHeader("Content-Type", "text/plain");
    res.write("Contact us");
    res.end(); //send the data
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
