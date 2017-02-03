var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('test', 'test', null, { dialect: 'sqlite', storage: './db.test.sqlite' });

var User = sequelize.define('User', {
  username: Sequelize.STRING
});
/*  Create a '/users' route that responds to 
    a GET request with all users in the database */
    app.get('/users',function(req,rs){
    	res.render('')
    })
    app.post('/users',function(req,res){
  //   	var username = req.body.username
	 //    new User = sequelize.define('user', {
	 //  		username: username,
		// });

		sequelize.sync().then(function() {
		  return User.create({
		    username: '',
		  });
		}).then(function() {
		  console.log(username.get({
		    force: true
		  }));
		});

    })




module.exports = { 
  app: app,
  User: User
};

