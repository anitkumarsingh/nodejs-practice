const express = require('express');
const messageRouter = require('./router/message.router');
const friendsRouter = require('./router/friends.router');
const logger = require('./middleware/logger');

const PORT = process.env.PORT || 4000;

const app = express();

// middleware
app.use(express.json());
app.use(logger);

// Routers
app.use('/friends',friendsRouter)
app.use('/message',messageRouter);

app.listen(PORT,()=>{
  console.log(`Express server is running on ${PORT}`);
})