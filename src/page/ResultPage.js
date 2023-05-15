import { useCallback, useRef } from "react";
import { toJpeg, toPng } from "html-to-image";
import download from "downloadjs";

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
    <div className="home-container">
      <h2 className="stage-title title mb-5">完成！</h2>
      {imageResult && (
        <img
          src={imageResult}
          alt=""
          className="result-img"
          ref={downloadImgRef}
        />
      )}
      <div className="d-flex">
        <button
          type="button"
          className="btn btn-sm btn-warning"
          onClick={() => downloadImg("jpeg")}
        >
          下載 JPEG
        </button>
        <button
          type="button"
          className="btn btn-sm btn-warning ms-3"
          onClick={() => downloadImg("png")}
        >
          下載 PNG
        </button>
        <button
          type="button"
          className="btn btn-sm btn-warning ms-3"
          onClick={() => onChangePage("HomePage")}
        >
          再做一張
        </button>
      </div>
    </div>
  );
}

export default ResultPage;
