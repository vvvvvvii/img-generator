import searchImages from "../api";
import { useState } from "react";

function StepOne({ onChangeBackgroundUrl, selectedImageUrl, onChangePage }) {
  const [searchTxt, setSearchTxt] = useState("flowers");
  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    setSearchTxt(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await searchImages(searchTxt);
    setImages(result);
  };
  const handleClick = (url) => {
    onChangeBackgroundUrl(url);
  };

  return (
    <div className="inner-page-container">
      <h2 className="stage-title title mb-3">
        第一步： <span>選擇圖片</span>
      </h2>
      <form onSubmit={handleSubmit} className="d-flex align-center mb-3">
        <input
          type="text"
          placeholder={"輸入關鍵字"}
          value={searchTxt}
          onChange={handleChange}
          className="searchbar"
        />
        <button
          onClick={handleSubmit}
          className="btn btn-sm btn-light ms-3 text-gray"
        >
          搜尋
        </button>
      </form>
      <div className="row">
        {images &&
          images.map((image) => (
            <button
              type="button"
              className="col-3 mb-6 search-result-btn"
              key={image.id}
              onClick={() => handleClick(image.urls.small)}
            >
              <img
                src={image.urls.small}
                alt={image.alt_description}
                className={`search-result-img ${
                  selectedImageUrl === image.urls.small ? "selected-img" : null
                }`}
              />
            </button>
          ))}
      </div>
      <div className="d-flex">
        <button
          onClick={() => onChangePage("HomePage")}
          className="btn btn-sm btn-light ms-3 text-gray"
        >
          上一步
        </button>
        {selectedImageUrl && (
          <button
            onClick={() => onChangePage("StepTwo")}
            className="btn btn-sm btn-light ms-3 text-gray"
          >
            下一步
          </button>
        )}
      </div>
    </div>
  );
}

export default StepOne;
