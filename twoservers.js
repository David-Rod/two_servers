var http = require("http");

const PORT = 7000;
const PORT2 = 7500;

function handleRequest(request, response) {
    response.end("It worked, path has been hit, great job:" + request.url);
}


var server = http.createServer(handleRequest);

server.listen(PORT, function () {
    console.log("server listening, nice work on http://localhost:" + PORT);
});

server.listen(PORT2, function () {
    console.log("server is listening, you better not mess this up http://localhost::" + PORT2);
});
