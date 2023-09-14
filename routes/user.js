'use strict';
const express =require('express');
const { signup,findAll } = require('../controllers/auth');
const router= express.Router();



//define API routes


router.post("/signup",signup);
router.get("/all",findAll);

module.exports= router ;