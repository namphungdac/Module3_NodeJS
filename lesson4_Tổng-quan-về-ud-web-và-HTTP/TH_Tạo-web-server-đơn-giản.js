const http = require('http'); //Khai báo module http
const server = http.createServer((req, res) => {  //Khởi tạo 1 web server
    res.write('<h1> Hello world </h1><hr>');
    res.end();
});
server.listen(8080,'localhost',()=>{ // Bắt đầu 1 máy chủ ở localhost và port 8080
    console.log('server is running');
});

