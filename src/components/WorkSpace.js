import TxtShow from "../components/TxtShow";

function WorkSpace({ selectedImageUrl, texts }) {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${selectedImageUrl})` }}
        className="image-edit-section"
      >
        {texts.map((text) => (
          <TxtShow key={text.id} text={text} />
        ))}
      </div>
    </div>
  );
}

export default WorkSpace;
