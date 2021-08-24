const initialState = {
    contacts: [
        {
          name: "Freedom",
          phoneNumber: "0240020202",
          location: "Kasoa",
          id: Math.random().toString()
        },
        {
          name: "Fiona",
          phoneNumber: "0240030303",
          location: "East Legon",
          id: Math.random().toString()
        },
        {
          name: "Patrick",
          phoneNumber: "0240040404",
          location: "Trasacco",
          id: Math.random().toString()
        },
        {
          name: "Sika",
          phoneNumber: "0240050505",
          location: "Obolo Estate",
          id: Math.random().toString()
        },
      ]
}

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CONTACT":
            return { ...state.contacts, contacts: [...state.contacts, action.payload] };

        case "EDIT_CONTACT":
         const newContacts = state.contacts.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      )

        return {...state, contacts: newContacts};

      case "DELETE_CONTACT":
        const contactSaved = state.contacts.filter((contact) => {
          return contact.id !== action.payload;
        }); 
        return {...state, contacts: contactSaved};
        default:
            return state;
    }
}

export default contactReducer