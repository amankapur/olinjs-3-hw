
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , ingredient = require('./routes/ingredient')
  , order = require('./routes/order')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/ingredient/new', ingredient.newform);
app.post('/ingredient/newitem', ingredient.newitem);
app.get('/orders', order.main)
app.get('/order/new', order.newform);
app.post('/order/newitem', order.newitem);
app.post('/order/del', order.del);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
