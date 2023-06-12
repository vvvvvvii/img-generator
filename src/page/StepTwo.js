import { toJpeg } from "html-to-image";
import { useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import BrickBtn from "../components/BrickBtn";
import EditModal from "../components/EditModal";
import InnerPageContainer from "../components/InnerPageContainer";
import PageBtnList from "../components/PageBtnList";
import StageTitle from "../components/StageTitle";
import TxtCardList from "../components/TxtCardList";
import WorkSpace from "../components/WorkSpace";
import clickSound from "../assets/clickSound.mp3";

const audio = new Audio(clickSound);

function StepTwo({ setImageResult }) {
  const [texts, setTexts] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [modalTxt, setModalTxt] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const workSpaceRef = useRef();

  const toggleModal = (showModalBoolean, modalText) => {
    if (showModalBoolean) {
      setModalTxt({ ...modalText });
    } else {
      setModalTxt({});
    }
    setModalShow(showModalBoolean);
  };
  const handleSubmit = (newTxt) => {
    let updateTexts = [];
    const editMode = texts.filter((text) => text.id === newTxt.id).length > 0;

    if (editMode) {
      updateTexts = texts.map((text) => {
        if (text.id === newTxt.id) {
          return newTxt;
        }
        return text;
      });
    } else {
      updateTexts = [...texts, newTxt];
    }

    setTexts(updateTexts);
  };
  const onDelete = (id) => {
    const updateTexts = texts.filter((text) => text.id !== id);
    setTexts(updateTexts);
  };
  const playMusic = () => {
    audio.play();
  };

  const generateImgData = useCallback(() => {
    if (workSpaceRef.current === null) {
      return;
    }
    playMusic();
    setLoading(true);
    toJpeg(workSpaceRef.current, { cacheBust: true })
      .then(async (dataUrl) => {
        const url = await dataUrl;
        setImageResult(url);
        navigate("/resultPage");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [workSpaceRef, setImageResult, navigate]);

  return (
    <div>
      <InnerPageContainer>
        <StageTitle title={"第二步："} subtitle={"添加文字"} />
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <WorkSpace
              texts={texts}
              toggleModal={toggleModal}
              workSpaceRef={workSpaceRef}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <BrickBtn
              type="button"
              variant="contained"
              color="default"
              size="large"
              onClick={() => toggleModal(true)}
              sx={{ marginBottom: "1rem" }}
            >
              新增
            </BrickBtn>
            <TxtCardList
              texts={texts}
              toggleModal={toggleModal}
              onDelete={onDelete}
            />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <PageBtnList showNextBtn={false} />
              <BrickBtn
                type="button"
                variant="contained"
                color="secondary"
                disabled={loading}
                size="large"
                onClick={generateImgData}
                className="btn btn-sm w-50 btn-light text-gray"
              >
                {loading ? "生成中..." : "生成圖片"}
              </BrickBtn>
            </Box>
          </Grid>
        </Grid>
      </InnerPageContainer>
      {modalShow && (
        <EditModal
          modalTxt={modalTxt}
          toggleModal={toggleModal}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default StepTwo;
