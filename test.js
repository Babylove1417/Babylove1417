var http = require('http');

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});    // 发送HTTP头部
    response.end('Hello World\n');  // 发送响应消息
}).listen(8080);    // 监听8080端口

console.log('Server running at http://127.0.0.1:8080')
