export const changeSelectedImage = (url) => {
  return {
    type: "CHANGE_SELECTED_IMAGE",
    payload: url,
  };
};
export const changeImageResult = (url) => {
  return {
    type: "CHANGE_IMAGE_RESULT",
    payload: url,
  };
};
