const http = require('http');
const fs = require('fs');
const qs = require('qs')

const server = http.createServer(function (req, res) {
    if (req.method === 'GET') {
        fs.readFile('./register.html', 'utf8',function (err, data) {
            // console.log(data);// in ra đoạn mã trong file register.html
            //Nếu không để option = 'utf8' thì data sẽ đc mã hóa dưới dạng <Buffer 6e 61 6d 65 3d ... 16 more bytes
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    } else {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
            //console.log(data); // name=Phung+Dac+Nam&email=phungdacnam1997%40gmail.com&password=123a
        });
        req.on('end', () => {
            const userInfo = qs.parse(data);
            // chuyển chuỗi data thành 1 object với các giá trị key: value ứng với dữ liệu từng chunk gửi lên
            // {
            //   name: 'Phung Dac Nam',
            //   email: 'phungdacnam1997@gmail.com',
            //   password: '123a'
            // }
            fs.readFile('./info.html', 'utf8', function (err, datahtml) {
                // console.log(datahtml) // in ra đoạn mã trong file ìno.html
                if (err) {
                    console.log(err);
                }
                datahtml = datahtml.replace('{name}', userInfo.name);
                datahtml = datahtml.replace('{email}', userInfo.email);
                datahtml = datahtml.replace('{password}', userInfo.password);
                res.writeHead(200, { 'Content-Type': 'text/html' });

                res.write(datahtml);
                return res.end();
            });
        })
        req.on('error', () => {
            console.log('error')
        })
    }
})

server.listen(8080, function () {
    console.log('server running at localhost:8080 ')
});