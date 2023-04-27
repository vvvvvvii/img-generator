import { useState } from "react";
import WorkSpace from "../components/WorkSpace";
import TxtList from "../components/TxtList";
import EditModal from "../components/EditModal";

function StepTwo({ selectedImageUrl, onChangePage }) {
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
        <div className="row">
          <div className="col-6">
            <WorkSpace selectedImageUrl={selectedImageUrl} />
          </div>
          <div className="col-6">
            <TxtList
              texts={texts}
              toggleModal={toggleModal}
              onDelete={onDelete}
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
