const express = require('express');
const router = express.Router();
const controller = require('../controllers/logout')

router.get('/', controller.getLogout);

// router.get('/admin', controller.getAdminLogout);

module.exports = router;


