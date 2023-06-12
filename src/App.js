import { useState } from "react";
import HomePage from "./page/HomePage";
import StepOne from "./page/StepOne";
import StepTwo from "./page/StepTwo";
import ResultPage from "./page/ResultPage";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";

const wrapperStyle = {
  background: "#000",
  minHeight: "100vh",
};

function App() {
  const [imageResult, setImageResult] = useState("");

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div style={wrapperStyle}>
          <Routes>
            <Route element={<HomePage />} path={"/"}></Route>
            <Route element={<StepOne />} path={"/stepOne"}></Route>
            <Route
              element={
                <StepTwo
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
      </PersistGate>
    </Provider>
  );
}

export default App;
