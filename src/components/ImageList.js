import Grid from "@mui/material/Grid";
import ImageShowBtn from "./ImageShowBtn";

function ImageList({ images, onChangeBackgroundUrl, selectedImageUrl }) {
  return (
    <Grid container spacing={2}>
      {images &&
        images.map((image) => (
          <Grid item xs={3}>
            <ImageShowBtn
              key={image.id}
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
