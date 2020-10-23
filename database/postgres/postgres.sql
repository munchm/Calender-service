
DROP DATABASE IF EXISTS calendar;

CREATE DATABASE calendar;

\c calendar;
DROP TABLE IF EXISTS users;
CREATE TABLE users (
    usrId SERIAL  PRIMARY KEY ,
    firstName VARCHAR(20) ,
    lastName VARCHAR(20),
    email VARCHAR(50),
    phoneNumber VARCHAR(20)
);

DROP TABLE IF EXISTS restaurant;
CREATE TABLE restaurant (
  restaurantId SERIAL  PRIMARY KEY,
  openingTime SMALLINT ,
  closingTime SMALLINT

);

DROP TABLE IF EXISTS reservation;
CREATE TABLE reservation (
  reservationId SERIAL PRIMARY KEY ,
  people SMALLINT,
  reservationDate VARCHAR(50),
  reservationMonth VARCHAR(15),
  reservationDay VARCHAR(15),
  reservationTime VARCHAR(10),
  currentYear VARCHAR(8),
  notes VARCHAR(25),
  restaurantId INTEGER references restaurant(restaurantId),
  usrId INTEGER references users(usrId)
  -- UNIQUE  (reservationTime ,reservationDate, restaurantId)
);






