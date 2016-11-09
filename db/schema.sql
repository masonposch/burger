CREATE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	'id' INTEGER NOT NULL AUTO_INCREMENT,
	'burger_name' VARCHAR (50) NOT NULL,
	'devoured' BOOLEAN NOT NULL,
	'date' TIMESTAMP NOT NULL,
	PRIMARY KEY ('id')
);
