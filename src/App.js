import { useState, useEffect } from "react";
import HomePage from "./page/HomePage";
import StepOne from "./page/StepOne";
import StepTwo from "./page/StepTwo";

function App() {
  const [nowPage, setNowPage] = useState("HomePage");
  const [selectedImageUrl, setSelectedImageUrl] = useState("");

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
        />
      )}
      {nowPage === "StepTwo" && (
        <StepTwo
          onChangePage={onChangePage}
          selectedImageUrl={selectedImageUrl}
        />
      )}
    </div>
  );
}

export default App;
