import TxtShow from "./TxtShow";

function TxtList({ texts, toggleModal, onDelete }) {
  return (
    <div className="text-light">
      {texts.map((text) => (
        <TxtShow
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
