import { createStore } from "redux";
import contactReducer from "../Reducer/ContactReducer";

const Store = createStore(contactReducer)

export default Store