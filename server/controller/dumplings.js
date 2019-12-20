console.log("dumplings.js is running")

const mongoose = require("mongoose");
const Dumpling = mongoose.model("Dumpling");

class DumplingController{
	getAll(req, res){
		Dumpling.find({})
			.then(dumplings => res.json(dumplings))
			.catch(err => res.json(err));
	}

	create(req, res){
		const newDumpling = new Dumpling(req.body);
		newDumpling.save()
				.then(dumpling=> res.json(dumpling))
				.catch(err => res.json(err));
	}

	getOne(req, res){
		let _id = req.params._id;
        Dumpling.findOne({_id})
            .then(dumpling => res.json(dumpling))
            .catch(err => res.json(err));
	}

	addIngredients(req, res){
		let _id = req.params._id;
		console.log(req.body);
		Dumpling.findByIdAndUpdate({_id}, {$push: {ingredients: req.body}})
			.then(()=>res.json({"msg": "はい, マスター"}))
			.catch(err => res.json(err));
	}


}

module.exports = new DumplingController;