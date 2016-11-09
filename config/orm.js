require('./connection.js');

query.connection("SELECT * FROM burgers", function(err, res){
	if(err) throw err;
});

query.connection("INSERT INTO burgers WHERE ", function(err, res){
	if(err) throw err;
});

query.connection("UPDATE burgers WHERE", function(err, res){
	if(err) throw err;
});