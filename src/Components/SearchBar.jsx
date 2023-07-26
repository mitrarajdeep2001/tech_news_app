import { TextField, styled } from "@mui/material";
import React from "react";
import { useGlobalData } from "../Context/AppContext";

const StyledTextField = styled(TextField)(({ theme }) => ({
  width: "90%",
  [theme.breakpoints.up("sm")]: {
    width: "60%",
  },
  [theme.breakpoints.up("md")]: {
    width: "60%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "50%",
  },
  [theme.breakpoints.up("xl")]: {
    width: "30%",
  },
}));

const SearchBar = () => {
  const { handleSearch, query } = useGlobalData();
  return (
    <div className="search-bar">
      <StyledTextField
        label="Search news..."
        variant="standard"
        size="small"
        type="search"
        sx={{ bgcolor: "#fff", paddingTop: "10px" }}
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
