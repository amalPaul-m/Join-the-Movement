const express = require('express');
const router = express.Router();
const controller = require('../controllers/userlogin');

router.get('/', controller.getUserLogin);
router.post('/', controller.postUserLogin);

module.exports = router;    