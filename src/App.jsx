import React, { Component } from 'react';
import ContactsForm from './Component/ContactsForm';
import './App.css';
import ContactsList from './Component/ContactsList';

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
    newContact.id = Math.random().toString();
    this.setState({
      contacts: [...this.state.contacts, newContact]
    })
  };

  handleDeleteContact = (contactId) => {

  }

  render() {
    return (
      <div  className="completeContact" >
        <ContactsForm addContact={this.handleAddContact} />
        <ContactsList contacts={this.state.contacts} deleteContact={this.handleDeleteContact} />

      </div>
    );
  }
}

export default App;
