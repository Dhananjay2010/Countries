import React from "react";

interface CountryDetailsProps {
  countryData: any;
  setSelectedCountry: React.Dispatch<any>;
}
const CountryDetails: React.FC<CountryDetailsProps> = ({
  countryData,
  setSelectedCountry,
}) => {
  const {
    name,
    capital,
    region,
    population,
    flags,
    borders = [],
    currencies,
    subregion,
    tld,
    languages,
  } = countryData || {};

  const { official: official_name, common: nativeName } = name || {};
  const { svg: flag_png, alt } = flags || {};

  const handleBack = (): void => {
    setSelectedCountry(null);
  };

  const headingText = (text: string, value: string): React.ReactNode => {
    return (
      <>
        <div className="flex text-600">
          {text}: <span className="text-300 card_subtext">{value}</span>
        </div>
      </>
    );
  };

  const allCurrenciesString = Object.keys(currencies)
    .map((currency) => currencies[currency].name)
    .join(", ");

  const allLanguages = Object.keys(languages)
    .map((language) => languages[language])
    .join(", ");
  return (
    <>
      <div className="country_details_container flex flex-col">
        <button onClick={handleBack} className="back_btn">
          Back
        </button>
        <div className="flex justify-between items-center flex-wrap">
          <div className="details_image_cont">
            <img className="details_image" src={flag_png} alt={alt} />
          </div>
          <div className="details_text_cont">
            <div className="details_country_name">{official_name}</div>

            <div className="flex gap-10">
              <div className="details_text_left_cont">
                {headingText("Native Name", nativeName)}
                {headingText("Population", population)}
                {headingText("Region", region)}
                {headingText("Sub Region", subregion)}
                {headingText("Capital", capital[0])}
              </div>
              <div className="details_text_left_cont">
                {headingText("Top Level Domain", tld)}
                {headingText("Currencies", allCurrenciesString)}
                {headingText("Languages", allLanguages)}
              </div>
            </div>

            {borders.length > 0 && (
              <div className="border_countries_cont">
                Border Countries :
                {borders.map((neighbour) => {
                  return (
                    <span key={neighbour} className="border_country_tag">
                      {neighbour}
                    </span>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryDetails;
