import React from 'react';

const Contacts = ({contact, index}) => {
    return (
        <div style={{margin: "2rem"}} className="contact" key={index}>
          <h2>Name: {contact.name}</h2>
          <p>Phone Number: {contact.phoneNumber}</p>
          <p>Location: {contact.location}</p>
          <hr />
        </div>
    )
}

export default Contacts;
