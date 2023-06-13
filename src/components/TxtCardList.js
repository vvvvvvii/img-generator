import Box from "@mui/material/Box";
import TxtCard from "./TxtCard";

const TxtCardListStyle = (theme) => ({
  overflowY: "scroll",
  maxHeight: "200px",
  marginBottom: "1rem",
  [theme.breakpoints.up("md")]: {
    maxHeight: "300px",
  },
  [theme.breakpoints.up("lg")]: {
    maxHeight: "450px",
  },
});
function TxtCardList({ texts, toggleModal, onDelete }) {
  return (
    <Box sx={TxtCardListStyle}>
      {texts.map((text) => (
        <TxtCard
          key={text.id}
          text={text}
          toggleModal={toggleModal}
          onDelete={onDelete}
        />
      ))}
    </Box>
  );
}

export default TxtCardList;
