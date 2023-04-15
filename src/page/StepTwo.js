import { useState } from "react";

function StepTwo({ selectedImageUrl, onChangePage }) {
  return (
    <div className="inner-page-container">
      <h2 className="stage-title title mb-3">
        第二步： <span>添加文字</span>
      </h2>
      <div className="row">
        <div
          style={{ backgroundImage: `url(${selectedImageUrl})` }}
          className="image-edit-section"
        ></div>
      </div>

      {/* <button
        onClick={()=>onChangePage("StepTwo")}
        className="btn btn-sm btn-light ms-3 text-gray"
      >
        下一步
      </button> */}
    </div>
  );
}

export default StepTwo;
