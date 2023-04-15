import ImageShowBtn from "./ImageShowBtn";

function ImageList({ images, onChangeBackgroundUrl, selectedImageUrl }) {
  return (
    <div className="row">
      {images &&
        images.map((image) => (
          <ImageShowBtn
            image={image}
            key={image.id}
            onChangeBackgroundUrl={onChangeBackgroundUrl}
            selectedImageUrl={selectedImageUrl}
          />
        ))}
    </div>
  );
}

export default ImageList;
