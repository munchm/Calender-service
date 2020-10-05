/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-nested-ternary */
import React from 'react';
import styled, { css } from 'styled-components';
import icons from '../icons';

const Frame = styled.div`
  width: 200px;
`;

const Border = styled.div`
  font-size: 18px;
  position: absolute;
  width: 190px;
  height: 350px;
  overflow-y: scroll;
  list-style-type: disc;
  background-color: white;
  padding: 5px 5px;
  box-shadow: 10px 10px 10px 10px #eee;
`;

const Header = styled.div`
  padding: 0px 20px;
  border: 2px solid #eee;
  font-family: 'Arial';
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
`;

const Arrow = styled.div`

`;

const HeaderIcon = styled.div`
  position: absolute;
  z-index: 1;
  width: 20px;
  height: 20px;
  cursor: pointer;
  transform: translate(167px, -37px) scale(1.5, 1.5);
`;

const Option = styled.div`
  font-family: 'Arial';
  font-size: 16px;
  padding: 4px 25px;
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

const Filler = styled.div``;

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
    // this.range = this.range.bind(this);
  }

  // async componentDidMount() {
  //   const timeRange = await new Array(
  // this.props.closingTime - this.props.openingTime + 1
  // ).fill().map((_, index) => this.props.openingTime + index);
  //   this.setState({
  //     timeRange: timeRange,
  //     time: timeRange[0],
  //   })
  // }

  handleOpen() {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  }

  handleChoice(time) {
    this.setState({
      choice: time,
    });
  }

  // async range() {
  //   const timeRange = await new Array(
  // this.props.closingTime - this.props.openingTime + 1
  // ).fill().map((_, index) => this.props.openingTime + index);
  //   await console.log(timeRange)
  //   return await timeRange;
  //   this.setState({
  //     time: timeRange
  //   })
  // }

  render() {
    // console.log(this.props)
    const { time, open, choice } = this.state;
    const times = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    // const timeRange = new Array(
    // this.props.closingTime - this.props.openingTime + 1)
    // .fill().map((_, index) => this.props.openingTime + index);
    // console.log(timeRange)
    return (
      <Frame
        onClick={this.handleOpen}
      >
        <Filler
          tabIndex={0}
          role="button"
          onClick={this.handleOpen}
        >
          <Header>
            {
            choice === null
              ? (time <= 12
                ? <p>{time}:00 AM</p>
                : <p>{time - 12}:00 PM</p>)
              : choice <= 12
                ? <p>{choice}:00 AM</p>
                : <p>{choice - 12}:00 PM</p>
            }
          </Header>
          <HeaderIcon>
            <svg viewBox="0 0 20 20">
              <path d={icons.arrowIcon} />
            </svg>
          </HeaderIcon>
        </Filler>
        <Arrow>
          {open && (
            <Border
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
                      ? <p>{time}:00 AM</p>
                      : <p>{time - 12}:00 PM</p>
                    }
                  </Option>
                );
              })}
            </Border>
          )}
        </Arrow>
      </Frame>
    );
  }
}

export default ReservationTime;
