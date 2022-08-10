const http = require('http');
const fs = require('fs');

const server= http.createServer((req, res)=>{
    fs.readFile('./src/demo.html',"utf-8",(err,data)=>{
        if(err){
            res.writeHead(404,{'Content-Text' : 'text/html'});
            res.end('404 not found');
        }else {
            let name = 'Admin'
            data = data.replace('{name}',name)

            res.writeHead(200,{'Content-Type' : 'text/html'});
            res.write(data);
            res.end();
        }
    })
})

server.listen(8080,()=>{
    console.log(`Server running at http://localhost:8080`);
})