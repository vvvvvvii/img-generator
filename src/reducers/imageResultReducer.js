export const imageResultReduer = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_IMAGE_RESULT":
      return action.payload;
    default:
      return state;
  }
};
