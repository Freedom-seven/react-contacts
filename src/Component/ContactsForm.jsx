import React, { Component } from "react";
import './ContactsForm.css';

class ContactsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phoneNumber: "",
      location: "",
    };
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]:value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addContact(this.state);
    alert("Contact added")
    this.setState({
        name: "",
        phoneNumber: "",
        location: ""
    })
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit} className="contactForm">
            <h1>Create Contact</h1>
            <div>
            <label htmlFor="name">Name: </label>
            <input className="inputField"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
            />
            </div>
            <div>
            <label htmlFor="phoneNumber">Phone Number: </label>
            <input className="inputField"
                type="number"
                name="phoneNumber"
                value={this.state.phoneNumber}
                onChange={this.handleChange}
            />
            </div>
            <div>
            <label htmlFor="locaton">Location: </label>
            <input className="inputField"
                type="text"
                name="location"
                value={this.state.location}
                onChange={this.handleChange}
            />
            </div>
            <div className="sub">
            <button className="submit">Add Contact</button>
            </div>
        </form>
    );
  }
}

export default ContactsForm;
