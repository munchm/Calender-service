import React, { useState, useEffect } from 'React';
import styled, { css } from 'styled-components';
import icons from '../icons.jsx';

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

const HeaderIcon = styled.div`
  position: absolute;
  z-index: 1;
  width: 20px;
  height: 20px;
  cursor: pointer;
  transform: translate(167px, -37px) scale(1.5, 1.5);
`

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

class ReservationTime extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 9,
      timeRange: [],
      choice: null,
      open: false,
    };
    this.handleChoice = this.handleChoice.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    // this.range = this.range.bind(this);
  }

  // async componentDidMount() {
  //   const timeRange = await new Array(this.props.closingTime - this.props.openingTime + 1).fill().map((_, index) => this.props.openingTime + index);
  //   this.setState({
  //     timeRange: timeRange,
  //     time: timeRange[0],
  //   })
  // }

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

  // async range() {
  //   const timeRange = await new Array(this.props.closingTime - this.props.openingTime + 1).fill().map((_, index) => this.props.openingTime + index);
  //   await console.log(timeRange)
  //   return await timeRange;
  //   this.setState({
  //     time: timeRange
  //   })
  // }

  render() {
    // console.log(this.props)
    const times = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    // const timeRange = new Array(this.props.closingTime - this.props.openingTime + 1).fill().map((_, index) => this.props.openingTime + index);
    // console.log(timeRange)
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
            <p>{this.state.time}:00 AM</p> :
            <p>{this.state.time - 12}:00 PM</p>) :
            this.state.choice <= 12 ?
            <p>{this.state.choice}:00 AM</p> :
            <p>{this.state.choice - 12}:00 PM</p>
            }
          </Header>
          <HeaderIcon>
            <svg viewBox="0 0 20 20">
              <path d={icons.arrowIcon} />
            </svg>
          </HeaderIcon>
        </div>
        <Arrow>
          {this.state.open && (
            <Border
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
                    <p>{time}:00 AM</p> :
                    <p>{time - 12}:00 PM</p>
                    }
                  </Option>
                )
              })}
            </Border>
          )}
        </Arrow>
      </Frame>
    );
  }
}

export default ReservationTime;


