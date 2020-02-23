import React from 'react';

const Search = props => {
  return (
    <section className="searchbox-wrap">
      <input
        type="text"
        className="searchbox"
        placeholder={"press enter after entering movie name"}
        value={props.inputTerm}
        onChange={props.handleTheInput}
        onKeyPress={props.handleTheSearch}
      />
    </section>
  );
};

export default Search;
