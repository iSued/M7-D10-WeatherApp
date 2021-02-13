import { cityReducer } from "./city/reducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  city: cityReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
