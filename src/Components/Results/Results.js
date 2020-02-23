import React from 'react';
import Result from './Result/Result';

const Results = props => {
  return (
    <section className="results">
      {props.results.map((result, index) => {
        return (
          <Result
            key={index}
            result={result}
            openPopup={props.openPopup}
          />
        );
      })}
    </section>
  );
};

export default Results;
