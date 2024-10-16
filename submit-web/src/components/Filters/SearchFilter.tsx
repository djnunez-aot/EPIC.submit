import React, { useState } from "react";
import { InputAdornment, IconButton, TextField } from "@mui/material";
import { Search, Clear } from "@mui/icons-material";
import { useProjectFilters } from "./projectFilterStore";
import { BCDesignTokens } from "epic.theme";

export const SearchFilter = () => {
  const { filters, setFilters } = useProjectFilters();
  const [searchText, setSearchText] = useState(filters.search_text);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setFilters({ search_text: searchText });
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleClear = () => {
    setFilters({ search_text: "" });
  };

  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Search Submissions"
      value={searchText}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search htmlColor={BCDesignTokens.typographyColorPlaceholder} />
          </InputAdornment>
        ),
        endAdornment: filters.search_text && (
          <InputAdornment position="end">
            <IconButton onClick={handleClear}>
              <Clear htmlColor={BCDesignTokens.typographyColorPlaceholder} />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};