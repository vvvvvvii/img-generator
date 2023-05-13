import { useEffect, useState } from "react";
import HomePage from "./page/HomePage";
import StepOne from "./page/StepOne";
import StepTwo from "./page/StepTwo";
import ResultPage from "./page/ResultPage";

function App() {
  const [nowPage, setNowPage] = useState("HomePage");
  const [selectedImageUrl, setSelectedImageUrl] = useState("");
  const [imageResult, setImageResult] = useState("");

  useEffect(() => {
    if (imageResult) {
      onChangePage("ResultPage");
    }
  }, [imageResult]);

  const onChangePage = (pageName) => {
    setNowPage(pageName);
  };
  const onChangeBackgroundUrl = (url) => {
    setSelectedImageUrl(url);
  };

  return (
    <div className="wrapper">
      {nowPage === "HomePage" && <HomePage onChangePage={onChangePage} />}
      {nowPage === "StepOne" && (
        <StepOne
          onChangeBackgroundUrl={onChangeBackgroundUrl}
          selectedImageUrl={selectedImageUrl}
          onChangePage={onChangePage}
          nowPage={nowPage}
        />
      )}
      {nowPage === "StepTwo" && (
        <StepTwo
          onChangePage={onChangePage}
          selectedImageUrl={selectedImageUrl}
          imageResult={imageResult}
          setImageResult={setImageResult}
          nowPage={nowPage}
        />
      )}
      {nowPage === "ResultPage" && (
        <ResultPage
          onChangePage={onChangePage}
          imageResult={imageResult}
          nowPage={nowPage}
        />
      )}
    </div>
  );
}

export default App;
