CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
item_id INT AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(255) NOT NULL,
devoured boolean NOT NULL,
PRIMARY KEY (item_id));
