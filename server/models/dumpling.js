console.log("dumpling.js is running");
const mongoose = require("mongoose");

const DumplingSchema = new mongoose.Schema({
	name:{
		type: String
	},
	ingredients: [],
	rating:{
		type: Number
	},
	shape:{
		type: String
	},
	isCookedWell:{
		type: Boolean
	}
}, {timestamp: true})

mongoose.model("Dumpling", DumplingSchema);