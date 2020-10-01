import React, { useState, useEffect } from 'React';
import styled, { css } from 'styled-components';

const PeopleBorder = styled.div`
  width: 300px;
  padding: 10px 10px 5px 10px;
  border: 2px solid black;
  box-shadow: 2px 2px 2px #eee;
  align-contents: center;
`;
const selection = [1, 2, 3, 4, 5, 6];

class People extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 0,
      toggle: false,
    };
  }

  componentDidMount() {
    this.setState = {
      number: 2,
    };
  }

  render() {
    return (
      <div>

        <div>
          <PeopleBorder>
            <select>
              <option value={1}>1 person</option>
              <option value={2}>2 People</option>
              <option value={2}>3 People</option>
              <option value={2}>4 People</option>
              <option value={2}>5 People</option>
              <option value={2}>6 People</option>
            </select>
          </PeopleBorder>
        </div>
        {}
        <div>
          {Array(selection).map((num, index) => {
            display = num;
            if (display === 1) {
              return (<option>{display} Person</option>);
            } else {
              return (<option>{display} People</option>);
            };
          })}
        </div>
      </div>
    );
  }
}

export default People;
