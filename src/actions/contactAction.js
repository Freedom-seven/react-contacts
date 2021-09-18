import { getFirestore } from "redux-firestore";

export const addContact = (contact) => {
  contact.id = Math.random().toString();

  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("contacts")
      .add(contact)
      .then((docs) => {
        console.log(docs);
      });
  };

  //return {
  //   type: "ADD_CONTACT",
  //  payload: contact
  //}
};

export const editContact = (updatedContact) => {
  return {
    type: "EDIT_CONTACT",
    payload: updatedContact,
  };
};

export const deleteContact = (contact_id) => {
  return {
    type: "DELETE_CONTACT",
    payload: contact_id,
  };
};
