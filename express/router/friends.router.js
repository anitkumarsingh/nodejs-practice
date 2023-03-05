const router = require('express').Router();
const friendsController = require('../controller/friends.controller');

router.get('/', friendsController.getAllFriends);
router.get('/:id',friendsController.getSingleFriend);
router.post('/', friendsController.addFriend);

module.exports = router;