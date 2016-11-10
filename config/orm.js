var connection = require('./connection.js');

var tableName = "allcharacters";

var orm = {


	selectAll: function(callback){
		var s = 'SELECT * FROM ' + tableName;

		connection.query(s, function(err, result) {
	 
            callback(result);

        });
	},


	updateOne: function(name, callback){
		var s = 'select * from ' + tableName + ' where routeName=?';

		connection.query(s,[name], function(err, result) {
	 
            callback(result);
        });

	},


	insertOne: function(character, callback){

		// Creating a routeName so its easy to search. 
		var routeName = character.name.replace(/\s+/g, '').toLowerCase();
		console.log(routeName);

		var s = "INSERT INTO " + tableName + " (routeName, name, role, age, forcePoints) VALUES (?,?,?,?,?)";

		connection.query(s,[id, burger_name, devoured, date], function(err, result) {
            
            callback(result);

        });

	}


};

module.exports = orm;


