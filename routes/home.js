const express = require('express');
const router = express.Router();
const { checkSession, isLoggin } = require('../middlewares/auth');
const userAuthantication = require('../middlewares/userAuthantication');
const controller = require('../controllers/home')


router.get('/',userAuthantication, checkSession,controller.getHome); 

module.exports = router;