const express = require('express');
const router = express.Router();
const controller = require('../controllers/rest')


router.get('/',controller.getRest);

router.post('/',controller.postRest);

module.exports = router;