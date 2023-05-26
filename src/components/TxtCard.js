import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

function TxtCard({ text, toggleModal, onDelete }) {
  const TxtCardStyle = (theme) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#fff",
    boxShadow: "2px 2px #999, 2px 0px #999",
    padding: ".75rem 1rem",
    marginBottom: "1.5rem",

    [theme.breakpoints.up("md")]: {
      padding: "1rem 1.75rem",
    },
  });
  const IconStyle = (theme) => ({
    fontSize: "1.2rem",
    padding: "0",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.5rem",
      padding: "0 .25rem",
    },
  });
  const CardTextStyle = (theme) => ({
    ...text.styles,
    wordBreak: "break-all",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    maxWidth: "60%",
    [theme.breakpoints.up("md")]: {
      maxWidth: "75%",
    },
  });

  const openModal = () => {
    toggleModal(true, text);
  };
  const handleDelete = () => {
    onDelete(text.id);
  };

  return (
    <Box sx={TxtCardStyle}>
      <Typography sx={CardTextStyle}>{text.content}</Typography>
      <Box sx={{ display: "flex" }}>
        <IconButton size="small" onClick={openModal} title="編輯">
          <EditIcon sx={IconStyle} />
        </IconButton>
        <IconButton size="small" onClick={handleDelete} title="刪除">
          <DeleteIcon sx={IconStyle} />
        </IconButton>
      </Box>
    </Box>
  );
}

export default TxtCard;
