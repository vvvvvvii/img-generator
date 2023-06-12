export const changeSelectedImage = (url) => {
  return {
    type: "CHANGE_SELECTED_IMAGE",
    payload: url,
  };
};
