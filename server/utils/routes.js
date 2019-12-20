console.log("route.js is running")
const Dumpling = require("../controller/dumplings")

module.exports = function(app){
	app.get('/dumplings', Dumpling.getAll);
	app.post('/dumplings', Dumpling.create);
	app.get('/dumplings/:_id', Dumpling.getOne);
	app.put('/dumplings/:_id', Dumpling.addIngredients)
}