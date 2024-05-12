import React from "react";

interface CountryCardProps {
  countryData: any;
  setSelectedCountry: React.Dispatch<any>;
}
const CountryCard: React.FC<CountryCardProps> = ({
  countryData,
  setSelectedCountry,
}) => {
  const { name, capital, region, population, flags } = countryData || {};
  const { official: official_name } = name || {};
  const { png: flag_png, alt } = flags || {};

  const headingText = (text: string, value: string): React.ReactNode => {
    return (
      <>
        <div className="flex text-600 leading-24">
          {text}: <span className="text-300 card_subtext">{value}</span>
        </div>
      </>
    );
  };

  const handleCardClick = (countryData): void => {
    const {
      name,
      tld,
      subregion,
      currencies,
      capital,
      region,
      population,
      flags,
      borders,
      languages,
    } = countryData || {};
    setSelectedCountry({
      name,
      languages,
      capital,
      region,
      population,
      flags,
      borders,
      currencies,
      subregion,
      tld,
    });
  };

  return (
    <div
      key={official_name}
      className="flex flex-col card-cont"
      onClick={() => handleCardClick(countryData)}
    >
      <div className="card_img_cont">
        <img className="card-image" src={flag_png} alt={alt} />
      </div>
      <div className="flex flex-col p-10 card_country_detail">
        <span className="card_country_name">{official_name}</span>
        {headingText("Population", population)}
        {headingText("Region", region)}
        {headingText("Capital", capital[0])}
      </div>
    </div>
  );
};

export default CountryCard;
