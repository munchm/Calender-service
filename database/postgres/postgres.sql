
DROP DATABASE IF EXISTS calendar;

CREATE DATABASE calendar;

\c calendar;
DROP TABLE IF EXISTS users;
CREATE TABLE users (
    usrId SERIAL  PRIMARY KEY ,
    firstName VARCHAR ,
    lastName VARCHAR,
    email VARCHAR,
    phoneNumber VARCHAR
);

DROP TABLE IF EXISTS restaurant;
CREATE TABLE restaurant (
  restaurantId SERIAL PRIMARY KEY,
  openingTime INTEGER,
  closingTime INTEGER

);

DROP TABLE IF EXISTS reservation;
CREATE TABLE reservation (
  reservationId SERIAL PRIMARY KEY ,
  people VARCHAR,
  reservationDate VARCHAR,
  reservationMonth VARCHAR,
  reservationDay VARCHAR,
  reservationTimes VARCHAR,
  currentYear VARCHAR,
  available Boolean,
  notes VARCHAR,
  restaurantId INTEGER references restaurant(restaurantId),
  usrId INTEGER references users(usrId)

);






