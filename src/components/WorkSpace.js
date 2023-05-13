import TxtShow from "../components/TxtShow";

function WorkSpace({ selectedImageUrl, texts, workSpaceRef }) {
  return (
    <div
      style={{ backgroundImage: `url(${selectedImageUrl})` }}
      className="image-edit-section"
      ref={workSpaceRef}
    >
      {texts.map((text) => (
        <TxtShow key={text.id} text={text} workSpaceRef={workSpaceRef} />
      ))}
    </div>
  );
}

export default WorkSpace;
