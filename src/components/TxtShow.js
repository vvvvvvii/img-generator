import React from "react";

function TxtShow({ text, toggleModal, onDelete }) {
  const openModal = () => {
    toggleModal(true, text);
  };
  const handleDelete = () => {
    onDelete(text.id);
  };

  return (
    <div className="card">
      <div style={text.styles}>{text.content}</div>
      <div>
        <button
          type="button"
          className="btn btn-sm btn-light text-gray"
          onClick={openModal}
          title="編輯"
        >
          <i class="bi bi-pencil-square"></i>
        </button>
        <button
          type="button"
          className="btn btn-sm btn-light text-gray ms-2"
          onClick={handleDelete}
          title="刪除"
        >
          <i class="bi bi-trash3-fill"></i>
        </button>
      </div>
    </div>
  );
}

export default TxtShow;
