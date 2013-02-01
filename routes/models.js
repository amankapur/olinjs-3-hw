var mongoose = require("mongoose");

mongoose.connect(process.env.MONGOLAB_URI || 'localhost');

var schema = mongoose.Schema({
	'name' : String,
	'cost' : Number
});

var Ingredient = mongoose.model('Ingredient', schema);

var BurgerSchema = mongoose.Schema({
  'name' : String,
  'ingredients' : []
});

var Burger = mongoose.model('Burger', BurgerSchema);

exports.Ingredient = Ingredient;
exports.Burger = Burger;