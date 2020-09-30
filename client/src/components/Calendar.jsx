/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-console */
/* eslint-disable prefer-template */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/prefer-stateless-function */
import React, { useState, useEffect } from 'react';
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

const Day = styled.div`
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

function Calendar() {
  const lastDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const year = 2020;

  function firstDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  }

  const today = new Date();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [startDay, setStartDay] = useState(firstDayOfMonth(date));
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setStartDay(firstDayOfMonth(date));
  });

  // console.log(
  //   'date: ' + date,
  //   'day: ' + day,
  //   'month: ' + month,
  //   'startDay: ' + startDay,
  // );

  // console.log('date: ' + date);
  return (
    <Frame
      onClick={() => toggle(!open)}

    >
      <Header
        tabIndex={0}
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <div>

          <p>{open ? months[month] + ' ' + day : months[month] + ' ' + day}</p>
        </div>
      </Header>

      <div className="calendarDropDown">
        {open && (
          <Border>
            <Header>
              <button type="button" onClick={() => setDate(new Date(year, month - 1, day))}> Previous Month </button>
              <div>
                {months[month]}
                {' ' + year}
              </div>
              <button type="button" onClick={() => setDate(new Date(year, month + 1, day))}> Next Month </button>
              {console.log(year, month, day)}
            </Header>
            <Body>
              {daysOfTheWeek.map((currentDay) => (
                <Day key={currentDay}>
                  <strong>{currentDay}</strong>
                </Day>
              ))}

              {Array(lastDays[month] + (startDay - 1)).fill(null).map((_, index) => {
                const currentDay = index - (startDay - 2);
                // { console.log(lastDays[month], currentDay, index, startDay); }
                return (
                  <Day
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    isToday={currentDay === today.getDate()}
                    isSelected={currentDay === day}
                    onClick={() => setDate(new Date(year, month, currentDay))}
                  >
                    {currentDay > 0 ? currentDay : ''}
                  </Day>
                );
              })}
            </Body>
          </Border>
        )}
      </div>
    </Frame>

  );
}

export default Calendar;
