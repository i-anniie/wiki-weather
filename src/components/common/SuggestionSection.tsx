// import { useRouter } from "next/router";
// import React from "react";
// import { useDispatch } from "react-redux";
// import { AppDispatch } from "@/redux";
// import { fetchWeatherData, selectLocality } from "@/redux/searchSlice";
// import localityData from "@/locals/localityData.json";

// interface Locality {
//   localityId: string;
//   localityName: string;
// }

// const SuggestionSection = () => {
//   const dispatch: AppDispatch = useDispatch();
//   const { push } = useRouter();

//   const apiKey = process.env.NEXT_PUBLIC_API_KEY || "";

//   const handleSuggestionClick = (localityId: string, localityName: string) => {
//     dispatch(selectLocality({ localityId, localityName }));
//     dispatch(fetchWeatherData({ localityId, apiKey }));
//     push(`/weather/${localityId}`);
//   };

//   const selectedSuggestions = [...localityData.localities]
//     .sort(() => 0.5 - Math.random())
//     .slice(0, 6);

//   return (
//     <section>
//       <div className="grid grid-cols-3 gap-4">
//         {selectedSuggestions.map((suggestion) => (
//           <div key={suggestion.localityId} className="w-fit h-fit">
//             <h1
//               onClick={() =>
//                 handleSuggestionClick(
//                   suggestion.localityId,
//                   suggestion.localityName
//                 )
//               }
//               className="cursor-pointer hover:underline"
//             >
//               {suggestion.localityName}
//             </h1>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default SuggestionSection;

import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux";
import { fetchWeatherData, selectLocality } from "@/redux/searchSlice";
import localityData from "@/locals/localityData.json";

interface Locality {
  localityId: string;
  localityName: string;
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

  const handleSuggestionClick = (localityId: string, localityName: string) => {
    dispatch(selectLocality({ localityId, localityName }));
    dispatch(fetchWeatherData({ localityId, apiKey }));
    router.push(`/weather/${localityId}`);
  };

  return (
    <section>
      <div className="grid grid-cols-3 gap-4">
        {selectedSuggestions.map(({ localityId, localityName }: Locality) => (
          <div
            key={localityId}
            className="cursor-pointer hover:underline w-fit"
            onClick={() => handleSuggestionClick(localityId, localityName)}
          >
            {localityName}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuggestionSection;
