import { LazyLoadImage } from "react-lazy-load-image-component";
import Button from "@mui/material/Button";

const imageStyle = {
  width: "300px",
  height: "300px",
  objectFit: "cover",
  boxSizing: "border-box",
};
const selectedImageStyle = {
  border: "5px solid #fa8080",
};

function ImageShowBtn({ image, onChangeBackgroundUrl, selectedImageUrl }) {
  const handleClick = (url) => {
    onChangeBackgroundUrl(url);
  };

  return (
    <Button type="button" mb={6} onClick={() => handleClick(image.urls.full)}>
      <LazyLoadImage
        alt={image.alt_description}
        src={image.urls.small}
        style={
          selectedImageUrl === image.urls.full
            ? { ...imageStyle, ...selectedImageStyle }
            : imageStyle
        }
        effect="blur"
      />
    </Button>
  );
}

export default ImageShowBtn;
