import React from 'react';
import {connect} from 'react-redux';
import Contacts from './Contacts';

const ContactsList = ({contacts, deleteContact, editContact}) => {
    const contactsList = contacts.map((contact) => {
        return (
          <Contacts contact={contact} deleteContact={deleteContact} editContact={editContact} />
        );
      });

    return (
        <div>
            {contactsList}
        </div>
    );
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contactsState.contacts,
  }
}

export default connect(mapStateToProps) (ContactsList);
