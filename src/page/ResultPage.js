import { useCallback, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toJpeg, toPng } from "html-to-image";
import download from "downloadjs";
import Radium from "radium";
import Box from "@mui/material/Box";
import BrickBtn from "../components/BrickBtn";
import FullContainer from "../components/FullContainer";
import StageTitle from "../components/StageTitle";

const ResultImgStyle = (theme) => ({
  width: "300px",
  height: "300px",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  overflow: "hidden",
  [theme.breakpoints.up("sm")]: {
    width: "400px",
    height: "350px",
    margin: "0 auto",
  },
  [theme.breakpoints.up("md")]: {
    width: "300px",
    height: "450px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "400px",
    height: "600px",
  },
  [theme.breakpoints.up("xl")]: {
    width: "500px",
    height: "600px",
  },
});

function ResultPage() {
  const downloadImgRef = useRef();
  const navigate = useNavigate();
  const imageResult = useSelector((state) => state.imageResult);

  const downloadImg = useCallback((fileType) => {
    if (downloadImgRef.current === null) {
      return;
    }
    if (fileType === "jpeg") {
      toJpeg(downloadImgRef.current, { cacheBust: true })
        .then(async (dataUrl) => {
          let link = document.createElement("a");
          link.download = "長輩圖.jpeg";
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toPng(downloadImgRef.current, { cacheBust: true })
        .then(async (dataUrl) => {
          download(dataUrl, "長輩圖.png");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <FullContainer>
      <StageTitle title={"完成！"} mb={5}></StageTitle>
      {imageResult && (
        <Box
          style={{ backgroundImage: `url(${imageResult})` }}
          sx={ResultImgStyle}
          ref={downloadImgRef}
        />
      )}
      <div className="d-flex">
        <BrickBtn
          type="button"
          color="default"
          variant="contained"
          onClick={() => downloadImg("jpeg")}
        >
          下載 JPEG
        </BrickBtn>
        <BrickBtn
          type="button"
          color="default"
          variant="contained"
          sx={{ marginLeft: "0.75rem" }}
          onClick={() => downloadImg("png")}
        >
          下載 PNG
        </BrickBtn>
        <BrickBtn
          type="button"
          color="default"
          variant="contained"
          sx={{ marginLeft: "0.75rem" }}
          onClick={() => navigate("/")}
        >
          再做一張
        </BrickBtn>
      </div>
    </FullContainer>
  );
}

export default Radium(ResultPage);
