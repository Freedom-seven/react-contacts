import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../Reducer/mainReducer"
import firebase from "../firebase/config";
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import thunk from "redux-thunk";



const Store = createStore(reducer, compose(applyMiddleware(thunk.withExtraArgument({
    getFirebase, getFirestore
})),
    reactReduxFirebase(firebase),
    reduxFirestore(firebase)
))

export default Store;