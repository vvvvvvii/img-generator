import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import FullContainer from "../components/FullContainer";
import FancyBtn from "../components/FancyBtn";
import InfoToast from "../components/InfoToast";

const welcomeTitleStyle = {
  color: "#d4ce41",
  textShadow: "3px 3px #fa8080, 5px 4px #888",
};
function HomePage() {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const [modalShow, setModalShow] = useState(true);

  const closeModal = () => {
    setModalShow(false);
  };

  return (
    <FullContainer>
      {modalShow && <InfoToast closeModal={closeModal} />}
      <Typography
        variant={md ? "h2" : "h3"}
        component="h1"
        fontWeight="fontWeightBold"
        mb={6}
        style={welcomeTitleStyle}
      >
        長輩圖生成器
      </Typography>
      <FancyBtn size="large" title="點擊開始">
        點擊進入
      </FancyBtn>
    </FullContainer>
  );
}

export default HomePage;
