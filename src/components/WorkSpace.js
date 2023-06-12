import { useSelector } from "react-redux";
import TxtShow from "../components/TxtShow";
import Box from "@mui/material/Box";

const WorkSpaceStyle = (theme) => ({
  position: "relative",
  width: "300px",
  height: "300px",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  overflow: "hidden",
  [theme.breakpoints.up("sm")]: {
    width: "400px",
    height: "350px",
    margin: "0 auto",
  },
  [theme.breakpoints.up("md")]: {
    width: "300px",
    height: "450px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "400px",
    height: "600px",
  },
  [theme.breakpoints.up("xl")]: {
    width: "500px",
    height: "600px",
  },
});

function WorkSpace({ texts, toggleModal, workSpaceRef }) {
  const selectedImageUrl = useSelector((state) => state.selectedImage);
  return (
    <Box
      style={{ backgroundImage: `url(${selectedImageUrl})` }}
      sx={WorkSpaceStyle}
      ref={workSpaceRef}
    >
      {texts.map((text) => (
        <TxtShow
          key={text.id}
          text={text}
          toggleModal={toggleModal}
          workSpaceRef={workSpaceRef}
        />
      ))}
    </Box>
  );
}

export default WorkSpace;
