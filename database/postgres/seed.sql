\c calendar;

COPY users (usrId , firstName, lastName, email, phoneNumber) FROM '/Users/haneenamro/SDC/calendar-reservation/UsrTable.csv' DELIMITER ',' CSV header;


COPY restaurant ( restaurantId ,openingTime, closingTime ) FROM '/Users/haneenamro/SDC/calendar-reservation/restaurantTable.csv' DELIMITER ',' CSV header;


COPY reservation (reservationId , people, reservationDate, reservationMonth, reservationDay, reservationTimes, currentYear, available, notes,restaurantId,usrId) FROM '/Users/haneenamro/SDC/calendar-reservation/ReservationTable.csv' DELIMITER ',' CSV header;
