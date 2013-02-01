var models = require("./models");

exports.newform =  function(req, res){
  console.log('hi');
	models.Ingredient.find({}).exec(function(err, data){
		if(err) return console.log('err', err);
    console.log(data);
	 	res.render('burgform', {title: 'Burger form', alingrs: data});
	});
	
};

exports.newitem = function(req, res){
  var data = req.body;
  console.log(data.ingrs);
  var newburg = new models.Burger({name: data.name, ingredients: data.ingrs});

  newburg.save(function(err){
  	console.log('saving');
  	if(err) return console.log("error", err);
  });

};

exports.main = function(req, res){
  models.Burger.find({}).exec(function(err, data){
      console.log("BURGERSSSSS");
      console.log(data);
      res.render('orders', {title: 'All burgers', burgers: data});
    });
}

exports.del = function(req, res){
  console.log(req.body.id);
  models.Burger.find({_id: req.body.id}).exec(function(err, data){
    data[0].remove();
  });
}