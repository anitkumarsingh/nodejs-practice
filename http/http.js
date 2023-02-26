const {get} = require('https');

get('https://www.google.com', (res) => {
	res.on('data', (chuncks) => {
		console.log(`Chuncks received : ${chuncks}`);
	});
	res.on('end', () => console.log('No more data!'));
});

