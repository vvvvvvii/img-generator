import { selectedImageReducer } from "./selectedImageReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  selectedImage: selectedImageReducer,
});

export default allReducers;
