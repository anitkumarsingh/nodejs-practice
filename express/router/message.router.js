const router = require('express').Router();
const messageController = require('../controller/message.controller');

router.get('/',messageController.getMessage);

module.exports =router;