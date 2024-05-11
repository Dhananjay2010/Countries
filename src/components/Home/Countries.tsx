import React, { useState } from "react";
import CountryCard from "./CountryCard";
const Countries: React.FC = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const handleGetCountries = async (): Promise<void> => {
    try {
      const resp = await fetch(``);
      const data = await resp.json();
      setCountries(countries);
    } catch (e) {
      console.log(e);
    } finally {
    }
  };

  return (
    <>
      <CountryCard />
    </>
  );
};

export default Countries;
