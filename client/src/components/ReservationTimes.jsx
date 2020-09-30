import React, { useState, useEffect } from 'React';
import styled, { css } from 'styled-components';

const Border = styled.div`
  width: 300px;
  padding: 10px 10px 5px 10px;
  border: 2px solid black;
  box-shadow: 2px 2px 2px #eee;
  align-contents: center;
`;

function ReservationTimes() {
  const times = ['9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm', '8:00 pm', '9:00 pm'];

  // const [showTime, setShowTime] = useState(false);
  // const toggle = () => setShowTime(!showTime);

  return (
    <Border>
      <select>
        {times.map((time) => (
          <option value={time}>Time</option>
        ))}
      </select>
    </Border>
  );
}

export default ReservationTimes;
