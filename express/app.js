const express = require('express');
const path = require('path');

const messageRouter = require('./router/message.router');
const friendsRouter = require('./router/friends.router');
const assetsRouter = require('./router/assets.router');
const logger = require('./middleware/logger');


const PORT = process.env.PORT || 4000;

const app = express();

// middleware
app.use(express.json());
app.use(logger);
app.use('/site',express.static(path.join(__dirname,'public')));
// Routers
app.use('/friends',friendsRouter)
app.use('/message',messageRouter);
app.use('/assets',assetsRouter);

app.listen(PORT,()=>{
  console.log(`Express server is running on ${PORT}`);
})