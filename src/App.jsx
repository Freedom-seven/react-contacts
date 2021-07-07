import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: [
        {
          name: "Freedom",
          phoneNumber: "0240020202",
          location: "Kasoa"
        },
        {
          name: "Fiona",
          phoneNumber: "0240030303",
          location: "East Legon"
        },
        {
          name: "Patrick",
          phoneNumber: "0240040404",
          location: "Trasacco"
        },
        {
          name: "Sika",
          phoneNumber: "0240050505",
          location: "Obolo Estate"
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>Name: Freedom</h1>
        <p>Phone Number: 0240020202</p>
        <p>Location: Kasoa</p>
      </div>
    );
  }
}

export default App;
