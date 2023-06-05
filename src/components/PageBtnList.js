import { useNavigate, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import BrickBtn from "./BrickBtn";

const PageBtnListStyle = (theme) => ({
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    textAlign: "start",
  },
});

function PageBtnList({ showNextBtn }) {
  const pageList = ["/", "/stepOne", "/stepTwo", "/resultPage"];
  const nowPage = useLocation().pathname;
  const navigate = useNavigate();

  const handlePageChange = (action) => {
    const nowPageIndex = pageList.findIndex((page) => page === nowPage);
    let targetPage = "";
    if (action === "goPrev") {
      targetPage = pageList[nowPageIndex - 1];
    } else {
      targetPage = pageList[nowPageIndex + 1];
    }
    navigate(targetPage);
  };

  return (
    <Box sx={PageBtnListStyle}>
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
    </Box>
  );
}

export default PageBtnList;
