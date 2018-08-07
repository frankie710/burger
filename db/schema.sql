
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	ID INT (10) AUTO_INCREMENT NOT NULL,
    burger_Name VARCHAR (250) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
);