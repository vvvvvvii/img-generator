import { translateText } from "../api";
import { useState, useEffect, useCallback } from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const searchbarStyle = {
  background: "#fefefe1a",
  color: "#fff",
};
const searchbarLabelStyle = {
  color: "#fff",
};

function SearchBar({ setSearchTerm }) {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));
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
    <Box component="form" autoComplete="off" mb={3} onSubmit={handleSubmit}>
      <FormControl fullWidth={!md}>
        <InputLabel htmlFor="component-outlined" style={searchbarLabelStyle}>
          輸入關鍵字
        </InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={searchTxt}
          color="secondary"
          style={searchbarStyle}
          fullWidth={!md}
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleSubmit}
                edge="end"
                color="secondary"
              >
                <SearchOutlinedIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
}

export default SearchBar;
