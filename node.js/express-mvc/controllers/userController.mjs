// const require = require('../models/userModel.mjs');
import * as userModel from '../models/userModel.mjs';
const userController = {
    getLogin(req, res) {
        res.render('login');
    },
    getRegister(req, res) {
        res.render('register');
    },
    postRegister(req, res) {
        const user = req.body;
        const userID = userModel.createUSer(user);
        res.send(`User ${userID} created`);
    },
};

module.exports = userController;