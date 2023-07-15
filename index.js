const dotenv = require('dotenv');

dotenv.config();

let PORT = process.env.SERVER_PORT;

let HOST = process.env.HOST_IP;





const http = require('http');
// let port = 3000;
// let hostname = "127.0.0.1";
let myServer = http.createServer((req, res)=>{
    // res.end("Hello, ...")
    // res.writeHead(201, {'Content-Type' : 'text/plain'});
    // res.write("hello")
    // console.log(req.url)
    // res.writeHead(201, {'Content-Type' : 'text/html'});
    // res.write("<h1>hello</h1>")
    // res.end()

    if (req.url == '/'){
        res.write("Home...")
        res.end()
    }
    else if(req.url == '/blog'){
        res.write("Blog...")
        res.end();
    }else{
        res.write("..404..")
        res.end();
    }

}) ;
// myServer.listen(port, hostname, ()=>{
//     console.log(`Server is running..! http:${hostname}:${port}`)

// })

myServer.listen(PORT, HOST, ()=>{
    console.log(`Server is running..! http:${HOST}:${PORT}`)

})