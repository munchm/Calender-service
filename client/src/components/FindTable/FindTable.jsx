/* eslint-disable object-shorthand */
import React from 'react';
import styled from 'styled-components';
import FindTableCalendar from './FindTableCalendar';
import FindTableReservationTime from './FindTableReservationTime';
import FindTablePeople from './FindTablePeople';

const Frame = styled.div``;

const BackdropModal = styled.div`
  position: fixed;
  background: white;
  z-index: 5;
  margin: auto;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: -10px;
`;

const Modal = styled.div`
  position: relative;
  margin: 0;
  z-index: 8;
  width: 500px;
`;

const Header = styled.div`
  height: 40px;
  width: 420px;
  border-radius: 4px;
  font-size: 25px;
  font-family: 'Helvetica Neue';
  justify-content: center;
  text-align: center;
  display: flex;
  padding: 10px 0px 0px 0px;
  background-color: rgb(244, 0, 0, .9);
  border: 1px solid #f43939;
  color: white;
`;

const InlineRow = styled.div`
  position: absolute;
  top: 50px;
  left: 50px;
  justify-content: center;
  display: flex;
  flex-direction: row;
  gap: 22px
`;

const SecondRow = styled.div`
  position: absolute;
  top: 80px;
  height: 32px;
  width: 1000px;
  display: inline-flex;
  flex-direction: row;
  gap: 22px;
  overflow-x: hidden;
`;

const FindaTable = styled.div`
  display: flex;
  width: 120px;
  height: 17px;
  padding-top: 7px;
  padding-bottom: 7px;
  font-family: 'Helvetica Neue';
  text-align: center;
  justify-content: center;
  background-color: blue;
  color: white;
  border-radius: 5px;
`;

const SecondRowDate = styled.div`
  display: flex;
  width: 180px;
  font-size: 22px;
  font-family: 'Helvetica Neue';
  justify-content: center;
  color: black;
  border-radius: 5px;
`;

const TimeSlots = styled.div`
  display: inline-flex;
  align-content: center;
  justify-content: center;
  width: 150px;
  height: 17px;
  padding-top: 7px;
  padding-bottom: 7px;
  font-family: 'Helvetica Neue';
  background-color: blue;
  color: white;
  border-radius: 5px;
`;

const ExitButton = styled.div`
  display: flex;
  width: 100px;
  padding: 2px;
  position: absolute;
  font-size: x-large;
  background-color: white;
  transform: translate(500px, 200px);
  justify-content: center;
  color: black;
  &:hover {
    background-color: blue;
    color: white;
  }
`;

class FindTable extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      day: '',
      month: '',
      num: '',
      chosen: 9,
      showTimes: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.grabDate = this.grabDate.bind(this);
    this.handleInnerToggle = this.handleInnerToggle.bind(this);
    this.grabTime = this.grabTime.bind(this);
  }

  handleToggle() {
    const { open, showTimes } = this.state;
    this.setState({
      open: !open,
    });
    if (showTimes === true) {
      this.handleInnerToggle();
    }
  }

  handleInnerToggle() {
    const { showTimes } = this.state;
    this.setState({
      showTimes: !showTimes,
    });
  }

  async grabDate(day, month, num) {
    await this.setState({
      day: day,
      month: month,
      num: num,
    });
  }

  async grabTime(chosen) {
    await this.setState({
      chosen: chosen,
    });
  }

  render() {
    const {
      timesArray, passDay, passMonth, passDayOfTheWeek, chosenTime
    } = this.props;
    const {
      open, day, month, num, showTimes, chosen,
    } = this.state;
    const timeIndex = timesArray.indexOf(chosen);
    const daysOfTheWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return (
      <Frame>
        <Header
          onClick={this.handleToggle}
          onKeyPress={this.handleToggle}
        >
          Find a Table
        </Header>
        {open && (
          <BackdropModal>
            <ExitButton
              onClick={this.handleToggle}
            >
              Exit
            </ExitButton>
            <Modal>
              <InlineRow>
                <FindTableCalendar
                  grabDate={this.grabDate}
                  passDay={passDay}
                  passMonth={passMonth}
                  passDayOfTheWeek={passDayOfTheWeek}
                  // {this.props.day, this.props.month, this.props.day}
                />
                <FindTableReservationTime
                  chosenTime={chosenTime}
                  grabTime={this.grabTime}
                  onClick={this.handleInnerToggle}
                />
                <FindTablePeople onClick={this.handleInnerToggle} />
                <FindaTable onClick={this.handleInnerToggle}>
                  Find a Table
                </FindaTable>
                {showTimes && (
                  <SecondRow>
                    <SecondRowDate>
                      {/* CHANGE BACK BECAUSE CALENDAR DOESN'T UPDATE
                      {`${daysOfTheWeek[num]}, ${months[month]} ${day}`} */}
                      {`${daysOfTheWeek[passDayOfTheWeek]}, ${months[passMonth]} ${passDay}`}
                    </SecondRowDate>
                    {timesArray.slice(timeIndex, timeIndex + 7).map((time) => (
                      <TimeSlots key={time}>
                        {
                            time <= 12
                              ? (
                                <span>
                                  {time}
                                  :00 AM
                                </span>
                              )
                              : (
                                <span>
                                  {time - 12}
                                  :00 PM
                                </span>
                              )
                          }
                      </TimeSlots>
                    ))}
                  </SecondRow>
                )}
              </InlineRow>
            </Modal>
          </BackdropModal>
        )}
      </Frame>
    );
  }
}

export default FindTable;
