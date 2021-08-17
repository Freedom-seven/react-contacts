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
    
        default:
            return state;
    }
}

export default contactReducer