import React from 'react';

const Result = props => {
  return (
    <section
      className="result"
      onClick={() => props.openPopup(props.result.imdbID)}
    >
      <img src={props.result.Poster} alt={props.result.Title} />
      <h3>{props.result.Title}</h3>
    </section>
  );
};

export default Result;
