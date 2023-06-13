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

const ImageResultContainerStyle = (theme) => ({
  width: "50%",
  height: "50%",
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.up("md")]: {
    width: "70%",
    height: "70%",
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
        <Box mb={5} sx={ImageResultContainerStyle}>
          <img
            ref={downloadImgRef}
            src={imageResult}
            alt="成品"
            style={{ objectFit: "contain" }}
          ></img>
        </Box>
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
