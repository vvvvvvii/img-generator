import TxtShow from "../components/TxtShow";
import Box from "@mui/material/Box";

const WorkSpaceStyle = {
  position: "relative",
  width: "600px",
  height: "600px",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  overflow: "hidden",
};

function WorkSpace({ selectedImageUrl, texts, workSpaceRef }) {
  return (
    <Box
      style={{ ...WorkSpaceStyle, backgroundImage: `url(${selectedImageUrl})` }}
      ref={workSpaceRef}
    >
      {texts.map((text) => (
        <TxtShow key={text.id} text={text} workSpaceRef={workSpaceRef} />
      ))}
    </Box>
  );
}

export default WorkSpace;
