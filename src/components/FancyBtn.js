import { styled } from "@mui/system";
import Button from "@mui/material/Button";

const FancyButtonStyle = styled(Button)({
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
      top: "-5%",
      left: "-5%",
      width: "110%",
      height: "110%",
    },
  },
});

function FancyBtn({ onChangePage }) {
  const handleClick = () => {
    onChangePage("StepOne");
  };

  return (
    <div>
      <FancyButtonStyle size="large" title="點擊開始" onClick={handleClick}>
        點擊進入
      </FancyButtonStyle>
    </div>
  );
}

export default FancyBtn;
