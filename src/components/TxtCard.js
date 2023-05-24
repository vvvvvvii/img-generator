import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function TxtCard({ text, toggleModal, onDelete }) {
  const TxtCardStyle = styled("div")({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#fff",
    boxShadow: "2px 2px #999, 2px 0px #999",
    padding: "1rem 1.75rem",
    marginBottom: "1.5rem",
  });
  const CardTextStyle = {
    ...text.styles,
    wordBreak: "break-all",
    maxWidth: "75%",
  };

  const openModal = () => {
    toggleModal(true, text);
  };
  const handleDelete = () => {
    onDelete(text.id);
  };

  return (
    <TxtCardStyle>
      <Typography style={CardTextStyle}>{text.content}</Typography>
      <div>
        <IconButton size="small" onClick={openModal} title="編輯">
          <EditIcon />
        </IconButton>
        <IconButton
          size="small"
          sx={{ marginLeft: ".75rem" }}
          onClick={handleDelete}
          title="刪除"
        >
          <DeleteIcon />
        </IconButton>
      </div>
    </TxtCardStyle>
  );
}

export default TxtCard;
