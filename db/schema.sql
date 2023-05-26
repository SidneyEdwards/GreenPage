DROP DATABASE IF EXISTS project_2;
CREATE DATABASE project_2;

USE project_2;

CREATE TABLE users(
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(30) NOT NULL,
  pass VARCHAR(30) NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  email VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE books(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  author VARCHAR(30) NOT NULL,
  genre VARCHAR(30),
  last_name VARCHAR(30),
  email VARCHAR(30),
  is_available BOOLEAN NOT NULL,
  locat VARCHAR(30) NOT NULL,
  userID INT,
  locatID INT,
  PRIMARY KEY (id),
  FOREIGN KEY (userID) REFERENCES users(id),
  FOREIGN KEY (locatID) REFERENCES locations(id)
);

CREATE TABLE locations(
  id INT NOT NULL AUTO_INCREMENT,
  addr VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);
