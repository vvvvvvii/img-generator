function ImageShowBtn({ image, onChangeBackgroundUrl, selectedImageUrl }) {
  const handleClick = (url) => {
    onChangeBackgroundUrl(url);
  };

  return (
    <button
      type="button"
      className="col-3 mb-6 search-result-btn"
      onClick={() => handleClick(image.urls.full)}
    >
      <img
        src={image.urls.full}
        alt={image.alt_description}
        className={`search-result-img ${
          selectedImageUrl === image.urls.full ? "selected-img" : ""
        }`}
      />
    </button>
  );
}

export default ImageShowBtn;
