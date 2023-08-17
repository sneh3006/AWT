//Header documentation
//
const express = require('express');
const helmet = require('helmet');
const https = require('https');
const fs = require('fs');
const app = express()
const port = 3000

app.use(helmet());

app.use(express.urlencoded({ 
    extended: true
}));

//routes
app.get('/', (req, res) => {
    res.send('This is an SSL Server!')
})
const sslServer=https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
},app)
sslServer.listen(port, () => {
    console.log(`Secure SSL server on ${port}`)
})