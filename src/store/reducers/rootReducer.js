import contactReducer from "./contactReducer";
import { combineReducers } from "redux";
import logReducer from "./logReducer";
import productReducer from "./productReducer";
import basketReducer from "./basketReducer";

const rootReducer=combineReducers({
    contact:contactReducer,
    logged:logReducer,
    product:productReducer,
    basket:basketReducer,
})

export default rootReducer