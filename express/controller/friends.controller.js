const friends = require('../model/friends');

function getSingleFriend(req, res){
  console.log(req.ip);
	const findFriend = friends.find((f) => f.id === parseInt(req.params.id));
	res.send(findFriend);
}
function getAllFriends(req, res){
	res.send(friends);
}

function addFriend(req, res){
  if(!req.body.name){
    return res.status(400).json({
      error:'Missing friend name'
    })
  }
	const newFriend = {
		id: friends.length + 1,
		name: req.body.name
	};
	friends.push(newFriend);
	res.status(201).json({
		message: 'Friend added successfully',
		payload: friends
	});
}

module.exports ={
  getSingleFriend,
  getAllFriends,
  addFriend
}