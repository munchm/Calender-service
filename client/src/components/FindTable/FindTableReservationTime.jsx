/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-nested-ternary */
import React from 'react';
import styled, { css } from 'styled-components';
import icons from '../../icons';

const Frame = styled.div`
  width: 200px;
`;

const Border = styled.div`
`;

const Modal = styled.div`
  font-size: 18px;
  position: absolute;
  z-index: 5;
  width: 190px;
  height: 300px;
  overflow-y: scroll;
  list-style-type: disc;
  background-color: white;
  padding: 5px 5px;
  box-shadow: 5px 5px 5px 5px #eee;
`;

const Header = styled.div`
  padding: 0px 40px;
  padding-top: 6px;
  padding-bottom: 4px;
  border: 2px solid #eee;
  font-family: 'Arial';
  font-size: 16px;
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
`;

const Arrow = styled.div``;

const ClockIcon = styled.div`
  position: absolute;
  z-index: 1;
  width: 30px;
  height: 30px;
  cursor: pointer;
  transform: translate(-30px, 0px) scale(1.2, 1.2);
`;

const ArrowIcon = styled.div`
  position: absolute;
  z-index: 1;
  width: 20px;
  height: 20px;
  cursor: pointer;
  transform: translate(167px, -22px) scale(1.5, 1.5);
`;

const Option = styled.div`
  font-family: 'Arial';
  font-size: 15px;
  padding: 20px 15px;
  display: flex;
  cursor: pointer;
  &:hover {
    background: #eee;
  }

  ${(props) => props.selected && css`
    background-color: rgba(10,179,201,.1);
    color: #00838f;
  `}
`;

class FindTableReservationTime extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 9,
      choice: null,
      open: false,
    };
    this.handleChoice = this.handleChoice.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleOpen() {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  }

  handleChoice(chosenTime) {
    this.setState({
      choice: chosenTime,
    });
    this.props.grabTime(chosenTime);
  }

  render() {
    const { time, open, choice } = this.state;
    const times = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    return (
      <Frame
        onClick={this.handleOpen}
      >
        <Border
          tabIndex={0}
          role="button"
          onClick={this.handleOpen}
        >
          <Header>
            <ClockIcon>
              <svg viewBox="0 0 30 30">
                <g color="grey" fill="currentcolor">
                  <path d={icons.clockIcon} />
                </g>
              </svg>
            </ClockIcon>
            {
            choice === null
              ? (time <= 12
                ? <span>{time}:00 AM</span>
                : <span>{time - 12}:00 PM</span>)
              : choice <= 12
                ? <span>{choice}:00 AM</span>
                : <span>{choice - 12}:00 PM</span>
            }
          </Header>
          <ArrowIcon>
            <svg viewBox="0 0 20 20">
              <path d={icons.arrowIcon} />
            </svg>
          </ArrowIcon>
        </Border>
        <Arrow>
          {open && (
            <Modal
              onClick={this.handleOpen}
            >
              {times.map((eachTime, index) => {
                const chosen = eachTime;
                const key = index;
                return (
                  <Option
                    key={key}
                    selected={chosen === choice}
                    onClick={() => this.handleChoice(chosen)}
                  >
                    {
                    chosen <= 12
                      ? <span>{chosen}:00 AM</span>
                      : <span>{chosen - 12}:00 PM</span>
                    }
                  </Option>
                );
              })}
            </Modal>
          )}
        </Arrow>
      </Frame>
    );
  }
}

export default FindTableReservationTime;
