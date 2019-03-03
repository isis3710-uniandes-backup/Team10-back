exports.getAll = (req, res, next) => {
	console.log("getAll");
	res.send('Platos favoritos1');
};
exports.get = (req, res, next) => {
	console.log("getOne");
	res.send('Platos favoritos2');
};
exports.post = (req, res, next) => {
	console.log("create");
	res.send('Platos favoritos3');
};
exports.put = (req, res, next) => {
	console.log("upadte");
	res.send('Platos favoritos4');
};
exports.delete = (req, res, next) => {
	console.log("delete");
	res.send('Platos favoritos5');
};