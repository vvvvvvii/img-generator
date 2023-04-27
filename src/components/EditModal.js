import React, { useState, useEffect } from "react";

function EditModal({ modalTxt, toggleModal, onSubmit }) {
  const [id, setId] = useState(0);
  const [content, setContent] = useState("");
  const [mainColor, setMainColor] = useState("#ffe5e5");
  const [subColor, setSubColor] = useState("#ff2929");
  const [selectedStyle, setSelectedStyle] = useState("default");
  const txtStyles = [
    {
      name: "default",
      infoTxt: "預設",
      styleObj: {
        color: mainColor,
      },
    },
    {
      name: "styleOption1",
      infoTxt: "邊框",
      styleObj: {
        color: mainColor,
        fontWeight: "bold",
        WebkitTextStroke: `${subColor} 1.5px`,
      },
    },
    {
      name: "styleOption2",
      infoTxt: "陰影",
      styleObj: {
        color: mainColor,
        fontStyle: "italic",
        textShadow: "-2px 1px 1px #777, -2px 2px 2px #888",
      },
    },
    {
      name: "styleOption3",
      infoTxt: "漸層",
      styleObj: {
        color: "transparent",
        backgroundImage: `linear-gradient(180deg, ${mainColor}, ${subColor} 220%)`,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        fontWeight: "bold",
      },
    },
    {
      name: "styleOption4",
      infoTxt: "暈影",
      styleObj: {
        color: mainColor,
        textShadow: `1px 1.5px 10px ${subColor}, -1.5px 1px 10px ${subColor}`,
      },
    },
    {
      name: "styleOption5",
      infoTxt: "浮雕",
      styleObj: {
        color: mainColor,
        textShadow: `-1px -1px 2px ${subColor}, 1px 0px 1px ${subColor}, 0px 1px 2px #888`,
      },
    },
  ];

  useEffect(() => {
    const { id, content, mainColor, subColor, selectedStyle } = modalTxt;
    setId(id || uniqueID());
    setContent(content || "");
    setMainColor(mainColor || "#ffe5e5");
    setSubColor(subColor || "#ff2929");
    setSelectedStyle(selectedStyle || "default");
  }, [modalTxt]);

  const closeModal = () => {
    toggleModal(false);
  };
  const handleTxtChange = (e) => {
    setContent(e.target.value);
  };
  const handleColorChange = (e, type) => {
    if (type === "main") {
      setMainColor(e.target.value);
    } else {
      setSubColor(e.target.value);
    }
  };
  const handleStyleChange = (styleName) => {
    setSelectedStyle(styleName);
  };
  const uniqueID = () => {
    return Math.floor(Math.random() * Date.now());
  };
  const handleSubmit = () => {
    const styles = txtStyles.filter(
      (txtStyle) => txtStyle.name === selectedStyle
    )[0].styleObj;
    const newTxt = {
      id,
      content,
      mainColor,
      subColor,
      styles,
      selectedStyle,
    };
    onSubmit(newTxt);
    closeModal();
  };

  return (
    <div>
      <div className="modal-background" onClick={closeModal}></div>
      <div className="modal-outer">
        <div className="modal-header">
          <h3>編輯文字</h3>
          <button type="button" className="btn btn-sm" onClick={closeModal}>
            X
          </button>
        </div>
        <div className="modal-body">
          <div className="row justify-content-center align-items-center mb-4">
            <input
              type="text"
              placeholder="輸入文字"
              className="input col-6"
              value={content}
              onChange={handleTxtChange}
            />
            <div className="col-3 ms-3">
              <div className="mb-1">
                <label htmlFor="mainColor" className="label">
                  主色
                </label>
                <input
                  type="color"
                  id="mainColor"
                  className="ms-3"
                  value={mainColor}
                  onChange={(e) => handleColorChange(e, "main")}
                />
              </div>
              <div>
                <label htmlFor="subColor" className="label">
                  輔色
                </label>
                <input
                  type="color"
                  id="subColor"
                  className="ms-3"
                  value={subColor}
                  onChange={(e) => handleColorChange(e, "sub")}
                />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center mb-5">
            {txtStyles.map((txtStyle, styleKey) => (
              <button
                type="button"
                className={`btn btn-sm text-center mx-2 p-3 ${
                  selectedStyle === txtStyle.name
                    ? "selected-btn"
                    : "unselected-btn"
                }`}
                key={`style${styleKey}`}
                onClick={() => handleStyleChange(txtStyle.name)}
              >
                <p className="fs-2" style={txtStyle.styleObj}>
                  {content.slice(0, 3) || "早安～"}
                </p>
                {txtStyle.infoTxt}
              </button>
            ))}
          </div>
          <div className="text-center">
            <button
              type="button"
              className={`btn btn-sm w-50 ${
                content.length > 0 ? "" : "btn-disabled"
              }`}
              onClick={content.length > 0 ? handleSubmit : null}
            >
              確定
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
