// import { useRouter } from "next/router";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useSelector } from "react-redux";
// import { RootState } from "@/redux";
// import PublicLayout from "@/layouts";
// import { BsMoisture } from "react-icons/bs";
// import { FiWind } from "react-icons/fi";
// import { GiHeavyRain, GiWindsock } from "react-icons/gi";
// import { FaCloudRain } from "react-icons/fa";

// interface WeatherPageProps {
//   initialWeatherData?: any;
// }

// const WeatherPage: React.FC<WeatherPageProps> = ({ initialWeatherData }) => {
//   const router = useRouter();
//   const { localityId } = router.query;
//   const { selectedLocality, weatherData: initialWeatherDataFromRedux } =
//     useSelector((state: RootState) => state.search);
//   const [weatherData, setWeatherData] = useState<any>(
//     initialWeatherData || initialWeatherDataFromRedux
//   );
//   const [loading, setLoading] = useState<boolean>(
//     !initialWeatherData && !initialWeatherDataFromRedux
//   );
//   const [error, setError] = useState<string | null>(null);
//   const apiKey = process.env.NEXT_PUBLIC_API_KEY || "";

//   useEffect(() => {
//     const fetchWeatherData = async () => {
//       if (!localityId || weatherData) return;

//       setLoading(true); // Ensure loading state is true when fetching data

//       try {
//         const response = await axios.get(
//           `https://www.weatherunion.com/gw/weather/external/v0/get_locality_weather_data?locality_id=${localityId}`,
//           {
//             headers: {
//               "x-zomato-api-key": apiKey,
//             },
//           }
//         );
//         console.log("response", response);
//         setWeatherData(response);
//         setError(null); // Clear any previous errors
//       } catch (error) {
//         setError("Failed to fetch weather data");
//       } finally {
//         setLoading(false); // Ensure loading state is false after fetching data
//       }
//     };

//     fetchWeatherData();
//   }, [localityId, apiKey]);

//   console.log("weatherData", weatherData?.locality_weather_data);

//   return (
//     <PublicLayout>
//       <section className="main-container top-spacing flex flex-col items-center gap-4 justify-center h-full">
//         <div className="bg-black/40 rounded-lg p-6 w-2/6 flex flex-col gap-6">
//           {loading ? (
//             <div className="flex items-center justify-center">Loading...</div>
//           ) : error ? (
//             <div className="flex items-center justify-center">{error}</div>
//           ) : weatherData && selectedLocality?.localityName ? (
//             <div>
//               <div className="flex justify-between items-center">
//                 <h1 className="text-3xl font-bold">
//                   {selectedLocality?.localityName} Weather
//                 </h1>
//                 <div className="col-span-1 flex items-start justify-end">
//                   <div className="text-6xl font-bold flex gap-1">
//                     {weatherData?.locality_weather_data?.temperature}
//                     <span className="text-xl">°C</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex flex-col gap-2">
//                 <div className="p-4 bg-gray-200 rounded-lg text-black">
//                   <div className="text-xl font-bold flex justify-between items-center">
//                     <div className="flex gap-2 items-center">
//                       <h1>Humidity: </h1>
//                       <div className="flex gap-1">
//                         {weatherData?.locality_weather_data?.humidity}
//                         <span className="text-xl">%</span>
//                       </div>
//                     </div>
//                     <BsMoisture />
//                   </div>
//                 </div>
//                 <div className="p-4 bg-gray-200 rounded-lg text-black">
//                   <div className="text-xl font-bold flex justify-between items-center">
//                     <div className="flex gap-2 items-center">
//                       <h1>Rain Accumulation: </h1>
//                       <div className="flex gap-1">
//                         {weatherData?.locality_weather_data?.rain_accumulation}
//                         <span className="text-xl">mm</span>
//                       </div>
//                     </div>
//                     <FaCloudRain />
//                   </div>
//                 </div>
//                 <div className="p-4 bg-gray-200 rounded-lg text-black">
//                   <div className="text-xl font-bold flex justify-between items-center">
//                     <div className="flex gap-2 items-center">
//                       <h1>Rain Intensity: </h1>
//                       <div className="flex gap-1">
//                         {weatherData?.locality_weather_data?.rain_intensity}
//                         <span className="text-xl">mm/h</span>
//                       </div>
//                     </div>
//                     <GiHeavyRain />
//                   </div>
//                 </div>
//                 <div className="p-4 bg-gray-200 rounded-lg text-black">
//                   <div className="text-xl font-bold flex justify-between items-center">
//                     <div className="flex gap-2 items-center">
//                       <h1>Wind Direction: </h1>
//                       <div className="flex gap-1">
//                         {weatherData?.locality_weather_data?.wind_direction}
//                       </div>
//                     </div>
//                     <GiWindsock />
//                   </div>
//                 </div>
//                 <div className="p-4 bg-gray-200 rounded-lg text-black">
//                   <div className="text-xl font-bold flex justify-between items-center">
//                     <div className="flex gap-2 items-center">
//                       <h1>Wind Speed: </h1>
//                       <div className="flex gap-1">
//                         {weatherData?.locality_weather_data?.wind_speed}
//                         <span className="text-xl">km/h</span>
//                       </div>
//                     </div>
//                     <FiWind />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <div className="flex items-center justify-center">
//               No weather data available
//             </div>
//           )}
//         </div>

