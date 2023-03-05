function getMessage(req, res) {
	res.send('<ul><li>Sir Isac Newton</li></ul>');
}
function getUpdateMessage(req, res) {
	res.send('Updated successfully');
}
module.exports = {
	getMessage,
	getUpdateMessage
};
