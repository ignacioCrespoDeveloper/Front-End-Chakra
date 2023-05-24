import { IconContext } from "react-icons";
import { FiFlag } from "react-icons/fi"; // You can replace "FiFlag" with the appropriate flag icon from the library

const CountryFlag = ({ countryCode }) => {
  const flagSize = 24; // Adjust the size of the flag icon as needed

  // Map the country code to the corresponding flag icon
  const getFlagIcon = (countryCode) => {
    switch (countryCode) {
      case "US":
        return <FiFlag size={flagSize} />;
      // Add more cases for other country codes and their respective flag icons

      default:
        return null; // Return null or a default flag icon for unknown country codes
    }
  };

  const flagIcon = getFlagIcon(countryCode);

  return (
    <IconContext.Provider value={{ size: flagSize }}>
      {flagIcon}
    </IconContext.Provider>
  );
};

export default CountryFlag;
