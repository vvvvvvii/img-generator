import { useEffect } from "react";
import { styled } from "@mui/system";
import sound from "../assets/sound.mp3";
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
      width: "100px",
      height: "50px",
    },
  },
});

const audio = new Audio(sound);

function FancyBtn({ children, ...rest }) {
  useEffect(() => {
    return () => {
      stopMusic();
    };
  }, []);
  const playMusic = () => {
    audio.play();
    // loop play
    audio.addEventListener("ended", () => {
      audio.play();
    });
  };
  const stopMusic = () => {
    audio.pause();
  };

  return (
    <div>
      <FancyButtonStyle
        {...rest}
        onMouseEnter={playMusic}
        onMouseLeave={stopMusic}
      >
        {children}
      </FancyButtonStyle>
    </div>
  );
}

export default FancyBtn;
