/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-nested-ternary */
import React from 'react';
import styled, { css } from 'styled-components';
import icons from '../../icons';

const Frame = styled.div`
  width: 200px;
`;

const Border = styled.div`
  box-shadow: 5px 5px 5px 5px #eee;
  position: absolute;
  z-index: 5;
  width: 195px;
  height: 300px;
  padding: 5px 5px;
  overflow-y: scroll;
  list-style-type: disc;
  background-color: white;
`;

const Header = styled.div`
  font-family: 'Arial';
  font-size: 16px;
  border-radius: 5px;
  padding: 5px 60px;
  border: 2px solid #eee;
  cursor: pointer;
  background-color: white;
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
  font-family: 'Arial';
  font-size: 16px;
  padding: 20px 20px;
  cursor: pointer;
  &:hover {
    background: #eee;
  }

  ${(props) => props.selected && css`
    background-color: rgba(10,179,201,.1);
    color: #00838f;
  `}
`;

const Filler = styled.div``;

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
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  }

  handleChoice(number) {
    this.setState({
      choice: number,
    });
  }

  render() {
    const { open, choice, number } = this.state;
    const selection = [1, 2, 3, 4, 5, 6];
    // console.log(choice);
    return (
      <Frame>
        <Header
          role="button"
          onClick={this.handleOpen}
        >
          <PeopleIcon>
            <svg viewBox="0 0 20 20">
              <g color="grey" fill="currentcolor">
                <path d={icons.maleIcon} />
              </g>
              <path d={icons.femaleIcon} />
            </svg>
          </PeopleIcon>
          {
            choice === null
              ? (number === 1
                ? <span>{number} person</span>
                : <span>{number} people</span>)
              : number === 1
                ? <span>{choice} person</span>
                : <span>{choice} people</span>
          }
          <ArrowIcon>
            <svg viewBox="0 0 20 20">
              <path d={icons.arrowIcon} />
            </svg>
          </ArrowIcon>
        </Header>
        <Filler
          onClick={this.handleOpen}
        >
          {open && (
            <Border>
              {selection.map((num, index) => {
                const chosen = num;
                const key = index;
                return (
                  <Option
                    key={key}
                    selected={chosen === choice}
                    onClick={() => this.handleChoice(chosen)}
                  >
                    {
                    num === 1
                      ? <span>{num} person</span>
                      : <span>{num} people</span>
                    }
                  </Option>
                );
              })}
            </Border>
          )}
        </Filler>
      </Frame>
    );
  }
}

export default FindTablePeople;
