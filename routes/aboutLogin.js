const express = require('express');
const router = express.Router();
const controller = require("../controllers/aboutLogin");

router.get('/', controller.getAboutLogin);

module.exports = router;
