import { styled } from "@mui/system";
import Button from "@mui/material/Button";

const BtnStyle = styled(Button)((props) => ({
  color: props.variant === "contained" && props.color === "default" && "#333",
  borderRight: "5px solid #555",
  borderBottom: "5.5px solid #666",
  "&:hover": {
    background: props.color === "default" && "#333",
    color: props.color === "default" && "#fff",
    borderTop: "1px solid #fff",
    borderLeft: "1px solid #fff",
    borderRight: "2px solid #777",
    borderBottom: "2.5px solid #888",
  },
}));

function Btn({ children, ...rest }) {
  return <BtnStyle {...rest}>{children}</BtnStyle>;
}

export default Btn;
