import { translateText } from "../api";
import { useState, useEffect } from "react";

function SearchBar({ onSubmit }) {
  const [searchTxt, setSearchTxt] = useState("lotus");

  useEffect(() => {
    handleSubmit();
  }, []);

  const handleChange = (e) => {
    setSearchTxt(e.target.value);
  };
  const handleSubmit = async (e) => {
    if (e) {
      e.preventDefault();
    }
    const enSearchText = await translateText(searchTxt);
    onSubmit(enSearchText);
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex align-center mb-5">
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
  );
}

export default SearchBar;
