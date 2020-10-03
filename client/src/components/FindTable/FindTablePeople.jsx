import React, { useState, useEffect } from 'React';
import styled, { css } from 'styled-components';
import icons from '../../icons.jsx';

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
  font-size: 16px;
  border-radius: 5px;
  padding: 5px 60px;
  border: .5px solid rgb(118, 118, 118);
  cursor: pointer;
`;

const ArrowIcon = styled.div`
  position: absolute;
  z-index: 1;
  width: 20px;
  height: 20px;
  transform: translate(104px, -16px) scale(1.5, 1.5);
`;

const PeopleIcon = styled.div`
  position: absolute;
  z-index: 1;
  width: 20px;
  height: 20px;
  transform: translate(-45px, 2px) scale(1.5, 1.5);
`;

const Option = styled.div`
  position: relative;
  font: Arial;
  font-size: 18px;
  padding: 3px 20px;
  cursor: pointer;
  &:hover {
    background: lightgrey;
  }

  ${(props) => props.selected && css`
    background-color: rgba(10,179,201,.1);
    color: #00838f;
  `}

`;

class FindTablePeople extends React.Component {
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
        <Header
          role="button"
          onClick={this.handleOpen}
        >
          <PeopleIcon>
            <svg viewBox='0 0 20 20'>
              <g color="grey" fill="currentcolor">
                <path d={icons.maleIcon} />
              </g>
              <path d={icons.femaleIcon} />
            </svg>
          </PeopleIcon>
          {
            this.state.choice === null ?
            (this.state.number === 1 ?
            <span>{this.state.number} person</span> :
            <span>{this.state.number} people</span>) :
            this.state.number === 1 ?
            <span>{this.state.choice} person</span> :
            <span>{this.state.choice} people</span>
          }
          <ArrowIcon>
            <svg viewBox='0 0 20 20'>
              <path d={icons.arrowIcon} />
            </svg>
          </ArrowIcon>
        </Header>
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
                    <p>{num} person</p> :
                    <p>{num} people</p>
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

export default FindTablePeople;
