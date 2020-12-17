import React, { Component, Fragment } from "react";
import "./styles.css";
import { Button, Card, Container } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
      placePhoto: "",
      placeName: "",
      placeDescription: ""
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  };

  initialCall = (event) => {
    const api_key = "AIzaSyCerLv22L5YALE4WJYaoRD1d7_T1zQ5Q0E";
    const url = 
  };

  render() {
    return (
      <Fragment>
        <div className="places">
          {places.map((place) => (
            <Container className="container">
              <Card border="red" className="card"></Card>
            </Container>
          ))}
        </div>
      </Fragment>
    );
  }
}

export default App;
