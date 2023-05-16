const http = require('http');
const fs = require('fs');
const qs = require('qs');

let arrayUserInfo = [];
const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        fs.readFile('./views/index.html', 'utf8', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    } else {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        })
        req.on('end', () => {
            let userInfo = qs.parse(data);
            arrayUserInfo.push(userInfo);
            console.log(arrayUserInfo);
            console.log("================================================================");
            res.write('<h1>Register success!</h1>');
            res.write("<button><a href=\"./views/index.html\">Back</a></button>");
            res.end();
        });
        req.on('error', () => {
            console.log('error');
        });
    }
});
server.listen(8000, 'localhost', () => {
    console.log('Server is running in localhost:8000');
});