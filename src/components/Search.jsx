import React from "react";

const Search = () => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="
        flex w-full                       /* always a single row           */
        max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl
        mx-auto
      "
    >
      {/* ───────── INPUT ───────── */}
      <label htmlFor="location" className="sr-only">
        Search destination
      </label>

      <div className="relative flex-grow">
        <input
          id="location"
          type="text"
          autoComplete="off"
          placeholder="Where do you want to go?"
          className="
            w-full
            bg-gray-50 dark:bg-gray-700
            border border-gray-300 dark:border-gray-600
            text-xs sm:text-sm md:text-base
            text-gray-900 dark:text-white
            rounded-lg
            pl-10 pr-14             /* room for icons                  */
            py-2.5
            focus:outline-none focus:ring-2 focus:ring-emerald-500
          "
        />

        {/* left icon  */}
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-400"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              stroke="currentColor"
              strokeWidth="2"
              d="M21 21 16.65 16.65M10.5 17a6.5 6.5 0 1 1 4.6-11.1 6.5 6.5 0 0 1-4.6 11.1Z"
            />
          </svg>
        </div>
      </div>

      {/* ───────── BUTTON ───────── */}
      <button
        type="submit"
        className="
          ml-2
          flex items-center gap-2
          whitespace-nowrap
          px-4 py-2
          rounded-lg
          text-xs sm:text-sm font-medium
          bg-yellow-500 hover:bg-yellow-600
          text-black
          shadow
          shrink-0           /* never let button shrink           */
        "
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
};

export default Search;
