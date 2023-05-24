import TxtCard from "./TxtCard";

const TxtCardListStyle = {
  overflowY: "scroll",
  height: "450px",
  marginBottom: "1rem",
};
function TxtCardList({ texts, toggleModal, onDelete }) {
  return (
    <div style={TxtCardListStyle}>
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

export default TxtCardList;
