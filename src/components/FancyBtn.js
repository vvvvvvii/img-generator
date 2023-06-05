import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import fancyBtnSound from "../assets/fancyBtnSound.mp3";
import Box from "@mui/material/Box";
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
      width: "125px",
      height: "50px",
    },
  },
});
const FancyTransitionOuterStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  overflow: "hidden",
};
const FancyTransitionStyle = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  zIndex: 2,
  transform: "translate(-50%, -50%)",
  borderRadius: "50%",
  animation: "fancyTransition 2s",
  "@keyframes fancyTransition": {
    "0%": { width: "0vw", height: "0vw", background: "#1adcf2" },
    "90%": {
      background: "#d959f6",
    },
    "100%": {
      width: "150vw",
      height: "150vw",
      background: "#222",
    },
  },
});

const audio = new Audio(fancyBtnSound);

function FancyBtn({ children, ...rest }) {
  const [runTransition, setRunTransition] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (runTransition) {
      setTimeout(() => {
        audio.pause();
        navigate("/stepOne");
      }, 2000);
    }
  }, [runTransition, navigate]);

  const playMusic = () => {
    audio.play();
    // loop play
    audio.addEventListener("ended", () => {
      audio.play();
    });
  };
  const stopMusic = () => {
    if (!runTransition) {
      audio.pause();
    }
  };
  const runAnimation = () => {
    setRunTransition(true);
  };

  return (
    <div>
      <FancyButtonStyle
        {...rest}
        onMouseEnter={playMusic}
        onTouchStart={playMusic}
        onMouseLeave={stopMusic}
        onTouchEnd={stopMusic}
        onClick={() => runAnimation()}
      >
        {children}
      </FancyButtonStyle>
      {runTransition && (
        <div style={FancyTransitionOuterStyle}>
          <FancyTransitionStyle />
        </div>
      )}
    </div>
  );
}

export default FancyBtn;
