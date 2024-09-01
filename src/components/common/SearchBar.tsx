import {
  clearSuggestions,
  fetchWeatherData,
  selectLocality,
  setQuery,
} from "@/redux/searchSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { AppDispatch, RootState } from "@/redux";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

const SearchBar: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { push } = useRouter();
  const { query, suggestions, loading } = useSelector(
    (state: RootState) => state.search
  );
  const apiKey = process.env.NEXT_PUBLIC_API_KEY || "";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(e.target.value));
  };

  const handleSuggestionClick = (
    localityId: string,
    localityName: string,
    cityName: string
  ) => {
    dispatch(selectLocality({ localityId, localityName, cityName }));
    dispatch(fetchWeatherData({ localityId, apiKey }));
    push(`/weather/${localityId}`);
  };

  useEffect(() => {
    if (query.length < 1) {
      dispatch(clearSuggestions());
    }
  }, [query, dispatch]);

  const shouldShowNoSuggestionsMessage =
    query.length > 1 && suggestions.length === 0;

  const handleClear = () => {
    dispatch(setQuery(""));
    dispatch(clearSuggestions());
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full flex items-center justify-center text-black"
    >
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className={`w-full md:w-3/4 lg:w-1/2 ${
          shouldShowNoSuggestionsMessage || suggestions.length > 0
            ? "rounded-t-3xl mb-0.5"
            : "rounded-3xl"
        } px-4 py-2 md:py-3 outline-none text-black bg-white/80 focus:bg-white/90`}
        placeholder="Search for a location..."
      />
      <div className="flex items-center justify-end">
        <div className="absolute mr-6">
          <div className="w-fit flex items-center gap-2">
            {query.length > 0 && (
              <button className="" onClick={handleClear}>
                <IoMdClose className="text-xl" />
              </button>
            )}
          </div>
        </div>
      </div>
      {suggestions.length > 0 ? (
        <ul className="absolute top-full w-full md:w-3/4 lg:w-1/2 py-1 rounded-b-3xl bg-white/90 max-h-72 overflow-auto">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.localityId}
              className="common-transition py-2 px-4 hover:bg-white cursor-pointer"
              onClick={() =>
                handleSuggestionClick(
                  suggestion.localityId,
                  suggestion.localityName,
                  suggestion.cityName
                )
              }
            >
              {suggestion.localityName}, {suggestion.cityName}
            </li>
          ))}
        </ul>
      ) : shouldShowNoSuggestionsMessage ? (
        <div className="absolute top-full py-3 px-2 w-full md:w-3/4 lg:w-1/2  bg-white/90 border rounded-b-3xl max-h-72 overflow-auto">
          No suggestions available
        </div>
      ) : null}
    </motion.section>
  );
};

export default SearchBar;
