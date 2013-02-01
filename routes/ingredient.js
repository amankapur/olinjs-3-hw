var models = require("./models");

exports.newform =  function(req, res){
	res.render('ingrform', {title: 'Ingredient form'});
};

exports.newitem = function(req, res){
  var data = req.body;
  console.log(data);
  var newingr = new models.Ingredient({name: data.name, cost: data.cost});

  newingr.save(function(err){
  	console.log('saving');
  	if(err) return console.log("error", err);
    });
    res.render('index', {title: 'Ingredient Saved'});
};

