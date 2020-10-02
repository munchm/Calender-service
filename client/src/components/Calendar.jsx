/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-console */
/* eslint-disable prefer-template */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import icons from '../icons.jsx';

const Frame = styled.div`
  width: 420px;
  border: .5px solid rgb(118, 118, 118);
  align-contents: center;
  position: relative;
  border-radius: 5px;
`;

const Border = styled.div`
  width: 400px;
  box-shadow: 10px 10px 10px 10px #eee;
  position: absolute;
  background-color: white;
`;

const Header = styled.div`
  display: flex;
  font-family: 'Arial';
  flex-wrap: wrap;
  font-size: 18px;
  font-weight: bold;
  justify-content: space-between;
  padding: 20px 20px;
`;

const DropDownMonth = styled.div`
  transform: translate(15px, 0px);
`;

const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 50%;
  `;

const HeaderIcon = styled.div`
  width: 1px;
  height: 1px;
  border: 0px solid;
  transform: translate(-10px, 0px) scale(1.5, 1.5);
`

const LeftIcon = styled.div`
  width: 10px;
  height: 1px;
  color: lightgrey;
  border: 0px solid;
  transform: rotate(90deg) translate(5px, -20px) scale(1.5, 1.5);
`;

const RightIcon = styled.div`
  width: 10px;
  height: 1px;
  padding: 20px 20px 0px 10px;
  border: 0px solid;
  transform: rotate(-90deg) translate(5px, -20px) scale(1.5, 1.5);
`;

const DayBody = styled.div`
  width: 14%;
  height: 50px;
  border-radius: 50%;
  appearance: textfield;
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  justify-content: center;
  cursor: pointer;
  font-family: 'Arial';
  &:hover {
    background: lightgrey;
  }

  ${(props) => props.isToday && css`
    border: 2px solid #eee;
    background-color: #eee;`}

  ${(props) => props.isSelected && css`
    background-color: #ff0000;
    color: white;`}
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
    this.setState({
      today: new Date(currentYear, currentMonth, currentDay)
    })
  }

  render() {
    function firstDayOfMonth(date) {
      return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    }

    const lastDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const daysOfTheWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const shortDaysOfTheWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
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
            role="button"
            onKeyPress={this.handleToggle}
            onClick={this.handleToggle}
          >
            {daysOfTheWeek[date.getDay()] + ', ' + months[month] + ' ' + day}
            <HeaderIcon>
              <svg>
                <path d={icons.arrowIcon} />
              </svg>
            </HeaderIcon>
          </Header>
        <div className="calendarDropDown">

          {this.state.open && (
            <Border>
              <Header>

                <div
                  onClick={() => {this.setState({today: new Date(year, month - 1, day)})}}> <LeftIcon>
                    <svg>
                      <path d={icons.arrowIcon} />
                    </svg>
                  </LeftIcon>
                </div>
                <DropDownMonth>
                  {months[month]}
                  {' '}
                  {year}
                </DropDownMonth>
                <div
                  onClick={() => {this.setState({today: new Date(year, month + 1, day)})}}>
                  <RightIcon>
                    <svg>
                      <path d={icons.arrowIcon} />
                    </svg>
                  </RightIcon>
                </div>

              </Header>
              <Body>
                {shortDaysOfTheWeek.map((currentDay) => (
                  <DayBody key={currentDay}>
                    <strong>{currentDay}</strong>
                  </DayBody>
                ))}

                {Array(lastDays[month] + (startDay - 1)).fill(null).map((_, index) => {
                  const specificDay = index - (startDay - 2)
                  console.log(specificDay)
                  return (
                    <DayBody
                      key={index}
                      isToday={specificDay === todaysDate.getDate()}
                      isSelected={
                        todaysDate.getDate() === this.state.today.getDate() ?
                        specificDay === '' :
                        specificDay === this.state.today.getDate()
                      }
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