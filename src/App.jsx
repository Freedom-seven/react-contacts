import React, { Component } from 'react';
import Contacts from './Component/Contacts';
import ContactsForm from './Component/ContactsForm';
import './App.css';

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

  handleAddContact = (newContact) => {
    this.setState({
      contacts: [...this.state.contacts, newContact]
    })
  }

  render() {
    const contacts = this.state.contacts.map((contact, index) => {
      return (
        <Contacts contact={contact} key={index} />
      )
    })
    return (
      <div  className="completeContact" >
        <ContactsForm addContact={this.handleAddContact} />
        {contacts}

      </div>
    );
  }
}

export default App;
