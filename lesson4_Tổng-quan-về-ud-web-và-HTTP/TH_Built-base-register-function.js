const http = require('http');
const server = http.createServer((req, res) => {
    let txt = ""
    if(req.url === "/login") {
        txt = "Lonin success";
    } else {
        txt = "Login fail";
    }
    res.write(txt);
    res.end();
    // res.end(txt);
})
server.listen(8080, "localhost");
