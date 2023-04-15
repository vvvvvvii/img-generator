import React from "react";

function PageBtnList({ nowPage, showNextBtn, onChangePage }) {
  const pageList = ["HomePage", "StepOne", "StepTwo"];

  const handleChangePage = (action) => {
    const nowPageIndex = pageList.findIndex((page) => page === nowPage);
    let targetPage = "";
    if (action === "goPrev") {
      targetPage = pageList[nowPageIndex - 1];
    } else {
      targetPage = pageList[nowPageIndex + 1];
    }
    onChangePage(targetPage);
  };

  return (
    <div className="d-flex">
      <button
        onClick={() => handleChangePage("goPrev")}
        className="btn btn-sm btn-light ms-3 text-gray"
      >
        上一步
      </button>
      {showNextBtn && (
        <button
          onClick={() => handleChangePage("goNext")}
          className="btn btn-sm btn-light ms-3 text-gray"
        >
          下一步
        </button>
      )}
    </div>
  );
}

export default PageBtnList;