//         <div className="flex justify-end w-2/6">
//           <a href="/" className="text-white underline">
//             Back to search
//           </a>
//         </div>
//       </section>
//     </PublicLayout>
//   );
// };

// export default WeatherPage;

import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "@/redux";
import PublicLayout from "@/layouts";
import { BsMoisture } from "react-icons/bs";
import { FiWind } from "react-icons/fi";
import { GiHeavyRain, GiWindsock } from "react-icons/gi";
import { FaCloudRain } from "react-icons/fa";

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
  const [loading, setLoading] = useState<boolean>(
    !initialWeatherData && !initialWeatherDataFromRedux
  );
  const [error, setError] = useState<string | null>(null);
  const apiKey = process.env.NEXT_PUBLIC_API_KEY || "";

  useEffect(() => {
    if (!initialWeatherDataFromRedux) {
      router.push("/");
      return;
    }

    const fetchWeatherData = async () => {
      if (!localityId || weatherData) return;

      setLoading(true);

      try {
        const response = await axios.get(
          `https://www.weatherunion.com/gw/weather/external/v0/get_locality_weather_data?locality_id=${localityId}`,
          {
            headers: {
              "x-zomato-api-key": apiKey,
            },
          }
        );
        console.log("response", response.data.locality_weather_data);
        setWeatherData(response);
        setError(null);
      } catch (error) {
        console.error("Error fetching weather data", error);
        setError("Failed to fetch weather data");
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [localityId, apiKey]);

  console.log("weatherData", weatherData);

  return (
    <PublicLayout>
      <section className="main-container flex flex-col items-center gap-4 justify-center h-full">
        <div className="bg-black/40 rounded-lg p-4 md:p-6 lg:w-1/2 2xl:w-2/6 flex flex-col gap-6">
          {loading ? (
            <div className="flex items-center justify-center">Loading...</div>
          ) : error ? (
            <div className="flex items-center justify-center">{error}</div>
          ) : weatherData && selectedLocality?.localityName ? (
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center gap-4">
                <h1 className="text-xl md:text-3xl font-bold">
                  {selectedLocality?.localityName}, {selectedLocality?.cityName}
                </h1>
                <div className="col-span-1 flex items-start justify-end">
                  <div className="text-4xl md:text-6xl font-bold flex gap-1">
                    {weatherData?.locality_weather_data?.temperature}
                    <span className="text-xl">°C</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="p-4 bg-gray-200 rounded-lg text-black">
                  <div className="text-xl font-bold flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <h1>Humidity: </h1>
                      <div className="flex gap-1">
                        {weatherData?.locality_weather_data?.humidity}
                        <span className="text-xl">%</span>
                      </div>
                    </div>
                    <BsMoisture />
                  </div>
                </div>
                <div className="p-4 bg-gray-200 rounded-lg text-black">
                  <div className="text-xl font-bold flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <h1>Rain Accumulation: </h1>
                      <div className="flex gap-1">
                        {weatherData?.locality_weather_data?.rain_accumulation}
                        <span className="text-xl">mm</span>
                      </div>
                    </div>
                    <FaCloudRain />
                  </div>
                </div>
                <div className="p-4 bg-gray-200 rounded-lg text-black">
                  <div className="text-xl font-bold flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <h1>Rain Intensity: </h1>
                      <div className="flex gap-1">
                        {weatherData?.locality_weather_data?.rain_intensity}
                        <span className="text-xl">mm/h</span>
                      </div>
                    </div>
                    <GiHeavyRain />
                  </div>
                </div>
                <div className="p-4 bg-gray-200 rounded-lg text-black">
                  <div className="text-xl font-bold flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <h1>Wind Direction: </h1>
                      <div className="flex gap-1">
                        {weatherData?.locality_weather_data?.wind_direction}
                      </div>
                    </div>
                    <GiWindsock />
                  </div>
                </div>
                <div className="p-4 bg-gray-200 rounded-lg text-black">
                  <div className="text-xl font-bold flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <h1>Wind Speed: </h1>
                      <div className="flex gap-1">
                        {weatherData?.locality_weather_data?.wind_speed}
                        <span className="text-xl">km/h</span>
                      </div>
                    </div>
                    <FiWind />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center">
              No weather data available
            </div>
          )}
        </div>

        <div className="flex justify-end lg:w-1/2 2xl:w-2/6">
          <a href="/" className="text-white underline">
            Back to search
          </a>
        </div>
      </section>
    </PublicLayout>
  );
};

export default WeatherPage;
