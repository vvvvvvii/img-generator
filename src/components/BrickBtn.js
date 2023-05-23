import { styled } from "@mui/system";
import Button from "@mui/material/Button";

const BtnStyle = styled(Button)({
  borderRight: "5px solid #555",
  borderBottom: "5.5px solid #666",
  "&:hover": {
    borderRight: "2px solid #777",
    borderBottom: "2.5px solid #888",
  },
});

function Btn({ children, ...rest }) {
  return <BtnStyle {...rest}>{children}</BtnStyle>;
}

export default Btn;
