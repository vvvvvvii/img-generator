import { styled } from "@mui/system";
import BrickBtn from "./BrickBtn";

const FancyButtonStyle = styled(BrickBtn)({
  background: "#d959f6",
  color: " #e9f903",
  "&:hover": {
    animation: "changeColor 0.5s infinite, zoom 0.4s infinite",
  },
  "@keyframes changeColor": {
    "0%": {
      background: "#d959f6",
      color: "#e9f903",
    },
    "33%": {
      background: "#ff8e24",
      color: "#59f6cf",
    },
    "66%": {
      background: "#f65959",
      color: "#1cf903",
    },
    "100%": {
      background: "#59aaf6",
      color: "#b70e9d",
    },
  },
  "@keyframes zoom": {
    to: {
      width: "7%",
      height: "7%",
    },
  },
});

function FancyBtn({ children, ...rest }) {
  return <FancyButtonStyle {...rest}>{children}</FancyButtonStyle>;
}

export default FancyBtn;
