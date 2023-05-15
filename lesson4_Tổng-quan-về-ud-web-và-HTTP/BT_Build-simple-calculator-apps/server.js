const http = require('http');
const fs = require('fs');
const qs = require('qs');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        fs.readFile('./Calculator.html', 'utf8', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        })
    } else {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        });
        req.on('end', () => {
            let dataInput = qs.parse(data);
            fs.readFile('./Display.html', 'utf8', (err, dataDisplay) => {
                if (err) console.log(err);
                else {
                    dataDisplay = dataDisplay.replace('{result}', dataInput.number_a + dataInput.operator + dataInput.number_b + '=' + eval(`${dataInput.number_a}
                    ${dataInput.operator}
                    ${dataInput.number_b}`));
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.write(dataDisplay);
                    res.end();
                }
            })
        });
        req.on('error', () => {
            console.log('error');
        });
    }
});
server.listen(8000, 'localhost', () => {
    console.log('Server is running at localhost:8000');
});