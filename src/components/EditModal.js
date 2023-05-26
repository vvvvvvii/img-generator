import { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import ClearSharpIcon from "@mui/icons-material/ClearSharp";
import { IconButton } from "@mui/material";
import BrickBtn from "./BrickBtn";

const ModalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  background: " #f5f5f5",
  borderRadius: "0.5rem",
  textAlign: "center",
};
const ModalHeader = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid #888",
  padding: ".5rem 1rem",
  marginBottom: ".5rem",
  "@media(min-width: 768px)": {
    padding: "1rem 1.5rem",
    marginBottom: "1rem",
  },
});
const ModalBody = styled(Box)({
  padding: "1.5rem 2rem",
  "@media(min-width: 768px)": {
    padding: "2rem 2.5rem",
  },
});
const FormGroupStyle = (theme) => ({
  marginBottom: "1rem",
  [theme.breakpoints.up("md")]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "2rem",
  },
});
const InputStyle = (theme) => ({
  width: "100%",
  marginBottom: "1rem",
  [theme.breakpoints.up("md")]: {
    width: "40%",
    marginBottom: 0,
  },
});
const ColorGroupStyle = (theme) => ({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  marginLeft: "0",
  [theme.breakpoints.up("md")]: {
    flexDirection: "column",
    height: "5rem",
    marginLeft: "1rem",
  },
});
const OptionGroupStyle = (theme) => ({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  marginBottom: "1rem",
  [theme.breakpoints.up("md")]: {
    marginBottom: "3rem",
  },
});
const OptionStyle = (theme) => ({
  padding: "1rem 1.5rem ",
  margin: ".5rem",
  borderRadius: "0.5rem",
  border: "1px solid #999",
  "&:hover": {
    cursor: "pointer",
    border: "1px solid #fa8080",
  },
  [theme.breakpoints.up("sm")]: {
    padding: "1.5rem 2rem",
    margin: ".5rem",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "1.25rem 1rem",
  },
  [theme.breakpoints.up("xl")]: {
    padding: "1.5rem",
  },
});
const SelectedStyle = {
  border: "1px solid #fa8080",
};
const UnselectedStyle = {
  "&:active": {
    boxShadow: "inset 1px 1px 0 .5px #fbb4b4, inset -1px -1px 0 .5px #fbb4b4",
    border: "1px solid #fbb4b4",
  },
};

function EditModal({ modalTxt, toggleModal, onSubmit }) {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));

  const [id, setId] = useState(0);
  const [content, setContent] = useState("");
  const [mainColor, setMainColor] = useState("#ffe5e5");
  const [subColor, setSubColor] = useState("#ff2929");
  const [selectedStyle, setSelectedStyle] = useState("default");
  const txtStyles = [
    {
      name: "default",
      infoTxt: "預設",
      styleObj: {
        color: mainColor,
      },
    },
    {
      name: "styleOption1",
      infoTxt: "邊框",
      styleObj: {
        color: mainColor,
        fontWeight: "bold",
        WebkitTextStroke: `${subColor} 1.5px`,
      },
    },
    {
      name: "styleOption2",
      infoTxt: "陰影",
      styleObj: {
        color: mainColor,
        fontStyle: "italic",
        textShadow: "-2px 1px 1px #777, -2px 2px 2px #888",
      },
    },
    {
      name: "styleOption3",
      infoTxt: "漸層",
      styleObj: {
        color: "transparent",
        backgroundImage: `linear-gradient(180deg, ${mainColor}, ${subColor} 220%)`,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        fontWeight: "bold",
      },
    },
    {
      name: "styleOption4",
      infoTxt: "暈影",
      styleObj: {
        color: mainColor,
        textShadow: `1px 1.5px 10px ${subColor}, -1.5px 1px 10px ${subColor}`,
      },
    },
    {
      name: "styleOption5",
      infoTxt: "浮雕",
      styleObj: {
        color: mainColor,
        textShadow: `-1px -1px 2px ${subColor}, 1px 0px 1px ${subColor}, 0px 1px 2px #888`,
      },
    },
  ];

  useEffect(() => {
    const { id, content, mainColor, subColor, selectedStyle } = modalTxt;
    setId(id || uniqueID());
    setContent(content || "");
    setMainColor(mainColor || "#ffe5e5");
    setSubColor(subColor || "#ff2929");
    setSelectedStyle(selectedStyle || "default");
  }, [modalTxt]);

  const closeModal = () => {
    toggleModal(false);
  };
  const handleTxtChange = (e) => {
    setContent(e.target.value);
  };
  const handleColorChange = (e, type) => {
    if (type === "main") {
      setMainColor(e.target.value);
    } else {
      setSubColor(e.target.value);
    }
  };
  const handleStyleChange = (styleName) => {
    setSelectedStyle(styleName);
  };
  const uniqueID = () => {
    return Math.floor(Math.random() * Date.now());
  };
  const handleSubmit = () => {
    const styles = txtStyles.filter(
      (txtStyle) => txtStyle.name === selectedStyle
    )[0].styleObj;
    const newTxt = {
      id,
      content,
      mainColor,
      subColor,
      styles,
      selectedStyle,
    };
    onSubmit(newTxt);
    closeModal();
  };

  return (
    <Modal disableAutoFocus open={true} onClose={closeModal}>
      <Box sx={ModalStyle}>
        <ModalHeader>
          <Typography variant={md ? "h5" : "body1"} component="h3">
            編輯文字
          </Typography>
          <IconButton onClick={closeModal}>
            <ClearSharpIcon />
          </IconButton>
        </ModalHeader>
        <ModalBody>
          <Box sx={FormGroupStyle}>
            <TextField
              placeholder="輸入文字"
              value={content}
              sx={InputStyle}
              onChange={handleTxtChange}
            />
            <Box sx={ColorGroupStyle}>
              <Box>
                <label htmlFor="mainColor" className="label">
                  主色
                </label>
                <input
                  type="color"
                  id="mainColor"
                  value={mainColor}
                  style={{ marginLeft: ".5rem" }}
                  onChange={(e) => handleColorChange(e, "main")}
                />
              </Box>
              <Box>
                <label htmlFor="subColor" className="label">
                  輔色
                </label>
                <input
                  type="color"
                  id="subColor"
                  value={subColor}
                  style={{ marginLeft: ".5rem" }}
                  onChange={(e) => handleColorChange(e, "sub")}
                />
              </Box>
            </Box>
          </Box>
          <Box sx={OptionGroupStyle}>
            {txtStyles.map((txtStyle, styleKey) => (
              <Box
                sx={[
                  OptionStyle,
                  selectedStyle === txtStyle.name
                    ? SelectedStyle
                    : UnselectedStyle,
                ]}
                key={`style${styleKey}`}
                onClick={() => handleStyleChange(txtStyle.name)}
              >
                <Typography
                  variant={md ? "h5" : "body1"}
                  component="p"
                  style={{ ...txtStyle.styleObj, marginBottom: ".5rem" }}
                >
                  {content.slice(0, 3) || "早安～"}
                </Typography>
                <Typography variant={md ? "body1" : "body2"} component="p">
                  {txtStyle.infoTxt}
                </Typography>
              </Box>
            ))}
          </Box>
          <BrickBtn
            type="button"
            variant="contained"
            color="primary"
            fullWidth
            disabled={content.length === 0}
            onClick={content.length > 0 ? handleSubmit : null}
          >
            確定
          </BrickBtn>
        </ModalBody>
      </Box>
    </Modal>
  );
}

export default EditModal;
