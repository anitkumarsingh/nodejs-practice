const path = require('path');

function sendImage(req,res){
  res.sendFile(path.join(__dirname,'..','public','mountain.jpg'))
}
module.exports ={
  sendImage
}