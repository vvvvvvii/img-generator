import { searchImages } from "../api";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import ImageList from "../components/ImageList";
import ErrorMsg from "../components/ErrorMsg";
import PageBtnList from "../components/PageBtnList";

function StepOne({
  onChangeBackgroundUrl,
  selectedImageUrl,
  onChangePage,
  nowPage,
}) {
  const [images, setImages] = useState([]);

  const handleSubmit = async (searchTxt) => {
    const result = await searchImages(searchTxt);
    setImages(result);
  };

  return (
    <div className="inner-page-container">
      <h2 className="stage-title title mb-5">
        第一步： <span>選擇圖片</span>
      </h2>
      <SearchBar onSubmit={handleSubmit} />
      {images.length > 0 ? (
        <ImageList
          images={images}
          onChangeBackgroundUrl={onChangeBackgroundUrl}
          selectedImageUrl={selectedImageUrl}
        />
      ) : (
        <ErrorMsg />
      )}
      <PageBtnList
        nowPage={nowPage}
        showNextBtn={selectedImageUrl}
        onChangePage={onChangePage}
      />
    </div>
  );
}

export default StepOne;
