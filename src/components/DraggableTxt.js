import Draggable from "react-draggable";

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
      <div
        className="edit-txt-section drag-txt-section"
        style={{ width: `${width}px`, height: `${height}px` }}
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
export default DraggableText;
