import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import { TbTemperature, TbMapPin } from "react-icons/tb";
import localityData from "@/locals/localityData.json";

interface Locality {
  localityId: string;
  localityName: string;
}

interface WeatherData {
  localityId: string;
  localityName: string;
  temperature: number;
}

const WeatherCardSlider: React.FC = () => {
  const sliderRef = useRef<Slider>(null);
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string>("");

  const apiKey = process.env.NEXT_PUBLIC_API_KEY || "";

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    arrows: false,
  };

  // Select three random localities outside of the useEffect
  const selectedLocalities: Locality[] = React.useMemo(() => {
    return localityData.localities.sort(() => 0.5 - Math.random()).slice(0, 3);
  }, []);

  // useEffect(() => {
  //   const fetchWeatherData = async () => {
  //     setLoading(true);
  //     setError("");

  //     try {
  //       const weatherPromises = selectedLocalities.map(
  //         async ({ localityId, localityName }) => {
  //           try {
  //             const { data } = await axios.get(
  //               `https://www.weatherunion.com/gw/weather/external/v0/get_locality_weather_data?locality_id=${localityId}`,
  //               {
  //                 headers: {
  //                   "x-zomato-api-key": apiKey,
  //                 },
  //               }
  //             );

  //             return {
  //               localityId,
  //               localityName,
  //               temperature: Math.round(data.locality_weather_data.temperature),
  //             };
  //           } catch (error) {
  //             console.error(
  //               `Failed to fetch weather for locality ${localityId}:`,
  //               error
  //             );
  //             return null;
  //           }
  //         }
  //       );

  //       const weatherResults = await Promise.all(weatherPromises);
  //       setWeatherData(
  //         weatherResults.filter(
  //           (result): result is WeatherData => result !== null
  //         )
  //       );
  //     } catch (err) {
  //       console.error(err);
  //       setError("Failed to fetch weather data. Please try again later.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchWeatherData();
  // }, [selectedLocalities, apiKey]);

  // if (loading) {
  //   return (
  //     <div className="flex items-center justify-center">
  //       <p>Loading weather data...</p>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="flex items-center justify-center">
  //       <p className="text-red-500">Failed to fetch weather data</p>
  //     </div>
  //   );
  // }

  const weatherData1 = [
    {
      localityId: "1",
      localityName: "Rajinder Nagar",
      temperature: 10,
    },
    {
      localityId: "2",
      localityName: "Mumbai",
      temperature: 20,
    },
    {
      localityId: "3",
      localityName: "Old Church Road",
      temperature: 30,
    },
  ];

  return (
    <div className="w-full max-w-xs mx-auto">
      <Slider ref={sliderRef} {...settings}>
        {weatherData1.map((data) => (
          <div
            key={data.localityId}
            className="!flex items-center justify-center py-1 gap-1 rounded-md bg-gray-800/40"
          >
            {/* <TbMapPin className="text-2xl" /> */}

            <div className="flex flex-col gap-1">
              <h2 className="">{data.localityName}</h2>

              <div className="flex items-center justify-start gap-1 text-sm">
                <TbTemperature className="text-lg" />
                <p className="">{data.temperature}°C</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WeatherCardSlider;
