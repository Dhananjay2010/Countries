import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import { renderObj } from "../../utils/RenderObj";
const Countries: React.FC = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  // useEffect(() => {
  //   handleGetCountries();
  // }, []);

  // const handleGetCountries = async (): Promise<void> => {
  //   try {
  //     const resp = await fetch(`https://restcountries.com/v3.1/all`);
  //     const data = await resp.json();
  //     console.log(data.slice(0, 8));
  //     setCountries(data.silce(0, 8));
  //   } catch (e) {
  //     console.log(e);
  //   } finally {
  //   }
  // };

  return (
    <>
      <div className="all_container">
        <div className="flex flex-wrap countries_container">
          {renderObj.map((country) => {
            return (
              <CountryCard
                countryData={country}
                setSelectedCountry={setSelectedCountry}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Countries;
