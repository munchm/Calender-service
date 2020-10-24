\c calendar;

COPY users (firstName, lastName, email, phoneNumber) FROM '/Users/haneenamro/SDC/calendar-reservation/Users.csv' DELIMITER ',' CSV header;


COPY restaurant (openingTime, closingTime ) FROM '/Users/haneenamro/SDC/calendar-reservation/Restaurant.csv' DELIMITER ',' CSV header;


COPY reservation (people, reservationDate, reservationMonth, reservationDay, reservationTime, currentYear,  notes,restaurantId,usrId) FROM '/Users/haneenamro/SDC/calendar-reservation/Reservation.csv' DELIMITER ',' CSV header ;
