import Draggable from "react-draggable";
import { useState, useRef } from "react";

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
      <div
        className="edit-txt-section resize-txt-section"
        style={{ width: `${width}px`, height: `${height}px` }}
        ref={sizeRef}
        onClick={() => modeChange("drag")}
      >
        <p
          style={{
            ...text.styles,
            fontSize: `${fontSize}px`,
          }}
        >
          {text.content}
        </p>
        <div className="resize-box" onMouseDown={onMouseDown}></div>
      </div>
    </Draggable>
  );
}
export default ResizeText;
