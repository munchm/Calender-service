import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import icons from '../icons';

const Frame = styled.div`
  width: 420px;
  border: 2px solid #eee;
  align-contents: center;
  position: relative;
  border-radius: 5px;
`;

const Border = styled.div`
  width: 400px;
  box-shadow: 10px 10px 10px 10px #eee;
  position: absolute;
  z-index: 2;
  background-color: white;
`;

const Header = styled.div`
  display: flex;
  font-family: 'Arial';
  font-size: 18px;
  justify-content: space-between;
  padding: 20px 20px;
  cursor: pointer;
`;

const DropDownHeader = styled.div`
  display: flex;
  font-family: 'Arial';
  vertical-align: center;
  justify-content: center;
  font-size: 25px;
  justify-content: space-between;
  padding: 20px 20px;
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
  transform: translate(376px, 8px) scale(1.5, 1.5);
`;

const LeftIcon = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  transform: rotate(90deg) translate(15px, 10px) scale(2, 2);
`;

const RightIcon = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  transform: rotate(270deg) translate(15px, 10px) scale(2, 2);
`;

const DayBody = styled.div`
  width: 14%;
  height: 50px;
  border-radius: 50%;
  appearance: textfield;
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 20px;
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

const Filler = styled.div``;

class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      today: new Date(),
      open: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleNewDate = this.handleNewDate.bind(this);
  }

  handleToggle() {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  }

  async handleNewDate(currentDay, currentMonth, currentYear, dayOfTheWeek) {
    const { passCalendarDate } = this.props;
    this.setState({
      today: new Date(currentYear, currentMonth, currentDay),
    });
    await passCalendarDate(currentDay, currentMonth, dayOfTheWeek);
  }

  render() {
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
    // console.log(todaysDate)

    return (
      <Frame>
        <Header
          onKeyPress={this.handleToggle}
          onClick={this.handleToggle}
        >
          { `${daysOfTheWeek[date.getDay()]}, ${months[month]} ${day}` }
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
                  {months[month]}
                  {' '}
                  {year}
                </DropDownMonth>
                <Filler
                  onClick={() => {
                    this.setState({ today: new Date(year, month + 1, day) });
                  }}
                >
                  <RightIcon>
                    <svg viewBox="0 0 30 30">
                      <path d={icons.arrowIcon} />
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
                  const key = index;
                  const specificDay = index - (startDay - 2);
                  // console.log(specificDay);
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

export default Calendar;
