DROP DATABASE IF EXISTS calendar;

CREATE DATABASE calendar;

USE calendar;

CREATE TABLE reservation (
  restuarantId int not NULL PRIMARY KEY,
  reservationDate varchar(40) not null,
  reservationTime varchar(40) not null,
  available boolean not null,
  people int not null,
  firstName varchar(20) not null,
  lastName varchar(20) not null,
  email varchar(45) not null,
  phoneNumber varchar(20) not null,
  notes varchar(40) not null
)
