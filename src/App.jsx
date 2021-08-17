import React, { Component } from "react";
import ContactsForm from "./Component/ContactsForm";
import "./App.css";
import ContactsList from "./Component/ContactsList";

class App extends Component {

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
        <ContactsList />
      </div>
    );
  }
}

export default App;
