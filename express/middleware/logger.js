function logger(req, res, next) {
	const start = Date.now();
	next();
	const delta = Date.now() - start;
	console.log(`${req.method} with ${req.url} took ${delta} ms`);
}
module.exports = logger;
