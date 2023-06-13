import { useSelector } from "react-redux";
import TxtShow from "../components/TxtShow";
import Box from "@mui/material/Box";

const WorkSpaceStyle = (theme) => ({
  position: "relative",
  width: "100%",
  height: "300px",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  overflow: "hidden",
  [theme.breakpoints.up("sm")]: {
    height: "350px",
    margin: "0 auto",
  },
  [theme.breakpoints.up("md")]: {
    height: "450px",
  },
  [theme.breakpoints.up("lg")]: {
    height: "600px",
  },
  [theme.breakpoints.up("xl")]: {
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
