import Grid from "@mui/material/Grid";
import ImageShowBtn from "./ImageShowBtn";

function ImageList({ images, onChangeBackgroundUrl, selectedImageUrl }) {
  return (
    <Grid container spacing={2}>
      {images &&
        images.map((image) => (
          <Grid key={image.id} item xs={3}>
            <ImageShowBtn
              image={image}
              onChangeBackgroundUrl={onChangeBackgroundUrl}
              selectedImageUrl={selectedImageUrl}
            />
          </Grid>
        ))}
    </Grid>
  );
}

export default ImageList;
