const express = require('express');
const router = express.Router();
const controller = require("../controllers/contactLogin");

router.get('/', controller.getContactLogin);

module.exports = router;
