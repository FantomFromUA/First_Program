const http = require('http');
const myModule = require("./module");

const requestListener = async function (req, res) {
    const _myModule = new myModule.MyModule("Erik");
    res.write(_myModule.getGreetingMessage());
    res.end();
}

const server = http.createServer(requestListener);
server.listen(5454);