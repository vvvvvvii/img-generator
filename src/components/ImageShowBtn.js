import { LazyLoadImage } from "react-lazy-load-image-component";

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
      <LazyLoadImage
        alt={image.alt_description}
        src={image.urls.small}
        className={`search-result-img ${
          selectedImageUrl === image.urls.full ? "selected-img" : ""
        }`}
        effect="blur"
      />
    </button>
  );
}

export default ImageShowBtn;
