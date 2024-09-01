import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux";
import { fetchWeatherData, selectLocality } from "@/redux/searchSlice";
import localityData from "@/locals/localityData.json";
import { motion } from "framer-motion";

interface Locality {
  localityId: string;
  localityName: string;
  cityName: string;
}

const SuggestionSection: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();
  const [selectedSuggestions, setSelectedSuggestions] = useState<Locality[]>(
    []
  );

  const apiKey = process.env.NEXT_PUBLIC_API_KEY || "";

  useEffect(() => {
    const randomizedLocalities = localityData.localities
      .sort(() => Math.random() - 0.5)
      .slice(0, 6);
    setSelectedSuggestions(randomizedLocalities);
  }, []);

  const handleSuggestionClick = (
    localityId: string,
    localityName: string,
    cityName: string
  ) => {
    dispatch(selectLocality({ localityId, localityName, cityName }));
    dispatch(fetchWeatherData({ localityId, apiKey }));
    router.push(`/weather/${localityId}`);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      className="w-full md:w-3/4 lg:w-1/2"
    >
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 place-items-center">
        {selectedSuggestions.map(
          ({ localityId, localityName, cityName }: Locality) => (
            <div
              key={localityId}
              className="cursor-pointer text-center hover:underline w-fit"
              onClick={() =>
                handleSuggestionClick(localityId, localityName, cityName)
              }
            >
              {localityName}, {cityName}
            </div>
          )
        )}
      </div>
    </motion.section>
  );
};

export default SuggestionSection;
