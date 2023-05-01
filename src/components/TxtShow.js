import Draggable from "react-draggable";
import { useEffect, useRef, useState } from "react";

function TxtShow({ text }) {
  const [mode, setMode] = useState("dragPosition");
  const [resizeFocus, setResizeFocus] = useState(false);
  const [startWidth, setStartWidth] = useState(0);
  const [startHeight, setStartHeight] = useState(0);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [width, setWidth] = useState("auto");
  const [height, setHeight] = useState("auto");
  const sizeRef = useRef();

  useEffect(() => {
    setStartWidth(parseInt(getComputedStyle(sizeRef.current).width, 10));
    setStartHeight(parseInt(getComputedStyle(sizeRef.current).height, 10));
  }, [sizeRef]);
  useEffect(() => {
    setWidth(startWidth);
    setHeight(startHeight);
  }, [startHeight, startWidth]);

  const getRect = (e) => {
    const offsetXPosition = e.nativeEvent.offsetX;
    const offsetYPosition = e.nativeEvent.offsetY;

    const isRightCorner =
      offsetXPosition >= sizeRef.current.offsetWidth - 10 &&
      offsetXPosition <= sizeRef.current.offsetWidth + 10;
    const isBottomCorner =
      offsetYPosition >= sizeRef.current.offsetHeight - 10 &&
      offsetYPosition <= sizeRef.current.offsetHeight + 10;

    if (isRightCorner && isBottomCorner) {
      setMode("editSize");
    } else {
      setMode("dragPosition");
    }
  };
  const onMouseDown = (e) => {
    if (mode === "editSize") {
      setStartX(e.clientX);
      setStartY(e.clientY);
      setResizeFocus(true);
    }
  };
  const onMouseMove = (e) => {
    if (resizeFocus) {
      setWidth(startWidth + e.clientX - startX);
      setHeight(startHeight + e.clientY - startY);
    } else {
      getRect(e);
    }
  };
  const onMouseUp = (e) => {
    setResizeFocus(false);
  };

  return (
    <div onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
      <Draggable
        defaultPosition={{ x: 0, y: 0 }}
        disabled={mode === "editSize"}
      >
        <div
          className={`editTxtSection ${
            mode === "editSize" ? "editFontSize" : ""
          }`}
          style={{
            width: `${width}px`,
            height: `${height}px`,
            fontSize: `${width * 0.25}px`,
          }}
          onMouseMove={onMouseMove}
          ref={sizeRef}
        >
          <p style={text.styles}>{text.content}</p>
        </div>
      </Draggable>
    </div>
  );
}

export default TxtShow;
