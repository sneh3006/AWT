const express= require('express');
const http=require('http');
const rateLimit=require('express-rate-limit');
const app=express();
const port=4000;
app.use(rateLimit({
    windowMs: 5000ko,
    max: 5,
    code: 429,
    message: 'Too many requests'
}));

app.get('/',(req,res)=>{
    res.send('Hello World!');
}
);

http.createServer(app).listen(port,()=>{
    console.log(`Server running on port ${port}`);
}
);

