import { useEffect, useState } from "react";
import DraggableText from "./DraggableTxt";
import ResizeText from "./ResizeTxt";

function TxtShow({ text, workSpaceRef }) {
  const [mode, setMode] = useState("drag");
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(40);
  const [fontSize, setFontSize] = useState(16);
  const [defaultX, setDefaultX] = useState(0);
  const [defaultY, setDefaultY] = useState(0);
  const [boundingX, setBoundingX] = useState(0);
  const [boundingY, setBoundingY] = useState(0);

  useEffect(() => {
    // 取得 workSpaceRef 和整個網站的空隙
    const parentBounding = workSpaceRef.current.getBoundingClientRect();
    const { x, y } = parentBounding;
    const borderWidth = 3;
    setBoundingX(x + borderWidth);
    setBoundingY(y + borderWidth);
  }, [workSpaceRef]);
  useEffect(() => {
    const updateFontSize = width > height ? width / 5 : height / 4;
    setFontSize(updateFontSize);
  }, [width, height]);

  const onStopDrag = (x, y) => {
    setDefaultX(x - boundingX);
    setDefaultY(y - boundingY);
  };
  const modeChange = (name) => {
    setMode(name);
  };

  return (
    <>
      {mode === "drag" ? (
        <DraggableText
          text={text}
          fontSize={fontSize}
          defaultX={defaultX}
          defaultY={defaultY}
          width={width}
          height={height}
          onStopDrag={onStopDrag}
          modeChange={modeChange}
        />
      ) : (
        <ResizeText
          text={text}
          fontSize={fontSize}
          defaultX={defaultX}
          defaultY={defaultY}
          width={width}
          height={height}
          setWidth={setWidth}
          setHeight={setHeight}
          modeChange={modeChange}
          workSpaceRef={workSpaceRef}
        />
      )}
    </>
  );
}

export default TxtShow;
