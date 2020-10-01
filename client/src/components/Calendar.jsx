/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-console */
/* eslint-disable prefer-template */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Frame = styled.div`
  width: 600px;
  border: 2px solid black;
  box-shadow: 2px 2px 2px #eee;
  padding: 10px 10px 5px 10px;
  align-contents: center;
`;

const Border = styled.div`
  width: 600px;
  border: 1px solid lightgrey;
  box-shadow: 2px 2px 2px #eee;
`;

const Header = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 10px 5px 10px;
  display: flex;
  justify-content: space-between;
  background-color: #f5f6fa;
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Button = styled.div`
  cursor: pointer;
`
const DayBody = styled.div`
  width: 14.2%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${(props) => props.isToday && css`
    border: 1px solid #eee;
    background-color: #eee`}

  ${(props) => props.isSelected && css`
    background-color: #ff0000`}
`;



class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      today: new Date(),
      selectedDate: '',
      open: false
    }
    this.handleToggle = this.handleToggle.bind(this);
    // this.handleNextMonth = this.handleNextMonth.bind(this);
    // this.handlePreviousMonth = this.handlePreviousMonth.bind(this);
    this.handleNewDate = this.handleNewDate.bind(this);
  }

  handleToggle() {
    this.setState({
      open: !this.state.open
    })
  }

  // handlePreviousMonth() {
  //   this.setState({
  //     date: new Date(this.state.year, this.state.month -  1, this.state.days)
  //   })
  // }

  // handleNextMonth() {
  //   this.setState({
  //     date: new Date(this.state.year, this.state.month + 1, this.state.days)
  //   })
  // }

  handleNewDate(currentDay, currentMonth, currentYear) {
    console.log(currentDay, currentMonth)
    this.setState({
      today: new Date(currentYear, currentMonth, currentDay)
    })
  }

  render() {
    console.log()
    function firstDayOfMonth(date) {
      return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    }

    const lastDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
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
        <Header
          tabIndex={0}
          role="button"
          onKeyPress={this.handleToggle}
          onClick={this.handleToggle}
        >
          <div>
            <p>{months[month] + ' ' + day}</p>
          </div>
        </Header>
        <div className="calendarDropDown">

          {this.state.open && (
            <Border>
              <Header>

                <button type='button' onClick={() => {this.setState({today: new Date(year, month - 1, day)})}}>Previous Month</button>
                  <div>
                    {months[month]}
                    {' '}
                    {year}
                  </div>
                <button type='button' onClick={() => {this.setState({today: new Date(year, month + 1, day)})}}>Next Month</button>

              </Header>
              <Body>
                {daysOfTheWeek.map((currentDay) => (
                  <DayBody key={currentDay}>
                    <strong>{currentDay}</strong>
                  </DayBody>
                ))}

                {Array(lastDays[month] + (startDay - 1)).fill(null).map((_, index) => {
                  const specificDay = index - (startDay - 2)
                  return (
                    <DayBody
                      key={index}
                      isToday={specificDay === todaysDate.getDate()}
                      isSelected={specificDay === this.state.today.getDate()}
                      onClick={() => this.handleNewDate(specificDay, month, year)}
                      >
                      {specificDay > 0 ? specificDay : ''}
                    </DayBody>
                  );
                })}
              </Body>
            </Border>
          )}
        </div>
      </Frame>
    );
  }
}

export default Calendar;