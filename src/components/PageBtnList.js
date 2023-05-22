import Button from "@mui/material/Button";

function PageBtnList({ nowPage, showNextBtn, onChangePage }) {
  const pageList = ["HomePage", "StepOne", "StepTwo", "ResultPage"];

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
      <Button
        type="button"
        variant="outlined"
        size="large"
        onClick={() => handleChangePage("goPrev")}
        className="btn btn-sm btn-light text-gray"
      >
        上一步
      </Button>
      {showNextBtn && (
        <Button
          type="button"
          variant="contained"
          size="large"
          sx={{ marginLeft: ".75rem" }}
          onClick={() => handleChangePage("goNext")}
          className="btn btn-sm btn-light ms-3 text-gray"
        >
          下一步
        </Button>
      )}
    </div>
  );
}

export default PageBtnList;
