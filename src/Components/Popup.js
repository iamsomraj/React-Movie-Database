import React from 'react';

const Popup = props => {
  return (
    <section className="popup">
      <div className="content">
        <h2>
          {props.selected.Title}
          <span>
            {' '}
            ({props.selected.Year}) {props.selected.Type.toLowerCase()}
          </span>
        </h2>
        <p className="rating">Rating: {props.selected.imdbRating}</p>
        <div className="plot">
          <img src={props.selected.Poster} alt={props.selected.title} />
          <p>{props.selected.Plot}</p>
        </div>
        <button className="close" onClick={props.closePopup}>
          Close
        </button>
      </div>
    </section>
  );
};

export default Popup;
