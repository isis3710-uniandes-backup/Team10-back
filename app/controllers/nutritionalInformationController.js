exports.getAll = (req, res, next) => {
	console.log("getAll");
	res.send('Macros1');
};
exports.get = (req, res, next) => {
	console.log("getOne");
	res.send('Macros2');
};
exports.post = (req, res, next) => {
	console.log("create");
	res.send('Macros3');
};
exports.put = (req, res, next) => {
	console.log("upadte");
	res.send('Macros4');
};
exports.delete = (req, res, next) => {
	console.log("delete");
	res.send('Macros5');
};