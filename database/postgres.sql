DROP DATABASE IF EXISTS  calendar;

CREATE DATABASE calendar;

CREATE TABLE IF NOT EXISTS user (
    id SERIAL PRIMARY KEY,
    firstName VARCHAR ,
    lastName VARCHAR,
    email VARCHAR,
    phoneNumber VARCHAR
)


CREATE TABLE IF NOT EXISTS reservation (
  people VARCHAR,
  restaurantId INTEGER,
  reservationDate VARCHAR,
  reservationMonth VARCHAR,
  reservationDay VARCHAR,
  reservationTimes VARCHAR,
  currentYear VARCHAR,
  available Boolean,
  notes VARCHAR,
  openingTime INTEGER,
  closingTime INTEGER,
  userId INTEGER REFERENCES user(id)
)





