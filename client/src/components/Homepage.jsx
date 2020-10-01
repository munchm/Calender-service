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
  justify-content: left;
  align-content: center;
`;

const Row = styled.div`
  width: 550px;
  display: flex;
  flex-direction: row;
  padding: 20px 0px 0px 0px;
  gap: 35px
`;

const Column = styled.div`
  flex: ${(props) => props.size}
`;

function Homepage() {
  return (
    <div>
      <Border>
        <Title>
          <h2>Make a Reservation</h2>
        </Title>
        <Calendar />
        <Row>
          <Column size={1}>
            <ReservationTimes />
          </Column>
          <Column size={1}>
            <People />
          </Column>
        </Row>
      </Border>
    </div>
  );
}

export default Homepage;
