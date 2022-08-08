const cnf = require("./config/serverconfig.json");
const controller = require("./controller.js")
const http = require("http");

const hostPath = cnf.host + ":" + cnf.port

const server = http.createServer(controller);

server.listen(6969);

console.log("Server executed at " + hostPath);