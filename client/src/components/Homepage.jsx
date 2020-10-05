import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Calendar from './Calendar';
import ReservationTimes from './ReservationTimes';
import People from './People';
import FindTable from './FindTable/FindTable';

const HtmlPage = styled.body`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 0;
`;

const Border = styled.div`
  position: fixed;
  width: 425px;
  left: 150px;
  background-color: #fff;
  border-radius: 4px;
  border: 2px solid #eee;
  padding: 24px 24px 24px 24px;
  z-index: 5;
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
  gap: 12px
`;

const randNum = Math.floor(Math.random() * 100);
// restaurantId
// reservationDate
// reservationMonth
// reservationDay
// reservationTimes
// currentYear
// available
// people
// firstName
// lastName
// email
// phoneNumber
// notes
// openingTime
// closingTime

class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
      restaurantData: '',
      modalToggle: false,
    };
    // this.getApiData = this.getApiData.bind(this);
    this.getApiRestaurant = this.getApiRestaurant.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  async componentDidMount() {
    await this.getApiRestaurant(randNum);
  }

  // getApiData() {
  //   axios.get('/api/calendar')
  //     .then((res) => {
  //       this.setState({
  //         data: res.data
  //       });
  //     })
  //     .catch();
  // }

  getApiRestaurant(id) {
    // const response = await axios.get(`/api/calendar/${id}`)
    // this.setState({
    //   restaurantData: response.data[0]
    // })
    axios.get(`/api/calendar/${id}`)
      .then((response) => {
        this.setState({
          restaurantData: response.data[0],
        });
      });
  }

  handleToggle() {
    const { modalToggle } = this.state;
    this.setState({
      modalToggle: !modalToggle,
    });
  }

  render() {
    const { restaurantData } = this.state;
    // console.log(this.state)
    // const { openingTime, closingTime } = this.state.restaurantData;
    // console.log(openingTime)
    return (
      <HtmlPage>
        <Border>
          <Header>
            <h2>Make a Reservation</h2>
          </Header>
          <Calendar />
          <InlineRow>
            <ReservationTimes
              openingTime={restaurantData.openingTime}
              closingTime={restaurantData.closingTime}
            />
            <People />
          </InlineRow>
          {/* <Row> */}
          <FindTable
            handleToggle={this.handleToggle}
          />
          {/* </Row> */}
        </Border>
      </HtmlPage>
    );
  }
}

export default Homepage;
