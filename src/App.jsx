import React, { Component } from 'react';
import Contacts from './Component/Contacts';

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
        <Contacts contact={contact} key={index} />
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
