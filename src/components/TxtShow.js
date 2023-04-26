import React from "react";

function TxtShow({ text, toggleModal }) {
  const openModal = () => {
    toggleModal(true, text);
  };
  return (
    <div className="card">
      <div style={text.styles}>{text.content}</div>
      <div>
        <button type="button" onClick={openModal}>
          編輯
        </button>
        <button type="button">刪除</button>
      </div>
    </div>
  );
}

export default TxtShow;
