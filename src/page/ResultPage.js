import { useCallback, useRef } from "react";
import { toJpeg, toPng } from "html-to-image";
import download from "downloadjs";
import Radium from "radium";
import BrickBtn from "../components/BrickBtn";
import FullContainer from "../components/FullContainer";
import StageTitle from "../components/StageTitle";

const ResultImgStyle = {
  width: "250px",
  height: "250px",
  marginBottom: "3rem",
  "@media(min-width:576px)": {
    width: "300px",
    height: "300px",
    marginBottom: "1.5rem",
  },
  "@media(min-width:768px)": {
    width: "400px",
    height: "400px",
  },
};

function ResultPage({ imageResult, onChangePage }) {
  const downloadImgRef = useRef();

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
        <img
          src={imageResult}
          style={ResultImgStyle}
          alt="成品圖片"
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
          onClick={() => onChangePage("HomePage")}
        >
          再做一張
        </BrickBtn>
      </div>
    </FullContainer>
  );
}

export default Radium(ResultPage);
