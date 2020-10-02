import React, { useState, useEffect } from 'React';
import styled, { css } from 'styled-components';

const Frame = styled.div`
  width: 200px;
`;

const Border = styled.div`
  font-size: 18px;
  position: absolute;
  width: 195px;
  list-style-type: disc;
  background-color: white;
  box-shadow: 10px 10px 10px 10px #eee;
`;

const Header = styled.div`
  padding: 20px 20px;
  border: .5px solid rgb(118, 118, 118);
  font-family: 'Arial';
  font-size: 18px;
  border-radius: 5px;
`;

const Option = styled.div`
  font-family: 'Arial';
  font-size: 18px;
  padding: 20px 10px 10px 10px;
  display: flex;
  cursor: pointer;
  &:hover {
    background: lightgrey;
  }

  ${(props) => props.selected && css`
    background-color: rgba(10,179,201,.1);
    color: #00838f;
  `}
`;

class ReservationTime extends React.Component {
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
        <div
          tabIndex={0}
          role="button"
          onClick={this.handleOpen}
        >
          <Header>
            {
            this.state.choice === null ?
            (this.state.time <= 12 ?
            <strong>{this.state.time}:00 AM</strong> :
            <strong>{this.state.time - 12}:00 PM</strong>) :
            this.state.choice <= 12 ?
            <strong>{this.state.choice}:00 AM</strong> :
            <strong>{this.state.choice - 12}:00 PM</strong>
            }
          </Header>
        </div>
          {this.state.open && (
            <div
              onClick={this.handleOpen}
            >

              <Border>
                {times.map((time, index) => {
                  const chosen = time
                  return (
                      <Option
                        key={index}
                        selected={chosen === this.state.choice}
                        onClick={() => this.handleChoice(chosen)}
                      >
                        {chosen <= 12 ?
                        <strong>{time}:00 AM</strong> :
                        <strong>{time - 12}:00 PM</strong>
                        }
                      </Option>
                  )
                })}
              </Border>
            </div>
          )}
      </Frame>
    );
  }
}

export default ReservationTime;


