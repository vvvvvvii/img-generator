import TxtShow from "./TxtShow";

function TxtList({ texts, toggleModal }) {
  return (
    <div className="text-light">
      {texts.map((text) => (
        <TxtShow key={text.id} text={text} toggleModal={toggleModal} />
      ))}
    </div>
  );
}

export default TxtList;
