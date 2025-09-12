const express = require('express');
const router = express.Router();
const controller = require("../controllers/aboutLogin");
const { checkSession, isLoggin } = require('../middlewares/auth');
const userAuthantication = require('../middlewares/userAuthantication');

router.get('/', userAuthantication, checkSession, controller.getAboutLogin);

module.exports = router;
