const express = require('express');
const router = express.Router();
const controller = require('../controllers/signup');

router.get('/', controller.getUserSignup);
router.post('/', controller.postUserSignup);

module.exports = router;    