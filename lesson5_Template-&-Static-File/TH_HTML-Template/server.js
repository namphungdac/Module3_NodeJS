const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('./templates/index.html', 'utf8', (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    })
});

server.listen(8000, 'localhost', () => {
    console.log('Server is running in localhost:8000');
});
