const dotenv = require('dotenv');
dotenv.config();

const fs = require('fs');

let PORT = process.env.SERVER_PORT;
let HOST = process.env.HOST_IP;



const http = require('http');

let myServer = http.createServer((req, res)=>{

    if (req.url == '/'){
        res.write("Home...")
        res.end()
    }else if (req.url === '/userapi'){
        // fs.readFile('userApi/user.json', "utf-8", (err, data)=>{
        //     // console.log(data)
        //     res.end(data)

        // })
        fs.readFile(`${__dirname}/userApi/user.json`, "utf-8", (err, data)=>{
            // console.log(data)
            res.end(data)

        })
        // res.end("succesful.,...")
    }
    else if(req.url == '/blog'){
        res.write("Blog...")
        res.end();
    }else{
        res.write("..404..")
        res.end();
    }

}) ;

myServer.listen(PORT, HOST, ()=>{
    console.log(`Server is running..! http:${HOST}:${PORT}`)

})