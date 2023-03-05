const express = require('express');

const PORT = process.env.PORT || 4000;

const friends = [
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
];

const app = express();

app.use((req,res,next)=>{
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} with ${req.url} took ${delta} ms`);
})
app.get('/friends', (req, res) => {
	res.send(friends);
});

app.get('/friends/:id', (req, res) => {
	const findFriend = friends.find((f) => f.id === parseInt(req.params.id));
	res.send(findFriend);
});

app.post('/friends', (req, res) => {
	const newFriend = {
		id: friends.length + 1,
		name: req.body.name
	};
	friends.push(newFriend);
	res.status(201).json({
		message: 'Friend added successfully',
		payload: friends
	});
});

app.listen(PORT,()=>{
  console.log(`Express server is running on ${PORT}`);
})