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
    width: "80%",
    height: "400px",
    margin: "0 auto",
  },
  [theme.breakpoints.up("md")]: {
    width: "100%",
  },
  [theme.breakpoints.up("lg")]: {
    height: "600px",
  },
});

function WorkSpace({ selectedImageUrl, texts, toggleModal, workSpaceRef }) {
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
