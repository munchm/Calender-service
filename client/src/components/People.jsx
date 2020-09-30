import React from 'React';
import styled, { css } from 'styled-components';

const Border = styled.div`
  width: 300px;
  padding: 10px 10px 5px 10px;
  border: 2px solid black;
  box-shadow: 2px 2px 2px #eee;
  align-contents: center;
`;

function People() {
  const numberOfPeople = ['1 Person', '2 Person', '3 Person', '4 Person', '5 Person', '6 Person'];

  return (
    <Border>
      <select>
        {numberOfPeople.map((number) => (
          <option value={number}>{number}</option>
        ))}
      </select>
    </Border>
  );
}

export default People;
