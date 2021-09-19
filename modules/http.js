const http = require("http");

http
  .createServer(function (req, res) {
    console.log("New request");
    console.log(req.url);

    switch (req.url) {
      case "/hola":
        let greetings = hi();
        res.write(greetings);
        res.end();
        break;
      default:
        res.write("404 Not found");
        break;
    }

    function hi() {
      return 'Hello how are you';
    }
    //res.writeHead(200, { "Content-Type": "text/plain" });
    res.end();
  })
  .listen(3000);
