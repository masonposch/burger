var mysql = require('mysql');
var prompt = require('prompt');


var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '',
	database: 'burgers_db'
});


var getConnection (function(db){

	connection.connect(function(err){
		if (err) throw err;
		console.log("connected as id" + connection.threadID);
	});

});

module.exports = getConnection;


connection.end();