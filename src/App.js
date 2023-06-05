import { useEffect, useState } from "react";
import HomePage from "./page/HomePage";
import StepOne from "./page/StepOne";
import StepTwo from "./page/StepTwo";
import ResultPage from "./page/ResultPage";
import { Routes, Route, useNavigate } from "react-router-dom";

const wrapperStyle = {
  background: "#000",
  minHeight: "100vh",
};

function App() {
  const [selectedImageUrl, setSelectedImageUrl] = useState("");
  const [imageResult, setImageResult] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (imageResult) {
      navigate("/resultPage");
    }
  }, [imageResult, navigate]);

  const onChangeBackgroundUrl = (url) => {
    setSelectedImageUrl(url);
  };

  return (
    <div style={wrapperStyle}>
      <Routes>
        <Route element={<HomePage />} path={"/"}></Route>
        <Route
          element={
            <StepOne
              onChangeBackgroundUrl={onChangeBackgroundUrl}
              selectedImageUrl={selectedImageUrl}
            />
          }
          path={"/stepOne"}
        ></Route>
        <Route
          element={
            <StepTwo
              selectedImageUrl={selectedImageUrl}
              imageResult={imageResult}
              setImageResult={setImageResult}
            />
          }
          path={"/stepTwo"}
        ></Route>
        <Route
          element={<ResultPage imageResult={imageResult} />}
          path={"/resultPage"}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
