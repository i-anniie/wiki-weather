import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "@/redux";
import PublicLayout from "@/layouts";

interface WeatherPageProps {
  initialWeatherData?: any;
}

const WeatherPage: React.FC<WeatherPageProps> = ({ initialWeatherData }) => {
  const router = useRouter();
  const { localityId } = router.query;
  const { selectedLocality, weatherData: initialWeatherDataFromRedux } =
    useSelector((state: RootState) => state.search);
  const [weatherData, setWeatherData] = useState<any>(
    initialWeatherData || initialWeatherDataFromRedux
  );
  const [loading, setLoading] = useState<boolean>(!initialWeatherData);
  const [error, setError] = useState<string | null>(null);
  const apiKey = process.env.NEXT_PUBLIC_API_KEY || "";

  useEffect(() => {
    if (!localityId || weatherData) return;

    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://www.weatherunion.com/gw/weather/external/v0/get_locality_weather_data?locality_id=${localityId}`,
          {
            headers: {
              "x-zomato-api-key": apiKey,
            },
          }
        );
        setWeatherData(response?.data?.locality_weather_data);
      } catch (error) {
        setError("Failed to fetch weather data");
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [localityId, weatherData, apiKey]);

  // if (loading) return <div className="text-center">Loading...</div>;
  // if (error) return <div className="text-center">Error: {error}</div>;

  // if (!weatherData) return <div className="text-center">No data available</div>;

  return (
    <PublicLayout>
      <section className="main-container">
        <div className=" text-black">
          <h1 className="text-3xl font-bold mb-4 text-white">
            Weather Information
          </h1>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2 bg-red-500">
              {selectedLocality?.localityName || weatherData?.locality_name}
            </h2>
            <div className="flex items-center space-x-4">
              <div>
                <p className="text-4xl font-bold">
                  {weatherData?.temperature
                    ? `${weatherData.temperature}°C`
                    : "Data not available"}
                </p>
                <p className="text-lg text-gray-600">
                  Humidity:{" "}
                  {weatherData?.humidity
                    ? `${weatherData.humidity}%`
                    : "Data not available"}
                </p>
                <p className="text-lg text-gray-600">
                  Rain Accumulation:{" "}
                  {weatherData?.rain_accumulation
                    ? `${weatherData.rain_accumulation} mm`
                    : "Data not available"}
                </p>
                <p className="text-lg text-gray-600">
                  Rain Intensity:{" "}
                  {weatherData?.rain_intensity
                    ? `${weatherData.rain_intensity} mm/h`
                    : "Data not available"}
                </p>
                <p className="text-lg text-gray-600">
                  Wind Direction:{" "}
                  {weatherData?.wind_direction
                    ? weatherData.wind_direction
                    : "Data not available"}
                </p>
                <p className="text-lg text-gray-600">
                  Wind Speed:{" "}
                  {weatherData?.wind_speed
                    ? `${weatherData.wind_speed} km/h`
                    : "Data not available"}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <a href="/" className="text-blue-500 hover:underline">
              Back to search
            </a>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default WeatherPage;
