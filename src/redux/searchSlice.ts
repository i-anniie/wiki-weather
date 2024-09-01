import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import localityData from "@/locals/localityData.json";

interface SearchState {
  query: string;
  suggestions: { localityId: string; localityName: string; cityName: string }[];
  loading: boolean;
  selectedLocality?: {
    localityId: string;
    localityName: string;
    cityName: string;
  };
  weatherData?: any;
  error?: string;
}

const initialState: SearchState = {
  query: "",
  suggestions: [],
  loading: false,
};

const localities = localityData.localities;

export const fetchWeatherData = createAsyncThunk(
  "search/fetchWeatherData",
  async ({ localityId, apiKey }: { localityId: string; apiKey: string }) => {
    try {
      const response = await axios.get(
        `https://www.weatherunion.com/gw/weather/external/v0/get_locality_weather_data?locality_id=${localityId}`,
        {
          headers: {
            "x-zomato-api-key": apiKey,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch weather data");
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
      state.suggestions = localities
        .filter(
          (locality) =>
            locality.localityName
              .toLowerCase()
              .includes(state.query.toLowerCase()) ||
            locality.cityName.toLowerCase().includes(state.query.toLowerCase())
        )
        .map((locality) => ({
          localityId: locality.localityId,
          localityName: locality.localityName,
          cityName: locality.cityName,
        }));
    },
    selectLocality(
      state,
      action: PayloadAction<{
        localityId: string;
        localityName: string;
        cityName: string;
      }>
    ) {
      state.selectedLocality = action.payload;
    },
    clearSuggestions(state) {
      state.suggestions = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.loading = false;
        state.weatherData = action.payload;
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch weather data";
      });
  },
});

export const { setQuery, selectLocality, clearSuggestions } =
  searchSlice.actions;

export default searchSlice.reducer;
