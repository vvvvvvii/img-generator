import { searchImages } from "../api";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InnerPageContainer from "../components/InnerPageContainer";
import StageTitle from "../components/StageTitle";
import SearchBar from "../components/SearchBar";
import ErrorMsg from "../components/ErrorMsg";
import ImageList from "../components/ImageList";
import PageBtnList from "../components/PageBtnList";

function StepOne({ onChangeBackgroundUrl, selectedImageUrl }) {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const updateImages = await searchImages(searchTerm);
      setImages(updateImages);
    };
    fetchData();
  }, [searchTerm]);

  return (
    <InnerPageContainer>
      <StageTitle title={"第一步："} subtitle={"選擇圖片"} />
      <SearchBar setSearchTerm={setSearchTerm} />
      <Box mb={3}>
        {images.length > 0 ? (
          <ImageList
            images={images}
            onChangeBackgroundUrl={onChangeBackgroundUrl}
            selectedImageUrl={selectedImageUrl}
          />
        ) : (
          <ErrorMsg />
        )}
      </Box>
      <PageBtnList showNextBtn={selectedImageUrl} />
    </InnerPageContainer>
  );
}

export default StepOne;
