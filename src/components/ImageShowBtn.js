import { useSelector, useDispatch } from "react-redux";
import { changeSelectedImage } from "../actions";
import Radium from "radium";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";

const ImgStyle = {
  width: "220px",
  height: "220px",
  objectFit: "cover",
  boxSizing: "border-box",
  "@media(min-width:576px)": {
    width: "200px",
    height: "200px",
  },
  "@media(min-width:768px)": {
    width: "150px",
    height: "150px",
  },
  "@media(min-width:992px)": {
    width: "200px",
    height: "200px",
  },
  "@media(min-width:1200px)": {
    width: "280px",
    height: "280px",
  },
};
const SelectedImgStyle = {
  border: "5px solid #fa8080",
};

function ImageShowBtn({ image }) {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const selectedImageUrl = useSelector((state) => state.selectedImage);
  const dispatch = useDispatch();

  const onChangeSelectedImageUrl = (url) => {
    dispatch(changeSelectedImage(url));
  };

  return (
    <Box
      mb={md ? 6 : 2}
      onClick={() => onChangeSelectedImageUrl(image.urls.full)}
    >
      <img
        alt={image.alt_description}
        src={image.urls.small}
        style={[
          ImgStyle,
          selectedImageUrl === image.urls.full ? SelectedImgStyle : null,
        ]}
        effect="blur"
      />
    </Box>
  );
}

export default Radium(ImageShowBtn);
