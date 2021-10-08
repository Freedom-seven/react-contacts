import contactReducer from "./ContactReducer";
import { firebaseReducer } from "react-redux-firebase";
import { combineReducers } from "redux";

export default combineReducers({
    contactsState: contactReducer,
    firebase: firebaseReducer,
});