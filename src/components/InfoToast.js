import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import ClearSharpIcon from "@mui/icons-material/ClearSharp";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { IconButton } from "@mui/material";

const ModalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  padding: "0 1.5rem",
  background: " #f5f5f5",
  borderRadius: "0.5rem",
  textAlign: "center",
};
const CloseIconStyle = {
  position: "absolute",
  top: 0,
  right: 0,
};
const VolumnIconStyle = {
  animation: "volumnAnimation 0.5s infinite",
  "@keyframes volumnAnimation": {
    from: {
      color: "#fbb4b4",
      transform: "scale(1.8)",
    },
    to: {
      color: "#fb5656",
      transform: "scale(2.2)",
    },
  },
};

function SimpleModal({ closeModal }) {
  return (
    <Modal disableAutoFocus open={true} onClose={closeModal}>
      <Box sx={ModalStyle}>
        <IconButton sx={CloseIconStyle} onClick={closeModal}>
          <ClearSharpIcon />
        </IconButton>
        <Box py={6}>
          <Typography variant="h5" component="h2" mb={4}>
            建議開啟聲音以享受最佳體驗
          </Typography>
          <Box>
            <VolumeUpIcon sx={VolumnIconStyle} />
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

export default SimpleModal;
