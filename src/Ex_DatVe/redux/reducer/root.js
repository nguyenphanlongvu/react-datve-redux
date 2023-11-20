import { combineReducers } from "redux";
import { datVeReducer } from "./datVe";

export let rootReducer = combineReducers({
  datVeReducer: datVeReducer,
});
