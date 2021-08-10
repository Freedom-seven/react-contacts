import React, { Component } from "react";
import ContactsForm from "./Component/ContactsForm";
import "./App.css";
import ContactsList from "./Component/ContactsList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
          name: "Freedom",
          phoneNumber: "0240020202",
          location: "Kasoa",
          id: Math.random().toString()
        },
        {
          name: "Fiona",
          phoneNumber: "0240030303",
          location: "East Legon",
          id: Math.random().toString()
        },
        {
          name: "Patrick",
          phoneNumber: "0240040404",
          location: "Trasacco",
          id: Math.random().toString()
        },
        {
          name: "Sika",
          phoneNumber: "0240050505",
          location: "Obolo Estate",
          id: Math.random().toString()
        },
      ],
    };
  }

  handleAddContact = (newContact) => {
    newContact.id = Math.random().toString();
    this.setState({
      contacts: [...this.state.contacts, newContact],
    });
  };

  handleDeleteContact = (contactId) => {
    const contactSaved = this.state.contacts.filter((contact) => {
      return contact.id !== contactId;
    });
    this.setState({ contacts: contactSaved });
  };

  handleEditContact = (updatedContact) => {
    this.setState({
      contacts: this.state.contacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      ),
    });
  };

  render() {
    return (
      <div className="completeContact">
        <ContactsForm addContact={this.handleAddContact} />
        <ContactsList
          contacts={this.state.contacts}
          deleteContact={this.handleDeleteContact}
          editContact={this.handleEditContact}
        />
      </div>
    );
  }
}

export default App;
