DROP DATABASE IF EXISTS calendar

CREATE DATABASE calendar

USE calendar

-- CREATE TABLE year (
--   month varchar(10) not null,
--   day number not null,
--   people number not null,
--   reservation_id number not null AUTO_INCREMENT,
--   PRIMARY KEY (reservation_id)
-- );

-- CREATE TABLE reservations (
--   reservation_id number not null,
--   reservationTime varchar(10) not null,
--   available boolean not null,
--   PRIMARY KEY (reservation_id)
-- );

CREATE TABLE reservation (
  reservationDate  varchar(12) not null,
  reservationTime  varchar(12) not null,
  available        boolean not null,
  people           number not null,
  firstName        varchar(12) not null,
  lastName         varchar(14) not null,
  email            varchar(30) not null,
  phoneNumber      varchar(12) not null,
  notes            varchar(40) not null
)
