import { createStore, combineReducers } from "redux";
import notesReducers from "./reducers/notesReducers";

const rootReducer = combineReducers({
    notesReducers
})

export const store = createStore(rootReducer)