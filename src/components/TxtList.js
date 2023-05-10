import TxtCard from "./TxtCard";

function TxtList({ texts, toggleModal, onDelete }) {
  return (
    <div className="txt-list">
      {texts.map((text) => (
        <TxtCard
          key={text.id}
          text={text}
          toggleModal={toggleModal}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TxtList;
