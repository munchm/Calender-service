import React, { useState, useEffect } from 'React';
import styled, { css } from 'styled-components';
import icons from '../icons.jsx';

const Frame = styled.div`
  width: 200px;
`;

const Border = styled.div`
  box-shadow: 10px 10px 10px 10px #eee;
  position: absolute;
  width: 195px;
  list-style-type: disc;
  background-color: white;
`;

const Header = styled.div`
  font-family: 'Arial';
  font-size: 18px;
  border-radius: 5px;
  border: .5px solid rgb(118, 118, 118);
  padding: 19px 20px;
`;

const Icon = styled.div`
  justify-content: right;
`;

const Option = styled.div`
  position: relative;
  font: Arial;
  font-size: 18px;
  padding: 20px 10px 20px 20px;
  cursor: pointer;
  &:hover {
    background: lightgrey;
  }

  ${(props) => props.selected && css`
    background-color: rgba(10,179,201,.1);
    color: #00838f;
  `}

`;

class People extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 2,
      open: false,
      choice: null,
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
    console.log(this.state.choice)
    return (
      <Frame>
        <div
          tabIndex={0}
          role="button"
          onClick={this.handleOpen}
        >
          <Header>
            {
              this.state.choice === null ?
              (this.state.number === 1 ?
              <strong>{this.state.number} person</strong> :
              <strong>{this.state.number} people</strong>) :
              this.state.number === 1 ?
              <strong>{this.state.choice} person</strong> :
              <strong>{this.state.choice} people</strong>
            }
          </Header>
        </div>
        <div
          onClick={this.handleOpen}
          >
          {this.state.open && (
            <Border>
              {selection.map((num, index) => {
                const chosen = num
                return (
                  <Option
                    key={index}
                    selected={chosen === this.state.choice}
                    onClick={() => this.handleChoice(chosen)}
                  >
                    {num === 1 ?
                    <strong>{num} person</strong> :
                    <strong>{num} people</strong>
                    }
                  </Option>
                )
              })}
            </Border>
          )}
        </div>
      </Frame>
    );
  }
}

export default People;
