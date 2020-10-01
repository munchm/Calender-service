import React, { useState, useEffect } from 'React';
import styled, { css } from 'styled-components';

const Border = styled.div`
  width: 225px;
  padding: 20px 45px 20px 10px;
  border: 2px solid black;
  align-contents: center;
`;

const Header = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 20px 10px 5px 10px;
  display: flex;
`;

const Option = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 10px 5px 10px;
  display: flex;
  cursor: pointer;
  &:hover {
    background: lightgrey;
  }

  ${(props) => props.selected && css`
    background-color: #00FFFF;
    color: white;
  `}
`;

class ReservationTime extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 9,
      choice: '',
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
      <Border>
        <div>

          <Header
            tabIndex={0}
            role="button"
            onClick={this.handleOpen}
          >
            <strong value={this.state.time}> {this.state.time} PM</strong>
          </Header>
          <div>
            {this.state.open && (
              <div>

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
              </div>
            )}
          </div>
        </div>
      </Border>
    );
  }
}

export default ReservationTime;


