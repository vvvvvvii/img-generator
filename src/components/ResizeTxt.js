import { useState, useRef } from "react";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import Draggable from "react-draggable";

const TxtStyle = styled("div")({
  position: "absolute",
  top: "0",
  left: "0",
  wordBreak: "break-all",
  padding: "0.25rem",
  minWidth: "100px",
  minHeight: "40px",
  "&:hover": {
    background: "#fff",
    border: "1px solid #000",
    cursor: "nwse-resize",
  },
});
const ResizeBoxStyle = styled("div")({
  background: "transparent",
  width: "8px",
  height: "8px",
  position: "absolute",
  bottom: "0",
  right: "0",
  "&:hover": {
    background: "#fff",
    border: "1px solid #000",
    cursor: "nwse-resize",
  },
});

function ResizeText({
  text,
  fontSize,
  defaultX,
  defaultY,
  width,
  height,
  setWidth,
  setHeight,
  modeChange,
  workSpaceRef,
}) {
  const [startWidth, setStartWidth] = useState(0);
  const [startHeight, setStartHeight] = useState(0);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const sizeRef = useRef();

  const onMouseDown = (e) => {
    setStartWidth(parseInt(getComputedStyle(sizeRef.current).width, 10));
    setStartHeight(parseInt(getComputedStyle(sizeRef.current).height, 10));
    setStartX(e.clientX);
    setStartY(e.clientY);
    workSpaceRef.current.addEventListener("mousemove", startResize, false);
    workSpaceRef.current.addEventListener("click", stopResize, false);
  };
  const startResize = (e) => {
    const updateWidth = startWidth + e.clientX - startX;
    const updateHeight = startHeight + e.clientY - startY;

    setWidth(updateWidth);
    setHeight(updateHeight);
  };
  const stopResize = () => {
    modeChange("drag");
    workSpaceRef.current.removeEventListener("mousemove", startResize, false);
    workSpaceRef.current.removeEventListener("click", stopResize, false);
  };

  return (
    <Draggable
      defaultPosition={{ x: defaultX, y: defaultY }}
      bounds="parent"
      disabled
    >
      <TxtStyle
        style={{ width: `${width}px`, height: `${height}px` }}
        ref={sizeRef}
        onClick={() => modeChange("drag")}
      >
        <Typography
          style={{
            ...text.styles,
            fontSize: `${fontSize}px`,
          }}
        >
          {text.content}
        </Typography>
        <ResizeBoxStyle onMouseDown={onMouseDown} />
      </TxtStyle>
    </Draggable>
  );
}
export default ResizeText;
