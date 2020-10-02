import React from 'react';
import styled, { css } from 'styled-components';
import Calendar from './Calendar.jsx';
import ReservationTimes from './ReservationTimes.jsx';
import People from './People.jsx';
import FindTable from './FindTable.jsx';

const Border = styled.div`
  width: 425px;
  box-shadow: 10px 10px 10px #eee;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid;
  padding: 24px 24px 24px 24px;
`;

const Header = styled.div`
  display: flex;
  margin-flex-start: 1.33em;
  justify-content: left;
  align-content: center;
  font-size: 20px;
  line-height: 26px;
  font-weight: 700;
  color: black;
  word-break: break-word;
  overflow-wrap: break-word;
  vertical-align: baseline;
`;

const InlineRow = styled.div`
  align-content: center;
  display: inline-flex;
  flex-direction: row;
  padding: 10px 0px;
  gap: 25px
`;

const Row = styled.div`
  display: flex;
  padding: 10px 0px;
`;

const Column = styled.div`
  flex: ${(props) => props.size}
`;

function Homepage() {
  return (
    <Border>
      <Header>
        <h2>Make a Reservation</h2>
      </Header>
      <Row>
        <Calendar />
      </Row>
      <InlineRow>
          <ReservationTimes />
          <People />
      </InlineRow>
      <Row>
        <FindTable/>
      </Row>
    </Border>
  );
}

export default Homepage;
