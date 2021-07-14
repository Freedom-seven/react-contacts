import React from 'react';


const Contacts = ({contact, deleteContact}) => {
  const handleDelete = (e) => {
    deleteContact(contact.id);
  }
    return (
        <div style={{margin: "2rem"}} className="contact">
          <h3>Name: {contact.name}</h3>
          <p>Phone Number: {contact.phoneNumber}</p>
          <p>Location: {contact.location}</p>
          <div>
            <button className="btn btn-success edit">Edit</button>
            <button className="btn btn-danger delete" onClick={handleDelete}>Delete</button>
            </div>
          <hr />
        </div>
    )
}

export default Contacts;
