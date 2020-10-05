import React from 'react';
import styled, { css } from 'styled-components';
import FindTableCalendar from './FindTableCalendar.jsx';
import FindTableReservationTime from './FindTableReservationTime.jsx';
import FindTablePeople from './FindTablePeople.jsx';

const Frame = styled.div`
`;

const BackdropModal = styled.div`
  position: fixed;
  background: lightgrey;
  z-index: 5;
  margin: 0;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

const Modal = styled.div`
  position: relative;
  margin: 0;
  left: 50px;
  top: 50px;
  z-index: 8;
`;

const Calendar = styled.div`
  display: flex;
  justify-content: center;
  padding: 13px 0px;
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

const SecondHeader = styled.div`
  width: 420px;
  border: 2px solid black;
  padding: 10px 20px 10px 20px;
  font-size: 30px;
  font-weight: bold;
  position: absolute;
  justify-content: center;
  background-color: blue;
  color: white;
`;

const InlineRow = styled.div`
  align-content: center;
  justify-content: center;
  display: flex;
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
    console.log(this.props.handleToggle)
    return (
      <Frame>
        <Header
          onClick={this.handleToggle}
          onKeyPress={this.handleToggle}
        >
          Find a Table
        </Header>
        {this.state.open && (
          <BackdropModal>
            <Modal>
              <Calendar>
                <FindTableCalendar />
              </Calendar>
              <InlineRow>
                <FindTableReservationTime />
                <FindTablePeople />
              </InlineRow>
            </Modal>
          </BackdropModal>
        )}
      </Frame>
    )
  }
}

export default FindTable;