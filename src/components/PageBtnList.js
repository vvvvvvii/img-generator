import BrickBtn from "./BrickBtn";

function PageBtnList({ nowPage, showNextBtn, onChangePage }) {
  const pageList = ["HomePage", "StepOne", "StepTwo", "ResultPage"];

  const handlePageChange = (action) => {
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
      <BrickBtn
        type="button"
        variant="outlined"
        color="default"
        size="large"
        onClick={() => handlePageChange("goPrev")}
      >
        上一步
      </BrickBtn>
      {showNextBtn && (
        <BrickBtn
          type="button"
          variant="contained"
          color="secondary"
          size="large"
          sx={{ marginLeft: ".75rem" }}
          onClick={() => handlePageChange("goNext")}
        >
          下一步
        </BrickBtn>
      )}
    </div>
  );
}

export default PageBtnList;
