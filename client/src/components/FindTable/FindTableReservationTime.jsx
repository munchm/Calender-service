import React, { useState, useEffect } from 'React';
import styled, { css } from 'styled-components';
import icons from '../../icons.jsx';

const Frame = styled.div`
  width: 200px;
`;

const Border = styled.div`
`;

const Modal = styled.div`
  font-size: 18px;
  position: absolute;
  width: 190px;
  height: 300px;
  overflow-y: scroll;
  list-style-type: disc;
  background-color: white;
  padding: 5px 5px;
  box-shadow: 5px 5px 5px 5px #eee;
`;

const Header = styled.div`
  padding: 5px 40px;
  border: 2px solid #eee;
  font-family: 'Arial';
  font-size: 16px;
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
`;

const Arrow = styled.div`

`;

const ArrowBorder = styled.div`
  box-shadow: 0px 0px 20px 0px #eee;
  vertical-align: center;
  height: 30px;
  width: 200px;
  position: absolute;
  z-index: 1;
  background-color: white;
  transform: rotate(-180deg) scale(.4, .4) translate(0px, 0px);
`;

const ArrowIcon = styled.div`
  position: absolute;
  z-index: 1;
  width: 20px;
  height: 20px;
  cursor: pointer;
  transform: translate(170px, -22px) scale(1.5, 1.5);
`

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
    this.setState({
      open: !this.state.open
    })
  }

  handleChoice(time) {
    this.setState({
      choice: time
    })
  }


  render() {
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
            {
            this.state.choice === null ?
            (this.state.time <= 12 ?
            <span>{this.state.time}:00 AM</span> :
            <span>{this.state.time - 12}:00 PM</span>) :
            this.state.choice <= 12 ?
            <span>{this.state.choice}:00 AM</span> :
            <span>{this.state.choice - 12}:00 PM</span>
            }
          </Header>
          <ArrowIcon>
            <svg viewBox="0 0 20 20">
              <path d={icons.arrowIcon} />
            </svg>
          </ArrowIcon>
        </Border>
        <Arrow>
          {this.state.open && (
            <Modal
              onClick={this.handleOpen}
            >
              {times.map((time, index) => {
                const chosen = time
                return (
                  <Option
                    key={index}
                    selected={chosen === this.state.choice}
                    onClick={() => this.handleChoice(chosen)}
                  >
                    {chosen <= 12 ?
                    <span>{time}:00 AM</span> :
                    <span>{time - 12}:00 PM</span>
                    }
                  </Option>
                )
              })}
            </Modal>
          )}
        </Arrow>
      </Frame>
    );
  }
}

export default FindTableReservationTime;


