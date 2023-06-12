export const selectedImageReducer = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_SELECTED_IMAGE":
      return action.payload;
    default:
      return state;
  }
};
