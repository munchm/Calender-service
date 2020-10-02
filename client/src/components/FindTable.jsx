import React from 'react';
import styled, { css } from 'styled-components';
import Calendar from './Calendar.jsx';
import ReservationTimes from './ReservationTimes.jsx';
import People from './People.jsx';
import CalendarModals from './CalendarModals.jsx';

const Border = styled.div`
  width: 200px;
`;

const Color = styled.div`

`;

const Header = styled.div`
  width: 400px;
  height: 40px;
  border-radius: 4px;
  padding: 10px 10px;
  font-size: 25px;
  line-height: 1.28571em;
  font-family: 'Helvetica Neue';
  display: flex;
  justify-content: center;
  background-color: rgb(244, 0, 0);
  border: 1px solid #f43939;
  color: white;
`;

const SecondHeader = styled.div`
  width: 420px;
  border: 2px solid black;
  padding: 10px 20px 10px 20px;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  background-color: blue;
  color: white;
`;

const Row = styled.div`
  width: 430px;
  display: inline-flex;
  flex-direction: row;
  padding: 20px 0px 0px 0px;
`;

const Column = styled.div`
  flex: ${(props) => props.size}
`;


class FindTable extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
    }
    this.handleToggle = this.handleToggle.bind(this);

  }

  handleToggle() {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    return(
      <div>
          <Header
            tabIndex={0}
            role="button"
            onKeyPress={this.handleToggle}
            onClick={this.handleToggle}
          >
            <strong>Find a Table</strong>
          </Header>
          {this.state.open && (
            <Border>
              <Row>
                <Column>
                  <Calendar />
                </Column>
              </Row>
              <Row>
                <Column size={1}>
                  <ReservationTimes />
                </Column>
                <Column size={1}>
                  <People />
                </Column>
              </Row>
              <Row>
                <SecondHeader >
                  <strong>Find a Table</strong>
                </SecondHeader>
              </Row>
              <Row>
                <Column size={1}>
                  <CalendarModals />
                </Column>
              </Row>
            </Border>
          )}
      </div>
    )
  }
}

export default FindTable;