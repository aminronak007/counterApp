import changeNumberValue from "./IncrementDecrement";
import changeFontColor from "./FontColor";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeNumberValue,
  changeFontColor,
});

export default rootReducer;
