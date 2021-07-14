import React from 'react';
import Contacts from './Contacts';

const ContactsList = ({contacts, deleteContact}) => {
    const contactsList = contacts.map((contact) => {
        return (
          <Contacts contact={contact} deleteContact={deleteContact} />
        );
      });

    return (
        <div>
            {contactsList}
        </div>
    );
}

export default ContactsList;
