// const express = require('express');
// const router = express.Router();
// const userController = require('../controllers/userController');
import * as express from "express";
const router= express.Router();
import * as userController from "../controllers/userController.mjs";

router.get('/', userController.index);
router.get('/login', userController.getLogin);
router.get('/register', userController.getRegister);
//router.post('/login', userController.postLogin);
//router.post('/register', userController.postRegister);
   
module.exports = router;