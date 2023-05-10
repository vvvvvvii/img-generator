import { translateText } from "../api";
import { useState, useEffect, useCallback } from "react";

function SearchBar({ setSearchTerm }) {
  const [searchTxt, setSearchTxt] = useState("蓮花");

  const handleSubmit = useCallback(
    async (e) => {
      if (e) {
        e.preventDefault();
      }
      const enSearchText = await translateText(searchTxt);
      setSearchTerm(enSearchText);
    },
    [searchTxt, setSearchTerm]
  );

  useEffect(() => {
    handleSubmit();
  }, [handleSubmit]);

  const handleChange = (e) => {
    setSearchTxt(e.target.value);
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
