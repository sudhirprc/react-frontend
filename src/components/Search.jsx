// Search.jsx
import React, { useEffect, useMemo, useState } from "react";
import cities from "../data/cities.json";

import { Autocomplete, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Search() {
  /* ─── state ─── */
  const [options, setOptions] = useState([]);
  const [input, setInput] = useState("");

  /* ─── mount: load & sort city list ─── */
  useEffect(() => {
    const list = Array.from(new Set(cities.map((c) => c.trim()))).sort((a, b) =>
      a.localeCompare(b)
    );
    setOptions(list);
  }, []);

  /* ─── memoised filtered list (first 15 matches) ─── */
  const filteredOptions = useMemo(() => {
    if (!input) return options.slice(0, 15);
    return options
      .filter((c) => c.toLowerCase().startsWith(input.toLowerCase()))
      .slice(0, 15);
  }, [input, options]);

  /* ─── UI ─── */
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Selected city:", input);
        /* Trigger navigation / fetch here if needed */
      }}
      className="flex w-full max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto"
    >
      <Autocomplete
        freeSolo
        disablePortal /* <— keeps the popper inside the flow */
        options={filteredOptions}
        value={input}
        onInputChange={(_, v) => setInput(v)}
        className="flex-grow"
        PopperProps={{
          modifiers: [
            { name: "offset", options: { offset: [0, 6] } }, // 6 px below input
          ],
          sx: { zIndex: 50 }, // make sure it sits *below* your navbar (if navbar z‑index > 40)
        }}
        sx={{
          "& .MuiInputBase-root": {
            fontSize: { xs: 12, sm: 14, md: 16 },
            paddingRight: "3.5rem",
            backgroundColor: "#F9FAFB",
            borderRadius: "0.5rem",
          },
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Where do you want to go?"
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ fontSize: 18, color: "text.secondary" }} />
                </InputAdornment>
              ),
              sx: {
                "& fieldset": { borderColor: "#D1D5DB" },
                "&:hover fieldset": { borderColor: "#10B981" },
                "&.Mui-focused fieldset": { borderColor: "#10B981" },
              },
            }}
          />
        )}
      />

      {/* submit button */}
      <button
        type="submit"
        className="ml-2 flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium bg-yellow-500 hover:bg-yellow-600 text-black shadow shrink-0"
      >
        <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none">
          <path
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <span className="hidden xs:inline">Search</span>
      </button>
    </form>
  );
}
