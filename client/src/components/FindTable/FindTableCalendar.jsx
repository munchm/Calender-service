/* eslint-disable react/no-unused-state */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-console */
/* eslint-disable prefer-template */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import icons from '../../icons';

const Frame = styled.div`
  width: 420px;
  height: 30px;
  border: 2px solid #eee;
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
`;

const Border = styled.div`
  width: 300px;
  box-shadow: 10px 10px 10px 10px #eee;
  position: absolute;
  transform: translate(70px, 14px);
  z-index: 2;
  background-color: white;
`;

const Header = styled.div`
  position: flex;
  width: 200px;
  transform: translate(40px, 7px);
  font-family: 'Arial';
  font-size: 16px;
`;

const DropDownHeader = styled.div`
  display: flex;
  font-family: 'Arial';
  vertical-align: center;
  justify-content: center;
  font-size: 18px;
  justify-content: space-between;
  padding: 20px 20px 20px 50px;
`;

const DropDownMonth = styled.div`
  transform: translate(10px, 0px) scale(1.5 1.5);
`;

const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 50%;
  `;

const HeaderIcon = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  transform: translate(350px, -15px) scale(1.5, 1.5);
`;

const LeftIcon = styled.div`
  width: 30px;
  height: 30px;
  opacity: 50px;
  cursor: pointer;
  transform: rotate(90deg) translate(5px, 15px) scale(1.5, 1.5);
`;

const RightIcon = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  transform: rotate(-90deg) translate(15px, 10px) scale(1.5, 1.5);
`;

const DayBody = styled.div`
  width: 14%;
  height: 40px;
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
    background-color: lightgrey;
  }

  ${(props) => props.isToday && css`
    border: 2px solid #eee;
    background-color: #eee;`}

  ${(props) => props.isSelected && css`
    background-color: #ff0000;
    color: white;`}
`;

const Filler = styled.div``;




class FindTableCalendar extends Component {
  constructor() {
    super();
    this.state = {
      today: new Date(),
      selectedDate: '',
      open: false,
      time: '',
    };
    this.handleToggle = this.handleToggle.bind(this);
    // this.handleNextMonth = this.handleNextMonth.bind(this);
    // this.handlePreviousMonth = this.handlePreviousMonth.bind(this);
    this.handleNewDate = this.handleNewDate.bind(this);
  }

  // componentDidMount() {
  //   const { day1, month1, dayOfTheWeek} = this.props;
  //   const year = 2020;
  //   this.setState({
  //     today: new Date(year, month1, day1),
  //   });
  //   console.log(this.state.today);
  // }

  handleToggle() {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  }

  async handleNewDate(currentDay, currentMonth, currentYear, dayOfTheWeek) {
    const { today } = this.state;
    // const { grabDate } = this.props;
    this.setState({
      today: new Date(currentYear, currentMonth, currentDay),
    });
    await this.props.grabDate(currentDay, currentMonth, dayOfTheWeek);

    // setInterval(() => {
    //   this.props.grabDate(currentDay, currentMonth, dayOfTheWeek), 1000);
    // clearInterval(this.props.grabDate);
  }

  handleReservationTime(selectedTime) {
    this.setState({
      time: selectedTime,
    });
  }

  render() {
    const { day1, month1, dayOfTheWeek} = this.props;
    const { today, open } = this.state;

    function firstDayOfMonth(date) {
      return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    }

    const lastDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const daysOfTheWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const shortDaysOfTheWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const todaysDate = new Date();
    const date = today;
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const startDay = firstDayOfMonth(date);

    return (
      <Frame>
        <Header
          onKeyPress={this.handleToggle}
          onClick={this.handleToggle}
        >
          <span>
            {daysOfTheWeek[date.getDay()] + ', ' + months[month] + ' ' + day + ', ' + year}
          </span>
          {/* <span>
            {daysOfTheWeek[dayOfTheWeek] + ', ' + months[month1] + ' ' + day1 + ', ' + year}
          </span> */}
          <HeaderIcon>
            <svg viewBox="0 0 30 30">
              <path d={icons.arrowIcon} />
            </svg>
          </HeaderIcon>
        </Header>
        <div className="calendarDropDown">

          {open && (
            <Border>
              <DropDownHeader>

                <Filler
                  onClick={() => {
                    this.setState({ today: new Date(year, month - 1, day) });
                  }}
                >
                  <LeftIcon>
                    <svg viewBox="0 0 30 30">
                      <path d={icons.arrowIcon} />
                    </svg>
                  </LeftIcon>
                </Filler>
                <DropDownMonth>
                  <strong>
                    {months[month]}
                    {' '}
                    {year}
                  </strong>
                </DropDownMonth>
                <Filler
                  onClick={() => {
                    this.setState({ today: new Date(year, month + 1, day) });
                  }}
                >
                  <RightIcon>
                    <svg viewBox="0 0 30 30">
                      {/* <g color="#448ee4" fill="currentcolor"> */}
                        <path d={icons.arrowIcon} />
                      {/* </g> */}
                    </svg>
                  </RightIcon>
                </Filler>

              </DropDownHeader>
              <Body>
                {shortDaysOfTheWeek.map((currentDay) => (
                  <DayBody key={currentDay}>
                    <strong>{currentDay}</strong>
                  </DayBody>
                ))}

                {Array(lastDays[month] + (startDay - 1)).fill(null).map((_, index) => {
                  const specificDay = index - (startDay - 2);
                  const key = index;
                  return (
                    <DayBody
                      key={key}
                      isToday={specificDay === todaysDate.getDate()}
                      isSelected={
                        todaysDate.getDate() === today.getDate()
                          ? specificDay === ''
                          : specificDay === today.getDate()
                      }
                      onClick={() => this.handleNewDate(
                        specificDay, month, year, new Date(year, month, specificDay).getDay(),
                      )}
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

export default FindTableCalendar;
