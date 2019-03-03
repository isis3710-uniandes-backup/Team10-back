exports.getAll = (req, res, next) => {
	console.log("getAll");
	res.send('Promo1');
};
exports.get = (req, res, next) => {
	console.log("getOne");
	res.send('Promo2');
};
exports.post = (req, res, next) => {
	console.log("create");
	res.send('Promo3');
};
exports.put = (req, res, next) => {
	console.log("upadte");
	res.send('Promo4');
};
exports.delete = (req, res, next) => {
	console.log("delete");
	res.send('Promo5');
};