CREATE DATABASE fooditems;

CREATE TABLE foods (
  id VARCHAR(200) PRIMARY KEY,
  user_email VARCHAR(255),
  food VARCHAR(30),
  date VARCHAR(255),
  expiration VARCHAR(200)
);

CREATE TABLE users (
  email VARCHAR(255) PRIMARY KEY,
  hashed_password VARCHAR(255)
);