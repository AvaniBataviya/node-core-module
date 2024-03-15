const fs = require("fs");

const requestHandler = (req, res) => {
  const { url, method } = req;
  res.setHeader("Content-type", "text/html");

  if (url === "/") {
    res.write(
      "<html><body><form action='/message' method='POST'><input type='text' name='name'><div><button>Submit</button></div></form></body></html>"
    );
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    let parsBody = "";
    req.on("data", (chunk) => {
      console.log("chunk", chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      parsBody = Buffer.concat(body).toString();
      console.log("parse body", parsBody);
      const name = parsBody.split("=")[1];
      fs.writeFile("message.txt", name, (error) => {
        if (!error) {
          res.statusCode = 302;
          res.setHeader("Location", "/");
          return res.end();
        }
      });
    });
  }
};

const userRequestHandler = (req, res) => {
  const { url, method } = req;
  res.setHeader("Content-type", "text/html");

  if (url === "/") {
    res.write(
      "<html><body><h1>hello, welcome!</h1><form method='post' action='/create-user'><input type='text' name='username'/><button>submit</button></form></body></html>"
    );
    return res.end();
  }

  if (url === "/users") {
    res.write(
      "<html><body><ul><li>user 1</li><li>user 2</li></ul></body></html>"
    );
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];
    let parsBody = "";
    req.on("data", (chunk) => body.push(chunk));
    req.on("end", () => {
      parsBody = Buffer.concat(body).toString();
      const username = parsBody.split("=")[1];
      console.log("username", username);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
};

module.exports = { requestHandler, userRequestHandler };
