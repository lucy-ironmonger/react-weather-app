/* eslint react/prop-types: 0 */
/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

const SearchForm = ({ searchLocation, setSearchLocation, onSubmit }) => {
  const handleOnChange = (event) => setSearchLocation(event.target.value);

  return (
    <div className="search-form">
      <input
        type="text"
        id="city"
        name="city"
        onChange={handleOnChange}
        value={searchLocation}
      />
      <button type="submit" onClick={onSubmit}>
        Search
      </button>
    </div>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  searchLocation: PropTypes.string.isRequired,
  setSearchLocation: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
