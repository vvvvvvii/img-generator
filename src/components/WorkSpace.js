import { useRef } from "react";
import TxtShow from "../components/TxtShow";

function WorkSpace({ selectedImageUrl, texts }) {
  const workSpace = useRef();

  return (
    // <div>
    <div
      style={{ backgroundImage: `url(${selectedImageUrl})` }}
      className="image-edit-section"
      ref={workSpace}
    >
      {texts.map((text) => (
        <TxtShow key={text.id} text={text} workSpaceRef={workSpace} />
      ))}
    </div>
    // </div>
  );
}

export default WorkSpace;
