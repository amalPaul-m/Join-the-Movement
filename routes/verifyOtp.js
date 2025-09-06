const express = require('express');
const router = express.Router();
const controller = require('../controllers/verifyOtp')

router.post('/', controller.postVerifyOtp);

router.post('/resendOtp', controller.postResendOtp);

module.exports = router;