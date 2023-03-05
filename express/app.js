const express = require('express');
const messageController = require('./controller/message.controller');
const friendsController = require('./controller/friends.controller');
const logger = require('./middleware/logger');

const PORT = process.env.PORT || 4000;



const app = express();
app.use(express.json());

app.use(logger)

app.get('/friends', friendsController.getAllFriends);
app.get('/friends/:id',friendsController.getSingleFriend);
app.post('/friends', friendsController.addFriend);

app.get('/message',messageController.getMessage);

app.listen(PORT,()=>{
  console.log(`Express server is running on ${PORT}`);
})