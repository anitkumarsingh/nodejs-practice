const http = require('http');

const PORT = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
	
	if (req.url == '/friends') {
    console.log(req.url);
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});
		res.end(
			JSON.stringify({
				id: 1,
				name: 'Sir Issac Newton'
			})
		);
	} else if (req.url === '/message') {
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
	}
});
server.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}...`);
});
