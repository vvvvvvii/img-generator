import { useState } from "react";
import Typography from "@mui/material/Typography";
import FullContainer from "../components/FullContainer";
import FancyBtn from "../components/FancyBtn";
import InfoToast from "../components/InfoToast";

const welcomeTitleStyle = {
  color: "#d4ce41",
  textShadow: "3px 3px #fa8080, 5px 4px #888",
};

function HomePage({ onChangePage }) {
  const [modalShow, setModalShow] = useState(true);

  const closeModal = () => {
    setModalShow(false);
  };
  const handlePageChange = () => {
    onChangePage("StepOne");
  };

  return (
    <FullContainer>
      {modalShow && <InfoToast closeModal={closeModal} />}
      <Typography
        variant="h2"
        component="h1"
        fontWeight="fontWeightBold"
        mb={6}
        style={welcomeTitleStyle}
      >
        長輩圖生成器
      </Typography>
      <FancyBtn
        size="large"
        title="點擊開始"
        onClick={() => handlePageChange()}
      >
        點擊進入
      </FancyBtn>
    </FullContainer>
  );
}

export default HomePage;
