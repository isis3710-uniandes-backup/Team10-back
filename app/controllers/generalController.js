var jsonfile = require('jsonfile');
exports.getAll = (file)=>{
	return (req, res, next) => {
		console.log("getAll");
		jsonfile.readFile(file).then( obj => {
			res.send(obj);
		}).catch( err => {
			console.log(err);
			res.status(500).send('Something broke!');
		});
	};
};
exports.get = (file)=>{
	return (req, res, next) => {
		console.log("getOne");
		console.log(req.params.id);
		id = parseInt(req.params.id);
		can = false;
		jsonfile.readFile(file).then(obj => {
			for(let x of obj){
				if(x.id === id ){
					console.log('find');
					res.send(x);
					can = true;
				}
			}
			if(!can)
				res.status(404).send('No such element!');
		}).catch( err => {
			console.log(err);
			res.status(500).send('Something broke!');
		});
	};
};
exports.post = (file)=>{
	return (req, res, next) => {
		console.log("create");
		console.log(req.body);
		elem = req.body;
		jsonfile.readFile(file).then(obj => {
			var find = false;
			for( let x of obj){
				if(x.id === elem.id){
					find =true;
					res.status(403).send('Already exist that element');
				}
			}
			if(!find){
				obj.push(elem);
				//res.send(obj);
				jsonfile.writeFile(file,obj).then( rs=>{
					console.log('element created');
					res.status(201).send(obj);
				}).catch( err => {
					console.log(err);
					res.status(500).send('Something broke!');
				})
			}
		}).catch( err => {
			console.log(err);
			res.status(500).send('Something broke!');
		});
	};
};
exports.put = (file)=>{
	return (req, res, next) => {
		console.log(req.body);
		elem = req.body;
		id = parseInt(req.params.id);
		jsonfile.readFile(file).then(obj => {
			var find = false;
			for( let x of obj){
				if(x.id === id){
					find =true;
					obj  = obj.map( e =>{
						return e.id===id ? elem : e;
					});
					break;
				}
			}
			if(!find){
				obj.push(elem);
			}
			jsonfile.writeFile(file,obj).then( rs=>{
				console.log('element created');
				res.status(201).send(obj);
			}).catch( err => {
				console.log(err);
				res.status(500).send('Something broke!');
			})
		}).catch( err => {
			console.log(err);
			res.status(500).send('Something broke!');
		});
	};
};
exports.delete = (file)=>{
	return (req, res, next) => {
		console.log("delete");
		console.log(req.params.id);
		id = parseInt(req.params.id);
		can = false;
		jsonfile.readFile(file).then(obj => {
			nobj = obj.filter(e => e.id !== id);
			can = nobj.length<obj.length
			if(!can){
				res.status(404).send('No such element!');
			}
			else{
				jsonfile.writeFile(file,nobj).then( rs=>{
					console.log('element deleted');
					res.send(nobj);
				}).catch( err => {
					console.log(err);
					res.status(500).send('Something broke!');
				})
			}
		}).catch( err => {
			console.log(err);
			res.status(500).send('Something broke!');
		});
	};
};