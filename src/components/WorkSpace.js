import React from "react";

function WorkSpace({ selectedImageUrl }) {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${selectedImageUrl})` }}
        className="image-edit-section"
      ></div>
    </div>
  );
}

export default WorkSpace;
