import { selectedImageReducer } from "./selectedImageReducer";
import { imageResultReduer } from "./imageResultReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  selectedImage: selectedImageReducer,
  imageResult: imageResultReduer,
});

export default allReducers;
