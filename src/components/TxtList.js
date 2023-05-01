import TxtCard from "./TxtCard";

function TxtList({ texts, toggleModal, onDelete }) {
  return (
    <div className="text-light">
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
