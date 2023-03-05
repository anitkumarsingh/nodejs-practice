const router = require('express').Router();
const assetsController = require('../controller/assets.controller');


router.get('/',assetsController.sendImage);

module.exports =router;