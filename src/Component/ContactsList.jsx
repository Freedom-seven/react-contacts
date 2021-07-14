import React from 'react';
import Contacts from './Contacts';

const ContactsList = ({contacts}) => {
    const contactsList = contacts.map((contact) => {
        return (
          <Contacts contact={contact} />
        );
      });

    return (
        <div>
            {contactsList}
        </div>
    );
}

export default ContactsList;
