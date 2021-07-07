import React, { Component } from 'react';

class ContactsForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            phoneNumber: "",
            location: ""
        }
    }

    handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState = ({ [name]: value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="contactForm">
                <div><label htmlFor="name">Name: </label><input type="text" name="name" value={this.state.name} onChange={this.handleChange} /></div>
                <div><label htmlFor="phoneNumber">Phone Number: </label><input type="number" name="phonenumber" value={this.state.phoneNumber} onChange={this.handleChange} /></div>
                <div><label htmlFor="locaton">Location: </label><input type="text" name="location" value={this.state.location} onChange={this.handleChange} /></div>
            </form>
        );
    }
}

export default ContactsForm;
