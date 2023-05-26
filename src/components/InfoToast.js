import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import ClearSharpIcon from "@mui/icons-material/ClearSharp";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { IconButton } from "@mui/material";

const ModalStyle = (theme) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  padding: "0 1.5rem",
  background: " #f5f5f5",
  borderRadius: "0.5rem",
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    width: "50%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "35%",
  },
});
const CloseIconStyle = {
  position: "absolute",
  top: 0,
  right: 0,
};
const VolumnIconStyle = (theme) => ({
  animation: "volumnAnimationSm 0.5s infinite",
  "@keyframes volumnAnimationSm": {
    from: {
      color: "#fbb4b4",
      transform: "scale(1.2)",
    },
    to: {
      color: "#fb5656",
      transform: "scale(1.5)",
    },
  },
  [theme.breakpoints.up("md")]: {
    animation: "volumnAnimationMd 0.5s infinite",
    "@keyframes volumnAnimationMd": {
      from: {
        color: "#fbb4b4",
        transform: "scale(1.8)",
      },
      to: {
        color: "#fb5656",
        transform: "scale(2.2)",
      },
    },
  },
});

function InfoToast({ closeModal }) {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Modal disableAutoFocus open={true} onClose={closeModal}>
      <Box sx={ModalStyle}>
        <IconButton sx={CloseIconStyle} onClick={closeModal}>
          <ClearSharpIcon />
        </IconButton>
        <Box py={md ? 6 : 4}>
          <Typography
            variant={md ? "h5" : "body1"}
            component="h2"
            mb={md ? 4 : 2}
          >
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

export default InfoToast;
