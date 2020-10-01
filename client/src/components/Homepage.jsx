import React from 'react';
import styled, { css } from 'styled-components';
import Calendar from './Calendar.jsx';
import ReservationTimes from './ReservationTimes.jsx';
import People from './People.jsx';

const Border = styled.div`
  width: 700px;
  height: 700px;
  border: 2px solid black;
  box-shadow: 10px 10px 10px #eee;
  padding: 20px 10px 20px 80px;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
`;

const SecondRow = styled.div`
  width: 625px;
  display: flex;
  padding: 20px 50px 0px 0px
`;

function Homepage() {
  return (
    <div>
      <Border>
        <Title>
          <h2>Make a Reservation</h2>
        </Title>
        <Calendar />
        {/* <SecondRow>
          <ReservationTimes />
          <People />
        </SecondRow> */}
      </Border>
    </div>
  );
}

export default Homepage;
