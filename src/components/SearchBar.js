import { useState, useEffect } from "react";

function SearchBar({ onSubmit }) {
  const [searchTxt, setSearchTxt] = useState("蓮花");

  useEffect(() => {
    handleSubmit();
  }, []);

  const handleChange = (e) => {
    setSearchTxt(e.target.value);
  };
  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
    onSubmit(searchTxt);
  };

  return (
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
  );
}

export default SearchBar;
