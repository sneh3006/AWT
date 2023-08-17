const http = require('http');

const hostname ='127.0.0.1';
const port=3000;

handle=(req,res)=>{
    if(req.url==='/api' && req.method==="GET"){
        res.statusCode=200;
        res.setHandler=('Content-Type','text/plain');
        res.end('Welcome to world of Aysnc Node.js');
    }
    else{
        res.statusCode=404;
        res.end('Invalid Request\n');
    }
}
const server=http.createServer(handle);

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});
