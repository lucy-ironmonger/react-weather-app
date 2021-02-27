/* eslint react/prop-types: 0 */
/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import "../styles/styles.css";
import { Button } from "../styles/styles";

const SearchForm = ({
  searchLocation,
  setSearchLocation,
  onSubmit,
  onKeyPress,
}) => {
  const handleOnChange = (event) => setSearchLocation(event.target.value);

  return (
    <div className="search-form">
      <input
        type="text"
        id="city"
        name="city"
        onChange={handleOnChange}
        value={searchLocation}
        onKeyPress={onKeyPress}
      />
      <Button className="searchBtn" type="submit" onClick={onSubmit}>
        Make it rain
      </Button>
    </div>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  searchLocation: PropTypes.string.isRequired,
  setSearchLocation: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
