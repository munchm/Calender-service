import React from 'react';
import styled, { css } from 'styled-components';
import Calendar from './Calendar.jsx';
import ReservationTimes from './ReservationTimes.jsx';
import People from './People.jsx';
import FindTable from './FindTable/FindTable.jsx';
import axios from 'axios';

const Border = styled.div`
  width: 425px;
  box-shadow: 10px 10px 10px #eee;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid;
  padding: 24px 24px 24px 24px;
`;

const Header = styled.div`
  display: flex;
  margin-flex-start: 1.33em;
  justify-content: left;
  align-content: center;
  font-size: 20px;
  line-height: 26px;
  font-weight: 700;
  color: black;
  word-break: break-word;
  overflow-wrap: break-word;
  vertical-align: baseline;
`;

const InlineRow = styled.div`
  align-content: center;
  display: inline-flex;
  flex-direction: row;
  padding: 10px 0px;
  gap: 22px
`;

const Row = styled.div`
  padding: 5px 0px;
`;

const Column = styled.div`
  flex: ${(props) => props.size}
`;

const randNum = Math.floor(Math.random() * 100);

class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
      data: '',
      restaurantData: '',
      time: '',
    }
    this.getApiData = this.getApiData.bind(this);
    this.getApiRestaurant = this.getApiRestaurant.bind(this);
  }
  componentDidMount() {
    this.getApiRestaurant(randNum);
  }



  getApiData() {
    axios.get('/api/calendar')
      .then((res) => {
        this.setState({
          data: res.data
        })
      })
      .catch()
  }

  getApiRestaurant(id) {
    axios.get(`/api/calendar/${id}`)
      .then((res) =>
        this.setState({
          restaurantData: res.data
        })
      )
      .catch()
  }

  render () {
    console.log(this.state)
    console.log(randNum)
    return (
      <Border>
        <Header>
          <h2>Make a Reservation</h2>
        </Header>
        <Row>
          <Calendar />
        </Row>
        <InlineRow>
            <ReservationTimes />
            <People />
        </InlineRow>
        <Row>
          <FindTable/>
        </Row>
      </Border>
    );
  }
}

export default Homepage;
