const http = require('http');

const PORT  = process.env.PORT || 4000;

const server = http.createServer((req,res)=>{
  res.writeHead(200,{
    'Content-Type':'text/html'
  })
  res.end('<h1>Hello Sir Issac Newton is yours friend</h1>')
})
server.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}...`)
})