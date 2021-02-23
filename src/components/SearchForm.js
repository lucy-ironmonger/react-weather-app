/* eslint react/prop-types: 0 */
import React from "react";

const SearchForm = ({ handleOnChange, handleSubmit }) => {
  return (
    <div className="search-form">
      <form className="form">
        <input
          type="text"
          id="city"
          name="city"
          onChange={(event) => handleOnChange(event)}
        />
        <button type="submit" onClick={() => handleSubmit}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
