import { useState } from "react";
import WorkSpace from "../components/WorkSpace";
import TxtList from "../components/TxtList";
import EditModal from "../components/EditModal";
import PageBtnList from "../components/PageBtnList";

function StepTwo({ selectedImageUrl, onChangePage, nowPage }) {
  const [texts, setTexts] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [modalTxt, setModalTxt] = useState({});

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

  return (
    <div>
      <div className="inner-page-container">
        <h2 className="stage-title title mb-5">
          第二步： <span>添加文字</span>
        </h2>
        <div className="row edit-section-container">
          <div className="col-6">
            <WorkSpace selectedImageUrl={selectedImageUrl} texts={texts} />
          </div>
          <div className="col-6 d-flex flex-column justify-content-between">
            <TxtList
              texts={texts}
              toggleModal={toggleModal}
              onDelete={onDelete}
            />
            <div className="d-flex justify-content-between">
              <PageBtnList
                nowPage={nowPage}
                showNextBtn={selectedImageUrl}
                onChangePage={onChangePage}
              />
              <button
                onClick={() => toggleModal(true)}
                className="btn btn-sm w-50 btn-light text-gray"
              >
                新增
              </button>
            </div>
          </div>
        </div>
      </div>
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
