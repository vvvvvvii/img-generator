import { styled } from "@mui/system";
import Draggable from "react-draggable";
import Typography from "@mui/material/Typography";

const TxtStyle = styled("div")({
  position: "absolute",
  top: "0",
  left: "0",
  wordBreak: "break-all",
  padding: "0.25rem",
  minWidth: "100px",
  minHeight: "40px",
  "&:hover": {
    cursor: "move",
    border: "1px solid #000",
    background: "#f5f5f5",
    opacity: "0.7",
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

function DraggableText({
  text,
  fontSize,
  defaultX,
  defaultY,
  width,
  height,
  onStopDrag,
  modeChange,
}) {
  const onStop = (target) => {
    let { x, y } = target.getBoundingClientRect();
    onStopDrag(x, y);
  };
  const onMouseDown = (e) => {
    onStop(e.target.parentNode);
    modeChange("resize");
  };

  return (
    <Draggable
      defaultPosition={{ x: defaultX, y: defaultY }}
      bounds="parent"
      onStop={(e) => onStop(e.target)}
    >
      <TxtStyle style={{ width: `${width}px`, height: `${height}px` }}>
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
export default DraggableText;
