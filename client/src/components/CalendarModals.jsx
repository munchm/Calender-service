import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Frame = styled.div`
  display: flex;
`;


const Header = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const Row = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
  gap: 50px;
  background-color: blue;
  color: white;
`;

const Column = styled.div`
  flex: ${(props) => props.size}
`;

class CalendarModals extends Component {
  constructor() {
    super();
    this.state = {
      today: new Date(),
      selectedDate: '',
      open: false
    }
    this.handleToggle = this.handleToggle.bind(this);
    this.handleNewDate = this.handleNewDate.bind(this);
  }

  handleToggle() {
    this.setState({
      open: !this.state.open
    })
  }

  handleNewDate(currentDay, currentMonth, currentYear) {
    this.setState({
      today: new Date(currentYear, currentMonth, currentDay)
    })
  }

  render() {
    const times = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

    function firstDayOfMonth(date) {
      return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    }

    const lastDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const daysOfTheWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const todaysDate = new Date();
    const date = this.state.today;
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const startDay = firstDayOfMonth(date)
    console.log(todaysDate)

    return (
      <Frame>
        <Row>
          <p>{daysOfTheWeek[date.getDay()] + ', ' + months[month] + ' ' + day}</p>
        </Row>
        <Row>
          {times.map((time) => {
            return (
              <Column size={1}>
                {time}
              </Column>
            )
          })}
        </Row>
      </Frame>
    );
  }
}

export default CalendarModals;