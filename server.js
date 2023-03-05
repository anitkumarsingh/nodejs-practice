const http = require('http');

const PORT = process.env.PORT || 4000;

const friends =[
  {
    id: 0,
    name: 'Nicola Tesla'
  },
  {
    id: 1,
    name: 'Sir Issac Newton'
  },
  {
    id: 2,
    name: 'Abert Estein'
  }
]
const server = http.createServer((req, res) => {
	 const items = req.url.split('/');

  if(req.method === 'POST' && items[1] === 'friends'){
    req.on('data',(data)=>{
      const bodyData = data.toString();
      friends.push(JSON.parse(bodyData))
    });
    req.pipe(res);
    
  }
	if (req.method==='GET' && items[1] == 'friends') {  
    const findFriendIndex = +items[2];
    console.log(findFriendIndex)
    if(items.length === 3){
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });
      res.end(
        JSON.stringify(friends[findFriendIndex])
      );
     
    }
    else{
      console.log(req.url);
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });
      res.end(
        JSON.stringify(friends)
      );
     
    }
  }
    else if ( req.method==='GET' && items[1] === '/message') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
      res.write('<body>');
      res.write('<ul>');
      res.write('<li>Hello Sir Issac Newton</li>');
      res.write('<li>What is your idea about astronomy?</li>');
      res.write('</ul>');
      res.write('</body>');
      res.write('</html>');
      res.end();
    }else{
      res.statusCode = 404;
      res.end();
    }
  
});

server.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}...`);
});
