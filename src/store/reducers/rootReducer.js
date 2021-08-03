import contactReducer from "./contactReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import logReducer from "./logReducer";

const rootReducer=combineReducers({
    contact:contactReducer,
    logged:logReducer,
    firestore:firestoreReducer,
})

export default rootReducer