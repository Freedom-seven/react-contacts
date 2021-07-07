import React from 'react';

const Contacts = ({contact, index}) => {
    return (
        <div className="contact" key={index}>
          <h1>Name: {contact.name}</h1>
          <p>Phone Number: {contact.phoneNumber}</p>
          <p>Location: {contact.location}</p>
          <hr />
        </div>
    )
}

export default Contacts;
