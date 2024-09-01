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

const SearchBar: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const {push} = useRouter();
  const { query, suggestions, loading } = useSelector(
    (state: RootState) => state.search
  );
  const apiKey = process.env.NEXT_PUBLIC_API_KEY || "";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(e.target.value));
  };

  const handleSuggestionClick = (localityId: string, localityName: string) => {
    dispatch(selectLocality({ localityId, localityName }));
    dispatch(fetchWeatherData({ localityId, apiKey }));
   push(`/weather/${localityId}`);
  };

  useEffect(() => {
    if (query.length < 3) {
      dispatch(clearSuggestions());
    }
  }, [query, dispatch]);

  const shouldShowNoSuggestionsMessage =
    query.length > 2 && suggestions.length === 0;

  return (
    <div className="relative w-full flex items-center justify-center text-black">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className="w-1/2 p-2 rounded-full px-4 py-2"
        placeholder="Search for a location..."
      />
      {loading && (
        <div className="absolute top-full mt-2 p-2 bg-white border border-gray-300 rounded-lg">
          Loading...
        </div>
      )}
      {suggestions.length > 0 ? (
        <ul className="absolute top-full mt-2 w-1/2 bg-white border border-gray-300 rounded-lg max-h-72 overflow-auto">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.localityId}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() =>
                handleSuggestionClick(
                  suggestion.localityId,
                  suggestion.localityName
                )
              }
            >
              {suggestion.localityName}
            </li>
          ))}
        </ul>
      ) : shouldShowNoSuggestionsMessage ? (
        <div className="absolute top-full mt-2 p-2 w-full bg-white border border-gray-300 rounded-lg max-h-72 overflow-auto">
          No suggestions available
        </div>
      ) : null}
    </div>
  );
};

export default SearchBar;
