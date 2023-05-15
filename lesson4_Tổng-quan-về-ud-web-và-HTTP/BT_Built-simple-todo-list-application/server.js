const http = require('http');
const fs = require('fs');
const qs = require('qs');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        fs.readFile('./Calculator.html', 'utf8', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    } else {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        });
        req.on('end', () => {
            const userInfo = qs.parse(data);
            fs.readFile('./display.html', 'utf8', (err, dataDisplay) => {
                if (err) {
                    console.log(err);
                } else {
                    dataDisplay = dataDisplay.replace('{work_1}', userInfo.work_1);
                    dataDisplay = dataDisplay.replace('{work_2}', userInfo.work_2);
                    dataDisplay = dataDisplay.replace('{work_3}', userInfo.work_3);
                    dataDisplay = dataDisplay.replace('{work_4}', userInfo.work_4);
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.write(dataDisplay);
                    res.end();
                }

            });
        });
        req.on('error', () => {
            console.log('error');
        });
    }
})
server.listen(8000, 'localhost', () => {
    console.log('Server is running at localhost:8000');
});