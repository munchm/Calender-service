import React, { useState, useEffect } from 'React';
import styled, { css } from 'styled-components';

const PeopleBorder = styled.div`
  width: 240px;
  padding: 20px 50px 20px 10px;
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

class People extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 2,
      open: false,
      choice: ''
    };
    this.handleChoice = this.handleChoice.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleOpen() {
    this.setState({
      open: !this.state.open
    })
  }

  handleChoice(number) {
    this.setState({
      choice: number
    })
  }

  render() {
    const selection = [1, 2, 3, 4, 5, 6];
    console.log(this.state)
    return (
      <PeopleBorder>
        <div>

          <Header
            tabIndex={0}
            role="button"
            onClick={this.handleOpen}
          >
            <strong value={this.state.number}> {this.state.number} People</strong>
          </Header>
          <div>
            {this.state.open && (
              <div>

                {selection.map((num, index) => {
                  const chosen = num
                  return (
                    <Option
                      key={index}
                      selected={chosen === this.state.choice}
                      onClick={() => this.handleChoice(chosen)}
                    >
                      {num === 1 ?
                      <strong>{num} Person</strong> :
                      <strong>{num} People</strong>
                      }
                    </Option>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </PeopleBorder>
    );
  }
}

export default People;
