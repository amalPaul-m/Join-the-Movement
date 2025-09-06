const express = require('express');
const router = express.Router();
const controller = require('../controllers/forgot')

router.get('/',controller.getForgot);

router.post('/',controller.postForgot);

router.get('/verifyOtp',controller.getVerifyOtp);

router.post('/verifyOtp',controller.postVerifyOtp);

router.post('/resendotp',controller.postResendOtp);

module.exports = router;