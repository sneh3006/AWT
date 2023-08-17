const express = require('express');
const app = express();
const port = 5000;

app.get('/api', (req, res) => {
    res.send('Welcome to world of Asyn Programming\n');
}
);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
