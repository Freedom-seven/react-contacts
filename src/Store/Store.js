import { createStore, applyMiddleware, compose } from "redux";
import contactReducer from "../Reducer/ContactReducer";
import firebase from "../firebase/config";
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import thunk from "redux-thunk";



const Store = createStore(contactReducer, compose(applyMiddleware(thunk.withExtraArgument({
    getFirebase, getFirestore
})),
    reactReduxFirebase(firebase),
    reduxFirestore(firebase)
))

export default Store;