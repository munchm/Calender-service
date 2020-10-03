import React from 'react';
import styled, { css } from 'styled-components';
import FindTableCalendar from './FindTableCalendar.jsx';
import FindTableReservationTime from './FindTableReservationTime.jsx';
import FindTablePeople from './FindTablePeople.jsx';

const Frame = styled.div`
`;

const Modal = styled.div`
`;

const Calendar = styled.div`
  background-color: white;
  padding: 13px 0px;
`;

const Header = styled.div`
  width: 420px;
  height: 40px;
  border-radius: 4px;
  font-size: 25px;
  font-family: 'Helvetica Neue';
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 10px 0px 0px 0px;
  position: relative;
  background-color: rgb(244, 0, 0, .9);
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

const InlineRow = styled.div`
  align-content: center;
  display: inline-flex;
  flex-direction: row;
  gap: 22px
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
    return (
      <Frame>
        <Header
          onClick={this.handleToggle}
          onKeyPress={this.handleToggle}
        >
          Find a Table
        </Header>
        {this.state.open && (
          <Modal>
            <Calendar>
              <FindTableCalendar />
            </Calendar>
            <InlineRow>
              <FindTableReservationTime />
              <FindTablePeople />
            </InlineRow>
          </Modal>
        )}
      </Frame>
    )
  }
}

export default FindTable;