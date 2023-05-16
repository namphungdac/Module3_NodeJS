const http = require('http');
const fs = require('fs');
const qs = require('qs');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        fs.readFile('./views/index.html', 'utf8', (err, data) => {
            if (err) console.log(err);
            else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.end();
            }
        });
    } else {
        let dataUser = '';
        req.on('data', chunk => {
            dataUser += chunk;
        });
        req.on('end', () => {
            console.log(qs.parse(dataUser));
            res.end('Register success!');
        })
        req.on('error', () => {
            console.log('error');
        })
    }
});
server.listen(8000, 'localhost', () => {
    console.log('Server is running in localhost:8000');
})