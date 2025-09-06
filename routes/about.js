const express = require('express');
const router = express.Router();
const controller = require("../controllers/about");

router.get('/', controller.getAbout);

module.exports = router;
