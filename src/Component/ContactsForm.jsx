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

        this.setState = ({ [name]: value })
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default ContactsForm;
