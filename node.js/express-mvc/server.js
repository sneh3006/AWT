const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = import('./routes/userRoutes.mjs');

// import * as express from "express";
// import * as bodyParser from "body-parser";
// import * as userRoutes from "./routes/userRoutes.mjs";
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', userRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});