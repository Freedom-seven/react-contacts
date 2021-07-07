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
    const contacts = this.state.contacts.map((contact, index) => {
      return (
        <div className="contact" key={index}>
          <h1>Name: {contact.name}</h1>
          <p>Phone Number: {contact.phoneNumber}</p>
          <p>Location: {contact.location}</p>
          <hr />
        </div>
      )
    })
    return (
      <div>
        {contacts}
      </div>
    );
  }
}

export default App;
